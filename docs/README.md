# The Calcy App
<p align="center">
  <img alt="Calcy Icon" src="https://varundevpro.github.io/calcy/assets/images/calcy-icon.png">
</p>

## Table of Contents
<details>
<summary>Click to expand</summary>

- [About](#about)
- [Features](#features)
- [Downloads](#downloads)
- [For Developers](#for-developers)
  * [Contributing](#contributing)
  * [Prerequisites](#prerequisites)
  * [Build](#build)
- [Third Party Plugins](#third-party-plugins)
- [License](#license)

</details>

<p align="right">:bulb:</p>

## About
A basic calculator app built with electron.

<p align="right">:fire:</p>

## Features
* _`Works on mobile with the website.`_
* _`Works with keyboard.`_
* _`Keyboard shortcuts to Quit & Refresh.`_
* _`UI as Numeric KeyPad.`_
* _`Backspace to del one char`_
* _`C to Clear`_

<p align="right">:arrow_down:</p>  

## Downloads 
| Platform | Arch | Version | Link|
| --- | --- | --- | --- |
| Windows | x86 | 1.0.1 | [Download](https://github.com/VarunDevPro/calcy/releases/download/v1.0.1/calcy-win32-ia32.7z)|
| Windows | x86 | 1.0.0 | [Download](https://github.com/VarunDevPro/calcy/releases/download/v1.0.0/calcy-win32-ia32.7z)|

<p align="right">:man:</p>

## For Developers
### Contributing:
Any contributions are welcome, if you plan to contribute please read the [contributing](https://github.com/VarunDevPro/calcy/blob/master/CONTRIBUTING.md) docs first.

### Prerequisites:
```
You must have npm and nodejs installed.
```
### To use the application:
``` 
1. Clone the project
2. Run npm install 
3. Run npm start
```
### Build:
Detect Platform:
``` 
npm run dist
``` 
Windows:
``` 
npm run build-win
``` 
Mac:
``` 
npm run build-mac
``` 
Linux:
``` 
npm run build-linux
``` 
Cross Platform:
``` 
npm run build
``` 
#### To force 32 bit build:
*Append "-- --ia32" to npm run command*

Example:
``` 
npm run build-win -- --ia32
```

<p align="right"> :electric_plug:</p>

## Third Party Plugins
None

## License
[MIT][mit] :copyright: [Varun A][author] :fire: 


## &nbsp;
<p align="center">
Built with :heart: using <a href="https://electronjs.org/">Electron Framework</a>.
</p>

[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/varundevpro
