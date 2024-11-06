<template>
	<view class="classlist">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import{ ref }from 'vue'
	import { apiGetClassify,apiGetClassList } from '@/api/apis'
	import { onLoad }from '@dcloudio/uni-app'
	
	const classList=ref([])
	const queryParams={}
	
	onLoad((e)=>{
		let {id=null,name=null} = e;
		queryParams.classid=id;
		// 设置导航栏标题
		uni.setNavigationBarTitle({
			title:name
		})
		// onLoad的周期生命在setup语法糖之后，执行下来的话，setup语法糖中的变量还没有初始化就开始发送请求，所以把函数调用
		// 放在onLoad生命周期中
		getClassList();
	});
	
	const getClassList= async()=>{
		// 接收url参数的id给queryParams
		// 调用接口获取分类列表
		let res=await apiGetClassList(queryParams);
		classList.value=res.data.data
	}
	
</script>

<style lang="scss" scoped>
	.classlist{
		.content{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			gap: 5rpx;
			padding: 5rpx;
			.item{
				height: 440rpx;
				image{ 
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}

</style>
