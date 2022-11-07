# Stop Discord Phishing

![domains](https://img.shields.io/badge/dynamic/json?color=79BFAA&label=Domains&query=count&url=https%3A%2F%2Fapi.schunk.dev%2Fapi%2Fdomain%2Fcount&style=for-the-badge)
![npm](https://img.shields.io/bundlephobia/min/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/v/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/stop-discord-phishing?style=for-the-badge)

## About this Package

[stop-discord-phishing](https://github.com/nikolaischunk/stop-discord-phishing) works with the [list of phishing Domains](https://github.com/nikolaischunk/discord-phishing-links) to detect [phishing](https://en.wikipedia.org/wiki/Phishing) domains in messages on [Discord](https://discord.com).

This is the official repository & NPM package which provides functionality in detecting phising links.

If you like this project consider giving it a ⭐ and feel free to contribute to this project!

## Source

If you found a domain that is not detected yet, contribute it to the [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links) repository!

## Add Package to your Project

```bash
npm install stop-discord-phishing
# or
yarn add stop-discord-phishing
```

## How to use:

```javascript
const stopPhishing = require("stop-discord-phishing");
```

### Check if String contains a Phishing Link:

```javascript
const message = "this is definitivelynotascamdomain.ru that should be checked";

//Check string on confirmed Phishing Domains
async function checkMessage(message) {
  const isGrabber = await stopPhishing.checkMessage(message); //True
  console.log(isGrabber);
  return isGrabber;
}

//Check string on confirmed Phishing Domains & suspicious Domains RECOMMENDED!
async function checkMessageFull(message) {
  const isGrabber = await stopPhishing.checkMessage(message, true); //True
  console.log(isGrabber);
  return isGrabber;
}

checkMessage(message);
checkMessageFull(message);
```

### List all Domains:

```javascript
async function listPhishingDomains() {
  const links = await stopPhishing.listPhishingDomains(); //[]
  //Now you can do something with Array with all the confirmed Phishing Domains in it
  console.log(links);
  return links;
}
async function listSuspiciousDomains() {
  const links = await stopPhishing.listSuspiciousDomains(); //[]
  //Now you can do something with Array with all the suspicious Domains in it
  console.log(links);
  return links;
}
async function listAllDomains() {
  const links = await stopPhishing.listAllDomains(); //[]
  //Now you can do something with Array with all the suspicious and confirmed phishing Domains in it
  console.log(links);
  return links;
}

listPhishingDomains();
listSuspiciousDomains();
listAllDomains();
```

### Get Domain Count:

```javascript
//Get the amount of all Phishing and Suspicious Domains
async function getDomainAmount() {
  const amount = await stopPhishing.domainCount(); //Number
  console.log(amount);
  return amount;
}
//Get the amount of all Phishing Domains
async function getPhishingDomainAmount() {
  const amount = await stopPhishing.phishingDomainCount(); //Number
  console.log(amount);
  return amount;
}
//Get the amount of all Suspicious Domains
async function getSuspiciousDomainAmount() {
  const amount = await stopPhishing.suspiciousDomainCount(); //Number
  console.log(amount);
  return amount;
}

getDomainAmount();
getPhishingDomainAmount();
getSuspiciousDomainAmount();
```

## Cache

To prevent an excess of requests and load, we added a Cache of `30 minutes`!

## List of Phishing Domains

Find the complete List of Phishing Domains here: [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links)

## Changelog

### 0.3.1

- Updated README.md

#### 0.3.0 Current

- Renamed `listDomains()` to `listPhishingDomains()`
- Added DomainCount Support
- Updated ReadMe to reflect the new DomainCount Support

#### 0.2.1

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
