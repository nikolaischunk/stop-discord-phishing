# Stop Discord Phishing

![npm](https://img.shields.io/bundlephobia/min/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/v/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/stop-discord-phishing?style=for-the-badge)

## About this Package

[stop-discord-phishing](https://github.com/nikolaischunk/stop-discord-phishing) works with the [list of suspicious Domains](https://github.com/nikolaischunk/discord-phishing-links) to detect Domains in Messages which are used for [phishing](https://en.wikipedia.org/wiki/Phishing) on [Discord](https://discord.com).

This is the official Repository & NPM Package to provide a API to work with those Links.

Feel free to contribute to this Project!

## Source

If you found a Domain that is not detected yet, contribute it to the [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links) Repository!

### NPM Install

```bash
npm install stop-discord-phishing
```

### How to use:

```javascript
const stopPhishing = require('stop-discord-phishing')

const message = 'this is a string that should be checked'
```

### List all Domains:

```javascript
async function listPhishingDomains () {
  let links = await stopPhishing.listDomains()
  //Now you can something with Array with all the confirmed Phishing Domains in it
  console.log(links)
  return links
}
async function listSuspiciousDomains () {
  let links = await stopPhishing.listSuspicious()
  //Now you can something with Array with all the supicious Domains in it
  console.log(links)
  return links
}

listPhishingDomains()
listSuspiciousDomains()
```

### Check if String contains a Phishing Link:

```javascript
async function checkMessage (message) {
  //check string on confirmed Phishing Domains
  let isGrabber = await stopPhishing.checkMessage(message)
  //Now you can something with the Boolean Value
  console.log(isGrabber)
  return isGrabber
}

async function checkMessageFull (message, true) {
  //check string on confirmed & not yet confirmed but suspicious Phishing Domains
  let isGrabber = await stopPhishing.checkMessage(message)
  //Now you can something with the Boolean Value
  console.log(isGrabber)
  return isGrabber
}

checkMessage(message)
checkMessageFull(message)
```

## Cache

To prevent to much requests & load, we added a Cache of `30 minutes`!

## Amounts of Phishing Domains

| Use                             | Domains |
| ------------------------------- | ------- |
| `stopPhishing.listDomains()`    | 6800+   |
| `stopPhishing.listSuspicious()` | 30+     |

## Changelog

#### 0.1.0 Current

- Added suspicious Domains Support
- Updated ReadMe

#### 0.0.4

- Added Chache Support and set Cache duration to 30min

#### 0.0.3

- Added better Project Structure

#### 0.0.1

- Initial (and Test) Upload
