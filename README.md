# Stop Discord Phishing

![npm](https://img.shields.io/bundlephobia/min/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/v/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/stop-discord-phishing?style=for-the-badge)

## About this Package

[stop-discord-phishing](https://github.com/nikolaischunk/stop-discord-phishing) works with the [list of phishing Domains](https://github.com/nikolaischunk/discord-phishing-links) to detect Domains in Messages which are used for [phishing](https://en.wikipedia.org/wiki/Phishing) on [Discord](https://discord.com).

This is the official Repository & NPM Package to provide a API to work with those Links.

If you like this Project consider giving it a ⭐ and also feel free to contribute to this Project!

## Source

If you found a Domain that is not detected yet, contribute it to the [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links) Repository!

### NPM Install

```bash
npm install stop-discord-phishing
# or 
yarn add stop-discord-phishing
```

### How to use:

```javascript
const stopPhishing = require("stop-discord-phishing");

const message =
  "this is a string with a domain definitivelynotascamdomain.ru that should be checked ";
```

### List all Domains:

```javascript
async function listPhishingDomains() {
  let links = await stopPhishing.listDomains();
  //Now you can do something with Array with all the confirmed Phishing Domains in it
  console.log(links);
  return links;
}
async function listSuspiciousDomains() {
  let links = await stopPhishing.listSuspicious();
  //Now you can do something with Array with all the suspicious Domains in it
  console.log(links);
  return links;
}

listPhishingDomains();
listSuspiciousDomains();
```

### Check if String contains a Phishing Link:

```javascript
async function checkMessage(message) {
  //check string on confirmed Phishing Domains
  let isGrabber = await stopPhishing.checkMessage(message);
  //Now you can do something with the Boolean Value
  console.log(isGrabber);
  return isGrabber;
}

async function checkMessageFull(message, True) {
  //check string on confirmed & not yet confirmed but suspicious Phishing Domains
  let isGrabber = await stopPhishing.checkMessage(message);
  //Now you can do something with the Boolean Value
  console.log(isGrabber);
  return isGrabber;
}

checkMessage(message);
checkMessageFull(message);
```

## Cache

To prevent to much requests & load, we added a Cache of `30 minutes`!

## Amounts of Phishing Domains

Find the complete List of Domains here: [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links)

| Use                             | Domains |
| ------------------------------- | ------- |
| `stopPhishing.listDomains()`    | 14500+  |
| `stopPhishing.listSuspicious()` | 650+    |

## Changelog

#### 0.3.0

- Renamed `listDomains()` to `listPhishingDomains()`
- Added DomainCount Support
#### 0.2.1 Current

- Added toString to also support non-string values
- Updated ReadMe with latest changes

#### 0.2.0

- Added better regex to detect exact domain matches
- Updated ReadMe

#### 0.1.0

- Added suspicious Domains Support
- Updated ReadMe

#### 0.0.4

- Added Chache Support and set Cache duration to 30min

#### 0.0.3

- Added better Project Structure

#### 0.0.1

- Initial (and Test) Upload
