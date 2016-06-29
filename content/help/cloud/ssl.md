---
title: Setting up SSL (https)
layout: docs
categories: ["Features","SSL"]
---

## Setting up SSL (https) with Vanilla Cloud

Vanilla offers SSL support in Corporate plans and above. In order for us to to enable SSL for your forum, you will need to provide Vanilla with the following:

```
Certificates start like this:
-----BEGIN CERTIFICATE-----
```

```
Private keys start like this:
-----BEGIN RSA PRIVATE KEY-----
```

1. The **SSL Certificate** for your forum's domain in PEM format.

2. The **SSL Certificate Private Key** for your forum's domain in PEM format, and with **no password**.

3. The optional **Intermediate SSL Certificate** for your certificate issuing authority.

### How to obtain your SSL certificates

Usually, you'll get an SSL certificate in one of two ways:

1. **Ask an IT professional at your company**. They should know exactly what an SSL certificate is and can coordinate sending a certificate to Vanilla's cloud support. Showing them this documentation will also help.

2. **Obtain a new SSL certificate through a Certificate Authority**. Companies like Verisign and TRUSTe act as Certificate Authorities (CA) and you can purchase an SSL certificate through them. Explaining the entire process of purchasing your own SSL certificate is going to be different for each vendor and is beyond the scope of this documentation. We recommend contacting the support channel of a CA to get more information on purchasing a new SSL certificate.

#### What is this "Intermediate SSL Certificate"?

SSL has 2 components: trust and encryption. Encryption is fairly straightforward: the certificate is used to encrypt communication between the client and the server. Trust, on the other hand, is more complex. Web browsers are pre-configured to "know" about a certain set of CAs, but if your certificate was issued by a CA that is not in that list, your browser does not know whether it can be trusted. The intermediate certificate solves that problem by connecting the broken chain between your certificate and a CA that the browser trusts. Intermediate certificates are an important part of ensuring that customers see a green "Secure" symbol in their address bar when they access your site.

#### Why can't Vanilla create an SSL certificate for your site?

The SSL process would be much smoother if Vanilla could just set it up without requiring anything from you. This just isn't possible though due to the underlying security of SSL and the Internet. **The owner of a domain name is the only person that can generate an SSL certificate.** And if you think about it, this is a good thing. If we could generate an SSL certificate for you then so could a hacker.

### How to give SSL certificates to Vanilla

Once you have your SSL certificates you'll need to give them to Vanilla support. **Don't just email your SSL certificates to us.** These certificates are sort of like passwords and special care should be taken to provide them to us in a secure way. Here are some options.

1. **Secure FTP (sftp)**. If you've been given an SFTP account on Vanilla's project server, then you should upload your certificates there.

2. **PGP Encrypted Email**. If you have the ability to send PGP encrypted email then you can send your SSL certificates that way. Please send them to: ops@vanillaforums.com. Our public key is included in this documentation.

  ```
-----BEGIN PGP PUBLIC KEY BLOCK-----
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
s4HJBD41ZP7DOeVwKwkfwlDHCYY=
=cgqK
-----END PGP PUBLIC KEY BLOCK-----
  ```

### SSL only sites

If you have a strict security policy that requires that your site only be served through https, we can configure your site to always use ssl. We don't recommend forcing SSL during the set up process in order to help us troubleshoot any issues with the configuration process.

### Gotchas

* When your site is being served through SSL you may encounter problems if you are externally linking to non-SSL resources such as javascript, css, or images. Keep this in mind if you are custom theming your site or have other customizations enabled.
* If you are using jsConnect, make sure your authentication url is available over SSL or else jsConnect will fail.
* Don't give us a wildcard certificate. Usually you should set up Vanilla as a subdomain of your main site (ex. forums.yoursite.com). Make sure you generate certificates just for the forums and not a wildcard certificate that can be used for your entire domain. This is for your own security and serves to reduce your risk and our liability.
* Not all CAs pro-actively provide intermediate certificates, and some CAs only provide them as secondary downloads instead of bundling them with your certificate when you download it.
