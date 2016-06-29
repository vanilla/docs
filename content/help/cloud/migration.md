---
title: Migration Services
layout: docs
categories: ["Cloud","Migration"]
---

# Migration Services Overview

Vanilla offers full, professional migration services from nearly any platform imaginable. If you provide the data, we'll figure out how to make it work in Vanilla.

The process below assumes you will provide a database dump. We also perform API-based migrations from cloud services when that is necessary and possible. Talk to your account representative if you require a different type of migration like this.

## Estimating your migration

1. You provide the platform name, version number (if applicable), and number of users & posts for your current community platform.
2. Vanilla will provide an SFTP drop.
3. You provide a test dump of your data to the SFTP. This is typically a database dump, but may include additional files like avatars or attachments depending on your platform. **Please provide a full dump for an accurate estimate**. Vanilla will generally accept an NDA if one is required.
4. You provide the email address for the user that will become the owner account.
5. You provide any working username & password combination for testing.
6. Vanilla will evaluate the data and provide a cost estimate and, if requested, a downtime estimate (how long your forum will need to be offline during the transition).
7. Vanilla will provide feedback on concerns, limitations, or other needs.

## Test migration

1. Vanilla will import your test dump to a Vanilla forum.
2. You review the test import and provide feedback on data integrity.
3. Vanilla makes any corrections necessary.
4. You provide a list of URL patterns that will need to be 301 redirected (discussions, profiles, categories, etc). We will have a pre-existing list for most common platforms, but be sure to mention any customizations or special URLs you need us to handle.
5. Vanilla implements the 301 redirects and you test them.
6. A final migration is scheduled.

## Final migration

1. You place your current forum into read-only mode.
2. You create a fresh data dump, upload it to Vanilla's SFTP, and notify your contact(s) at Vanilla.
3. Vanilla confirms it received your final dump and the final import begins.
4. Vanilla notifies you when the import is complete.
5. You verify the import is correct.
6. You switch over DNS, SSO, and/or any other final switchovers. Consult with your Vanilla contact if you are unsure.
7. If your forum was previously on a domain not being redirected to your new forum, be sure to 301 redirect the folder (with the entire URL intact) to your new forum.
8. You're done. Sweet!

## Migration security

Migration data should always be sent to Vanilla via SFTP, available by request to your Account Manager. Data can optionally be encrypted using Vanilla's Public Key, provided below:

  ```
  -----BEGIN PGP PUBLIC KEY BLOCK-----
  Version: GnuPG/MacGPG2 v2.0.20 (Darwin)
  Comment: GPGTools - https://gpgtools.org

  mQENBFOPIr0BCACy3qGvAMOG48rmqHwPchaot4YL1W7LoWUaNGNr5YjqnRhdMy8c
  vca5Si0Z1QJ57N1cYjtG9+75IpUDZ0KhCaVzx4Smaqmx2Ezgp79/Kr4hY5tdHvky
  0W8B0XNU9U5hJtPuSW0wCpiF68du1d5OcVDDuCe1f4vCwJbiZwluNeIUrUTZeKI1
  8hO5u1gPQGyIX5LL7X6XWQ9Prvn6wmqscdhg8DlXFfDh64zhqhGC/uPCLXHFcHcz
  RrBBQ1iXCBd8TRfy8XBOGbzAiWEaO17mhxlIGTdfsAKYc/UU5TkZDQFq+ipuvyrD
  Zsvjk93FPBd4x1zPFCu+40HFQWh0mmsoe3RpABEBAAG0RFZhbmlsbGEgT3BlcmF0
  aW9ucyAoVmFuaWxsYSBPcGVyYXRpb25zIFRlYW0pIDxvcHNAdmFuaWxsYWZvcnVt
  cy5jb20+iQE9BBMBCgAnBQJTjyK9AhsDBQkHhh+ABQsJCAcDBRUKCQgLBRYCAwEA
  Ah4BAheAAAoJEIkj1hflHtRHKu0IAIJ02m3Q0YsWtVVTQ3RI+yz/5G5ewjp+a3iv
  oZybmNGInYEIKRNSlSQYf7K7B7fogGr7pAq+aVHE6yUOIwsHiAnK6U2Qpo6/mrlr
  U2CS24LwSMjX+1x6iV+REEQM9sRZ1olfvrdZAKLgqZZTMyK5/eOyHjgZktHJgzlo
  mIzd5zHx1xopEKDcZnwqxNWvqaZwRIkdUXWuTVs+HqCG6Cc6sO701k0oJmMmWeoI
  4khaIokv4VdEibvdD545ru/NjR3zPHUhsrkxX+EggCWJggZ7fiu+98AUbkhGM24T
  cU4T3TaNsCgjaedgihVb6g1zdKrWCK2AXXOttR8i0PY+ZqSACdy5AQ0EU48ivQEI
  AL8k9yPxIItjQ398+pZUplLDSufYzeMGGgJRJQUjfSGYBN8aPLWJ/E6MZPVRHmBT
  jssIYhyxKUXTUY6M+hiTt0vpoYkD9oz3lLyvEzedgUJ8RrisGU+1dL3P5+YJf1/C
  tC468OkQxAB70oMCag/PXnkljB5fZzgFhfQs8IHeUrdTyVlhrRkUxbh5EjOj3cnE
  nKlW2eNM2QG/FduBYmPaPf9slcGDBo3SacQ+IcmlEH83ZycRhcoaSfa6sKVdQqq8
  /FnhtNsOWnu1kYEvX/Qc8Uaoub40ESVTR5Qdj97IiH1NO6q2h5nAwmMC74q0EZzP
  sQE1vqdsQE+oAEkaNyz5P68AEQEAAYkBJQQYAQoADwUCU48ivQIbDAUJB4YfgAAK
  CRCJI9YX5R7UR5K8B/970DkBOsiZkSWBVuNVedijD4LSo4LF1o+Xm9/DUH5yXe99
  CHuiK6iCHRGrJAGlUC2XETB4mA+dwCLQ/Gs4HTLSWoqeWcOfoyyLlYYHk5whWUw3
  DI3Qj/hH+GvsJoJ2LdgJWBKU8WsXrR/GS9WqhV7sERQbaoUKB8ZbledtXlT7Vjmb
  U6QvNWXl0gzCnBhdcslYzlZ5KxpQqX67Qo020shfemAKJkwXuMJAMB6Q7p5L+JE9
  lFkyInx1ZzHOrVfpO9M8l08+9ArpH3+7RvSS60oMF56fNQwuOKiGgHLOZhkiRao7
  mdgI8Hx09QYcxGjehtMJNzQQ6qryx8UNAaEtB8/w
  =QysZ
  -----END PGP PUBLIC KEY BLOCK-----
  ```

## Personally-identifiable information

If a client does not wish to provide email addresses during a migration, we recommend formulating dummy email addresses. We can do this automatically during the import if requested. Example: `{uniqueid}@yourdomain.com`, where `{uniqueid}` is your equivalent of our `UserID` - a non-private, unique identifier for the user.

Most [single sign-on services](http://docs.vanillaforums.com/features/sso/) work by matching accounts based on email address. To work in this scenario, the authentication endpoint must construct (or have on record) an identical dummy email address. This allows the seamless authentication of the user against the correct account without using real personal info.

More information is available from our [Privacy Policy](https://vanillaforums.com/info/privacy) and our [developer docs on data privacy](/developers/data-privacy).
