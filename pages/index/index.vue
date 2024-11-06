<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper autoplay vertical interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
					<navigator url="/pages/notice/detail">{{ item.title }}</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>日
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview" > 
							<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { apiGetBanner,apiGetRandom,apiGetNotice,apiGetClassify }from '@/api/apis.js'
	
	const bannerList= ref([])
	const randomList= ref([])
	const noticeList= ref([])
	const classifyList =ref([])
	//回到预览
	const goPreview= ()=>{
		uni.navigateTo({
			url:"/pages/preview/preview"
		})
	}
	//获取大轮播图
	const getBanner = async ()=>{
		let res=await apiGetBanner();
		//验证接口返回的错误码为0时赋值给bannerList去遍历给html元素
		if(res.data.errCode===0)
		{
			bannerList.value=res.data.data
		}
	}
	
	//获取随机的九张图片
	const getDayRandom= async()=>{
		let res=await apiGetRandom();
		if(res.data.errCode===0)
		{
			randomList.value=res.data.data
		}
	}
	
	//获取公告列表
	const getNotice= async()=>{
		let res=await apiGetNotice({select:true});
		if(res.data.errCode===0)
		{
			noticeList.value=res.data.data
		}
	}
	
	//专题精选
	const getClassify= async ()=>{
		let res=await apiGetClassify({
			select:true,
		});
		if(res.data.errCode===0)
		{
			classifyList.value=res.data.data
		}
	}
	getBanner();
	getDayRandom();
	getNotice();
	getClassify();
</script>

<style lang="scss" scoped>
	.homeLayout{
		
		.theme{
			padding: 50rpx 0;
			.more{
				font-size: 32rpx;
				color: #888;
			}
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display:grid;
				gap:15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
		.select{
			padding-top: 50rpx;
			.date{
				color: $brand-theme-color;
				display: flex;
				align-items: center;
				:deep()
				{
					.uni-icons{
						color:$brand-theme-color !important;
					}
				}
				.text{
					margin-left:5rpx ;
				}
			}
			.content{
				width:720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display:inline-block;
						margin-right:15rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.box:last-child{
						margin-right:30rpx;
					}
				}
			}
		}
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items:center;
				:deep()
				{
					.uni-icons{
						color:$brand-theme-color !important;
					}
				}
				.text{
					color:$brand-theme-color;
					font-weight:600;
					font-size: 28rpx;
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				justify-content: center;
				align-items:center;
			}
			.center{
				//自动填充父容器剩下的内容
				flex:1;
				swiper{
					//swiper设置高度可以限制轮播的高度太高，100%继承父级center类的高度
					height: 100%;
					//文字内容过多省略
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					//&-继承父级选择器的名字
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
					}
				}
			}
		}
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 759rpx;
				height: 340rpx;
				swiper-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		
	}
</style>
