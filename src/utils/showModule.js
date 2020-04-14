function showModule (data, indexModule) {
	console.log(data, indexModule, '交换数据');
	data.map((item, index) => {
		item.showModule = true;
		if (index < indexModule) {
			item.showModule = false;
		} else {
			item.showModule = true;
		}
	});
	return data;
}
export {
	showModule
};
