# Stop Discord Phishing

![npm](https://img.shields.io/bundlephobia/min/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/v/stop-discord-phishing?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/stop-discord-phishing?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/stop-discord-phishing?style=for-the-badge)

A Package that works with the [list of suspicious Domains](https://github.com/nikolaischunk/discord-phishing-links) which are used for [phishing](https://en.wikipedia.org/wiki/Phishing) on [Discord](https://discord.com).

This is the official Repository & NPM Package to provide a API to work with those Links.

Feel free to contribute to this Project!

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
async function list () {
  let links = await stopPhishing.listDomains()
  //Now you can something with Array with all the Domains in it
  console.log(links)
  return links
}

list()
```

### Check if String contains a Phishing Link:

```javascript
async function checkMessage (message) {
  let isGrabber = await stopPhishing.checkMessage(message)
  //Now you can something with the Boolean Value
  console.log(isGrabber)
  return isGrabber
}

checkMessage(message)
```

## Amounts of Phishing Domains

| Use                   | Domains |
| --------------------- | ------- |
| `stopPhishing.list()` | 6700+    |

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