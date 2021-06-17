import { request as req } from 'https';

const requestFunc = (method, url, headers = {}, body) => {
	const urlPieces = new URL(url);
	const formRegex = /^(([\w\s.])+=([\w\s.])+&?)+/;

	let requestSafeBody = '';
	if (method.toLowerCase() !== 'get') {
		if (typeof body === 'object') {
			headers['Content-Type'] = 'application/json';
			requestSafeBody = JSON.stringify(body);
		} else if (
			typeof body === 'string' &&
			formRegex.test(decodeURI(body))
		) {
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
			requestSafeBody = body;
		} else {
			headers['Content-Type'] = 'text/plain';
			requestSafeBody = body;
		}
	}

	if (method.toLowerCase() !== 'get')
		headers['Content-Length'] = Buffer.byteLength(requestSafeBody);

	const requestOptions = {
		hostname: urlPieces.host,
		port: urlPieces.port || 443,
		path: urlPieces.pathname + urlPieces.search,
		method: method.toUpperCase(),
		headers,
	};

	const requestPromise = new Promise((resolve, reject) => {
		const request = req(requestOptions, (response) => {
			let responseData = '';

			response.on('data', (dataBuffer) => {
				responseData += dataBuffer;
			});

			response.on('end', () => {
				const returnable = {
					response,
					status: response.statusCode,
					headers: response.headers,
					toJSON: () => {
						try {
							return JSON.parse(responseData);
						} catch (error) {
							throw new Error(error);
						}
					},
					toText: () => {
						try {
							return responseData;
						} catch (error) {
							throw new Error(error);
						}
					},
				};
				resolve(returnable);
			});
		});

		request.on('error', (error) => {
			reject(error);
		});

		if (method.toLowerCase() !== 'get') request.write(requestSafeBody);
		request.end();
	});
	return requestPromise;
};

export default requestFunc;