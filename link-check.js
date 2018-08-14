/**
 * A small script to manually ensure that no links have been broken.
 */

const args = require("yargs").argv;
const fs = require("fs");
const fetch = require("node-fetch");
const chalk = require("chalk").default;
const { spawn } = require("child_process");

if (args.generate) {
    generateLinksToCheck();
} else {
    checkLinks();
}

function checkUrlExists(urlToCheck) {
    return fetch(urlToCheck).then(res => res.ok || urlToCheck.includes("/404/"));
}

/**
 * Generate a list of the links we need to check.
 */
function generateLinksToCheck() {
    const sitemap = fs.readFileSync("./public/sitemap.xml", "utf8");
    const links = sitemap.match(/<loc>.+<\/loc>/g);
    const cleanedLinks = links.map(link => {
        return link.replace("<loc>", "").replace("</loc>", "");
    }).filter(link => {
        // Filter out tag links.
        return !link.match(/\/tags\//)
    }).sort();


    fs.writeFileSync("current-links.json", JSON.stringify(cleanedLinks, null, 4), "utf8");

    console.log(`A list of existing site links has been generated in ${chalk.yellow("current-links.json")}.`);
    console.log(`Run ${chalk.yellow("yarn links:test")} in the future to test against these links.`);
}

/**
 * Check the already generated list of links.
 */
function checkLinks() {
    if (!fs.existsSync("./current-links.json")) {
        console.log(
            chalk.red(
                "Unable to find './current-links.json'. Be sure to run 'yarn links:generate' before this command."
            )
        );
        return;
    }

    const links = JSON.parse(fs.readFileSync("./current-links.json", "utf8"));
    const badLinks = [];

    const buildProcess = spawn("yarn", ["run", "edit"], { stdio: "inherit" });

    console.log("Waiting for docs server to start. Link checking will begin soon...\n");

    setTimeout(() => {
        console.log("Beginning link checking...");

        const promises = links.map(link => {
            return checkUrlExists(link).then(exists => {
                if (exists) {
                    console.log(chalk.green(link));
                } else {
                    badLinks.push(link);
                    console.log(chalk.red(link));
                }
            });
        });

        Promise.all(promises).then(() => {
            if (badLinks.length === 0) {
                console.log(chalk.green("All the links in the current-links.json were successfully validated."));
            } else {
                console.log(
                    badLinks.length +
                        chalk.red(
                            " bad links were found from the current-links.json. The following links were invalid:\n"
                        )
                );
                badLinks.forEach(link => {
                    console.log(link);
                });
            }

            buildProcess.kill();
        }).catch(() => {
            buildProcess.kill();
        });
    }, 8000);
}
