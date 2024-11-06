<template>
	<view class="">
		<view class="useLayout pageBg" :style="{height:getStatusBarHeight()+'px'}">
			<view class="userInfo">
				<view class="avatar">
					<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
				</view>
				<view class="ip">100.100.100.100</view>
				<view class="address">来自于{{}}</view>
			</view>
			<view class="section">
				<view class="list">
					<navigator url="/pages/classlist/classlist" class="row">
						<view class="left">
							<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
							<view class="text">我的下载</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</navigator>
					<navigator url="/pages/classlist/classlist" class="row">
						<view class="left">
							<uni-icons type="star-filled" size="20" color="#28b389"></uni-icons>
							<view class="text">我的评分</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</navigator>
					<navigator url="" class="row">
						<view class="left">
							<uni-icons type="chatboxes-filled" size="20" color="#28b389"></uni-icons>
							<view class="text">联系客服</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
						<!-- #ifdef MP-WEIXIN -->
						<button open-type="contact">联系客服</button>
						<!-- #endif -->
						
						<!-- #ifdef H5 -->
						<button @click="clickContact">拨打电话</button>
						<!-- #endif -->
					</navigator>
				</view>
			</view>
			<view class="section">
				<view class="list">
					<navigator url="" class="row">
						<view class="left">
							<uni-icons type="notification-filled" size="20" color="#28b389"></uni-icons>
							<view class="text">订阅更新</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</navigator>
					<navigator url="" class="row">
						<view class="left">
							<uni-icons type="info-filled" size="20" color="#28b389"></uni-icons>
							<view class="text">常见问题</view>
						</view>
						<view class="right">
							<view class="text">33</view>
							<uni-icons type="right" size="15" color="#aaa"></uni-icons>
						</view>
					</navigator>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {getStatusBarHeight} from '@/utils/system.js'
	const clickContact=()=>{
		uni.makePhoneCall({
			phoneNumber:"114"
		})
	}
</script>

<style lang="scss">
.useLayout{
	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.2);
		.list{
			.row{
				display:flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 30rpx;
				border-bottom: 1px solid #eee;
				position: relative;
				background-color: white;
				&:last-child{border-bottom: 0;}
				.left{
					display: flex;
					align-items: center;
					justify-content: center;
					.text{
						margin-left: 10rpx;
						font-size: 30rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					justify-content: center;
					.text{
						font-size: 29rpx;
						color: #aaa;
					}
					
				}
				button{
					position: absolute;
					top: 0;
					left:0;
					height: 100rpx;
					width: 100%;
					opacity: 0;
				}
			}
		}
	}
	.userInfo{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50rpx 0;
		.avatar{
			width:160rpx;
			height: 160rpx;
			border-radius:50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			padding: 20rpx 0 5rpx;
		}
		.address{
			font-size: 20rpx;
			color: #aaa;
		}
	}
}
</style>
