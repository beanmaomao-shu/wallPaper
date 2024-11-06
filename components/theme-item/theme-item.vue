<template>
	<view class="themeItem">
		<!-- 正常返回图片 -->
		<!-- navigator的url地址点击直接跳转该url地址-->
	   <navigator 
	   :url="'/pages/classlist/classlist?id='+item._id+'&name='+item.name" 
	   class="box" 
	   v-if="!isMore">
		   <image class="pic" :src="item.picurl" mode="aspectFill"></image>
		   <view class="mask">{{item.name}}</view>
		   <view class="tab">{{formatTimeDifference(item.updateTime)}}前更新</view>
	   </navigator>
	   <!-- 返回图片失败 -->
	   <navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
	   		   <image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
	   		   <view class="mask">
			   <uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
			   <view class="text">更多</view>
			   </view>
	   </navigator>
	</view>
</template>

<script setup>
	import {formatTimeDifference} from '@/utils/common.js'
	defineProps({
		isMore:{
			type:Boolean,
			default:false
		},
		item:{
			type:Object,
			default(){
				return{
					name:'默认名称',
					picurl:"../../common/images/classify1.jpg",
					updateTime:Date.now()-1000*60*60*5
				}
			}
		}
	})
</script>

<style lang="scss" scoped>
.themeItem{
	.box.more{
		.mask{
			width: 100%;
			height: 100%;
			flex-direction: column;
			.text{
				font-size: 20rpx;
			}
		}
	}
	.box{
		height : 340rpx;
		overflow: hidden;
		border-radius: 10rpx;
		position:relative;
		.pic{
			width: 100%;
			height: 100%;
		}
		.mask{
			width: 100%;
			height: 70rpx;
			font-size: 30rpx;
			position: absolute; 
			bottom: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx);
			font-weight: 600;
			font-size: 30rpx;
		}
		.tab{
			position:absolute;
			left:0;
			top:0;
			background: rgba(250, 129, 90, 0.7);
			color: #fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			transform: scale(0.9);
			transform-origin: left top;
		}
	}
	
}
</style>