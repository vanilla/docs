---
title: Adding New Embeds
tags:
    - Developers
    - Addons
    - Embeds
    - Embedding
category: addons
menu:
    developer:
        parent: addons
        weight: 17
---

## Embedded Content

Vanilla allows select remote site content to be rendered as rich embedded content. Links from sites like Twitter, YouTube or Giphy can be displayed with additional feature and functionality. By default, Vanilla comes with support for the following sites:

1. [CodePen](https://codepen.io)
1. [Getty Images](https://www.gettyimages.com)
1. [GIPHY](https://giphy.com)
1. [Imgur](https://imgur.com)
1. [Instagram](https://www.instagram.com)
1. [SoundCloud](https://soundcloud.com)
1. [Twitch](https://www.twitch.tv)
1. [Twitter](https://twitter.com)
1. [Vimeo](https://vimeo.com)
1. [Wistia](https://wistia.com)
1. [YouTube](https://www.youtube.com)

Adding support for more sites requires an addon provide the necessary functionality to support it.

## Backend Embed Components

Vanilla's backend embed capabilities are broken up into two primary parts: an embed factory and an embed. Each piece is required to add support for new embedded content and must be registered with Vanilla's core embed service.

### Embed Factory

An embed's factory is responsible for generating a configured instance of an embed. Typically, embed factories provided by addons will only need to be concerned with the ability to transform a URL into data that an embed instance can be created with. To this end, they require three basic capabilities:

1. Tell the embed service which domains are supported.
1. Tell the embed service which paths on their domains are supported.
1. Transform a compatible URL into an instance of their embed.

For example, here's a basic embed factory:

```php
class ExampleEmbedFactory extends \Vanilla\EmbeddedContent\AbstractEmbedFactory {

    const DOMAINS = ["example.com"];

    protected function getSupportedDomains(): array {
        return self::DOMAINS;
    }

    protected function getSupportedPathRegex(string $domain): string {
        return "`^/?embedded-content/(\d+)`";
    }

    public function createEmbedForUrl(string $url): \Vanilla\EmbeddedContent\AbstractEmbed {
        preg_match("`^/?embedded-content/(?<embedID>\d+)`", $url, $matches);

        $data = [
            "embedID" => $matches["embedID"] ?? null,
        ];

        return new ExampleEmbed($data);
    }
}
```

This class is setup to tell Vanilla's embed service it can handle URLs on example.com, starting with "embedded-content" and followed by at least one number. If the embed service encounters any of these URLs, it will invoke to the class's `createEmbedForUrl` method using them. The ID will be extracted from the URL and used to construct a new instance of `ExampleEmbed`, which is then returned.

Please note: all embed factories **must** extend `Vanilla\EmbeddedContent\AbstractEmbedFactory`.

### Individual Embeds

Each type of embed should be represented by a dedicated embed class. These simple classes are essentially responsible for validating the data passed into them and ensuring all necessary data to render the embed will be available to the frontend components. They are primarily responsible for providing two things:

1. Telling the embed service which types of embed should use the class.
1. Providing a schema to validate the embed data.

```php
class ExampleEmbed extends \Vanilla\EmbeddedContent\AbstractEmbed` {

    const TYPE = "example";

    /**
     * @inheritdoc
     */
    protected function getAllowedTypes(): array {
        return [self::TYPE];
    }

    /**
     * @inheritdoc
     */
    protected function schema(): \Garden\Schema\Schema {
        return \Garden\Schema\Schema::parse([
            "embedID:i",
        ]);
    }
}
```

This class will tell the embed service only to attempt to instantiate it for "example" embeds. It also adds data validation, ensuring the required "embedID" parameter is provided and that is is a number.

Please note: all embeds **must** extend `Vanilla\EmbeddedContent\AbstractEmbed`.

### Registering an Embed

Now that we have an embed and an embed factory, it's time to register them with the embed service. This requires some manipulation of the container. To this end, addons will need to make use of the `container_init` event. For example:

```php
public function container_init(Container $container) {
    $embedService = $container->get(\Vanilla\EmbeddedContent\EmbedService::class);
    $embedService->registerFactory($container->get(ExampleEmbedFactory::class))
        ->registerEmbed(ExampleEmbedFactory::class, ExampleEmbedFactory::TYPE)
}
```

The `ExampleEmbed` embed is registered, as is its factory. The call to `registerEmbed` includes a parameter to identify which embed types are supported by the embed class.

That's it! Vanilla's backend is now configured to support the "example" embed.

## Frontend Embed Components

Now that we have the backend components registered, it's time to make them shine with some frontend scripting. In order to register your embed with the _frontend_ embed service, you'll need an entrypoint. For example, to register a new frontend embed component on the forum, your addon should have a `src/scripts/entries/forum.ts` (or forum.tsx) file. The content of this file will depend on your addon, but at minimum, addons will need to import the `registerEmbed` function. Here's a bare-bones example:

```ts
import { registerEmbed } from "@library/embeddedContent/embedService";
import { ExampleEmbed } from "../embeds/ExampleEmbed";
registerEmbed("example", ExampleEmbed);
```

Here, we're telling the frontend embed service to register the `ExampleEmbed` function as a handler for the "example" embed type. In this case, `ExampleEmbed` is a React function component. The embed service will create an instance of this component, using the embed data to configure the props for the instance. At this point, the React component can do whatever it needs to do with the data to render the new embed. For our example, we'll use a very basic component:

```tsx
/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { EmbedContainer } from "@library/embeddedContent/EmbedContainer";
import { EmbedContent } from "@library/embeddedContent/EmbedContent";
import { IBaseEmbedProps } from "@library/embeddedContent/embedService";
import React from "react";

interface IProps extends IBaseEmbedProps {
    exampleID: number;
}

/**
 * A class for rendering example embeds.
 */
export function ExampleEmbed(props: IProps): JSX.Element {
    const embedUrl = `https://example.com/embed/${props.exampleID}`;

    return (
        <EmbedContainer inEditor={props.inEditor}>
            <EmbedContent type={props.embedType} inEditor={props.inEditor}>
                <iframe src={embedUrl} />
            </EmbedContent>
        </EmbedContainer>
    );
}
```

The `ExampleEmbed` component will render a simple iframe with the source URL based on the value of `exampleID` in its props.

Please note, embed components **should** wrap their output in `EmbedContainer` and `EmbedContent`.

That's it! You've now registered a new embed with the frontend embed service.
