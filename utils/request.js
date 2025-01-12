
const BASE_URL="https://tea.qingnian8.com/api/bizhi";

export function request(config={}){
	
	let {
		url,
		data={},
		method="GET",
		header={}
	} = config
	
	url = BASE_URL+url
	header['access-key'] = "696326"
	return new Promise((resole,reject)=>{
		uni.request({
			url,
			method,
			data,
			header,
			success:res=>{
				if(res.data.errCode===0)
				{
					resole(res);
				}else if(res.data.errCode===400)
				{
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
				}
			},
			fail:err=>{
				reject(res);
			}
		})
	})
}