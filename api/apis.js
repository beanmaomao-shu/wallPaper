import { request } from "@/utils/request.js"

export function apiGetBanner(){
	return request({
		url:'/homeBanner',
		method:"POST"
	})
}

export function apiGetRandom(){
	return request({
		url:'/randomWall',
		})
}

//(data={})默认价格初始值data
export function apiGetNotice(data={}){
	return request({
		url:'/wallNewsList',
		data,
		method:"POST"
		})
}

export function apiGetClassify(data={}){
	return request({
		url:'/classify',
		data,
		})
}


export function apiGetClassList(data={}){
	return request({
		url:'/wallList',
		data,
		})
}