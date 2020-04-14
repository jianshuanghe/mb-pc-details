function postMessage (e) {
	return window.parent.postMessage(e, 'http://192.168.141.207:8080');
}
export {
	postMessage
};
