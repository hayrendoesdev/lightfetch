> This project is a **Work in Progress** and currently in development. The API is
> subject to change without warning.

<div align="center">
	<a href="https://github.com/RayhanADev/lightfetch">
		<img src="https://github.com/RayhanADev/lightfetch/blob/master/images/lightfetch.png?raw=true" alt="Lightfetch Banner" width="900" />
	</a>
	<br />
	<a href="https://github.com/RayhanADev/lightfetch/graphs/contributors"><img src="https://img.shields.io/github/contributors/RayhanADev/lightfetch.svg?style=for-the-badge"></a>
	<a href="https://github.com/RayhanADev/lightfetch.svg/graphs/contributors"><img src="https://img.shields.io/github/forks/RayhanADev/lightfetch.svg?style=for-the-badge"></a>
	<a href="https://github.com/RayhanADev/lightfetch/stargazers"><img src="https://img.shields.io/github/stars/RayhanADev/lightfetch.svg?style=for-the-badge"></a>
	<a href="https://github.com/RayhanADev/lightfetch/issues"><img src="https://img.shields.io/github/issues/RayhanADev/lightfetch.svg?style=for-the-badge"></a>
	<a href="https://github.com/RayhanADev/lightfetch/blob/master/LICENSE"><img src="https://img.shields.io/github/license/RayhanADev/lightfetch.svg?style=for-the-badge"></a>
	<a href="https://www.npmjs.com/package/lightfetch-node"><img src="https://img.shields.io/npm/dw/lightfetch-node?style=for-the-badge"></a>
	<p>
		<em>A small fetching package for super simple usages.</em>
		<br />
		Built using <strong>zero dependencies</strong> to be <strong>lightweight</strong>
		and <strong>asynchronous</strong>
		<br />
		Lightfetch gives you the best of size, speed, and usability.
	</p>
</div>

---

## Install

```sh
npm install lightfetch-node
```

## Usage

### Main API

```js
await lightfetch(url, [options]);
```

### Options

-   method: HTTP Request Method
-   headers: HTTP Headers to use in Request
-   body: Data to use in the Request*

\* *Data that can be used in body includes an Object, a string that's 
in x-www-form-urlencoded format, or plain text. Lightfetch will figure
out what you pass in automagically.*

## Example

```js
// using CommonJS
const { lightfetch } = require('lightfetch-node');

// using ESM
import { lightfetch } from 'lightfetch-node';

async function fetch(url) {
  const res = await lightfetch(url, {
    method: 'GET',
    headers: {
      'X-Requested-With': 'RayhanADev',
    },
  });
  console.log('Status:', res.status);
  console.log('Response:', res.toJSON());
}

fetch('https://postman-echo.com/get?foo=bar');

```
