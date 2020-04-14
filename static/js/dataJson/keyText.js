
function keyText (e) { // 遍历keyText数据，监听到有输入框的，将输入框默认文字修改
	console.log(e, typeof(e), '属性名称');
	if (e === 'title') {
		return '此处点击可输入标题'
	} else if (e === 'content' || e === 'content1' || e === 'content2') {
		return '此处点击可输入内容'
	} else if (e === 'content3') {
		return '可输入关于图片的具体描述信息，限50位'
	} else if (e === 'key' || e === 'key1' || e === 'key2') {
		return '可输入'
	} else if (e === 'value' || e === 'value1' || e === 'value2' || e === 'value3') {
		return '可输入'
	} else if (e === 'addres') {
		return '此处点击可输入地址'
	} else if (e === 'tel1' || e === 'tel2') {
		return '可输入联系方式'
	} else {
		return ''
	}
}

export {keyText}