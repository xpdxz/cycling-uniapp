// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
let uploadTokenUrl = '/utils/getUploadToken';
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

	// 获取七牛云上传token
	let getUploadToken = (params = {}) => vm.$u.get(uploadTokenUrl, params)
	
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		getUploadToken
	};
}

export default {
	install,
}
