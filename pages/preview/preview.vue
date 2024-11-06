<template>
	<view class="preview">
		<swiper autoplay="true" indicator-dots="true" circular>
			<swiper-item>
					<image src="@/common/images/preview1.jpg" mode="aspectFill" @click="maskChange"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight() + 'px'}">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">
				3 / 9
			</view>
			<view class="clock">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="30"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="28"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view class="takeit"></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID</view>
							<text class="value" selectable="true">3099906776</text>
						</view>
						<view class="row">
							<view class="label">分类</view>
							<text class="value class" selectable="true">明星美女</text>
						</view>
						<view class="row">
							<view class="label">发布者</view>
							<text class="value" selectable="true">小丸子</text>
						</view>
						<view class="row">
							<view class="label">评分</view>
							<view class="value roteBox">
								<uni-rate readonly touchable value="3" size="16"/>
								<text class="score" selectable="true">5分</text>
							</view>
						</view>
						<view class="row">
							<view class="label">摘要</view>
							<text class="value" selectable="true">NBA</text>
						</view>
						<view class="row">
							<view class="label">标签</view>
							<view class="value tabs" v-for="item in 3">
								<view class="tab">标签名</view>
							</view>
						</view>
						<view class="copyRight">
							声明：本图片来自于用户投稿,非商业使用，用于免费学习交流，如侵犯了您的权益可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view class="takeit"></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allowHalf/>
					<text class="text">{{userScore}}分</text>
				</view>
				<view class="footer">
					<button @click="submitScore" :disabled="!userScore" type="fefault" size="mini" plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script setup>
	import{ref} from 'vue';
	import {getStatusBarHeight} from '@/utils/system.js'
	
	const maskState=ref(true);
	const infoPopup=ref(null);
	const scorePopup=ref(null);
	const userScore=ref(0);
	//遮罩层状态
	const maskChange=()=>{
		maskState.value=!maskState.value
	}
	//点击信息info弹窗
	const clickInfo=()=>{
		infoPopup.value.open()
	}
	//关闭信息info弹窗
	const clickInfoClose=()=>{
		infoPopup.value.close()
	}
	//点击评分
	const clickScore=()=>{
		scorePopup.value.open()
	}
	//关闭评分
	const clickScoreClose=()=>{
		scorePopup.value.close()
	}
	//返回上一页
	const goBack=()=>{
		uni.navigateBack()
	}
	//提交评分
	const submitScore=()=>{
		scorePopup.value.close()
	}
</script>

<style lang="scss" scoped>
	.preview{
		width: 100%;
		height: 100vh;
		position: relative;
			uni-popup{
				position: absolute;
				left:0;
				right: 0;
				margin:auto;
				width: fit-content;
				.infoPopup{
					background: #fff;
					padding: 30rpx;
					border-radius: 30rpx 30rpx 0 0;
					overflow: hidden;
					.popHeader{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title{
							color: $text-font-color-2;
							font-size: 26rpx;
							
						}
						.close{
							padding: 6rpx;
						}
					}
					scroll-view{
						max-height: 600rpx;
						.content{
							.row{
								display: flex;
								padding: 16rpx 0;
								font-size: 32rpx;
								line-height: 1.7em; 
								.class{
									color:$brand-theme-color;
								}
								.label{
									padding: 0 20rpx;
									color:$text-font-color-3;
									width: 140rpx;
									text-align: right;
									font-size: 30rpx;
								}
								.value{
									flex: 1;
									width: 0;
								}
								.tabs{
									display: flex;
									flex-wrap: wrap;
									.tab{
										border: 1px solid $brand-theme-color;
										color:$brand-theme-color;
										font-size: 22rpx;
										padding: 10rpx 30rpx;
										border-radius: 40rpx;
										line-height: 1em;
										margin: 0 10rpx 10rpx 0;
									}
								}
								.roteBox{
									display: flex;
									align-items: center;
									.score{
										font-size: 26rpx;
										color: $text-font-color-2;
										padding-left:20rpx;
									}
								}
							}
							.copyRight{
								font-size: 29rpx;
								padding:20rpx;
								color: #666;
								background: #F6F6F6;
								border-radius: 10rpx;
								margin: 20rpx 0;
								line-height: 1.6rem;
							}
						}
					}
				}
				.scorePopup{
					background: #fff;
					padding: 30rpx;
					width: 70vw;
					border-radius: 30rpx;
					.content{
						padding: 30rpx 0;
						display: flex;
						justify-content: center;
						align-items: center;
						.text{
							color:#FFCA3E;
							padding-left: 10rpx;
							width: 80rpx;
							line-height: 1em;
							text-align: right;
						}
					}
					.footer{
						padding: 10rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.popHeader{
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title{
							color: $text-font-color-2;
							font-size: 26rpx;
						}
						.close{
							padding: 6rpx;
						}
					}
					
				}
			}
			.mask{
				&>view{
					position: absolute;
					left: 0;
					right: 0;
					margin:auto;
					width: fit-content;
				}
				.goBack
				{
					width: 38px;
					height: 38px;
					background: rgba(0, 0, 0, 0.5);
					left:30rpx;
					margin-left: 0;
					border-radius: 100px;
					top:0;
					background-filter:blur(10rpx);
					border: 1rpx solid rgba(255, 255, 255, 0.3);
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.count{
					top: 10vh;
					background:rgba(0,0,0,0.3);
					font-size: 28rpx;
					color: #fff;
					border-radius:40rpx;
					padding: 8rpx 29rpx;
					backdrop-filter: blur(10rpx);
				}
				.clock{
					font-size: 140rpx;
					color: #fff;
					top: calc(10vh + 80rpx);
					font-weight: 100;
					line-height: 1em;
					text-shadow: 0 4rpx rgba(0,0,0,0.3);
					}
				.date{
					font-size:34rpx;
					top: calc(10vh + 220rpx);
					color: #fff;
				}
				.footer{
					background: rgba(255,255,255,0.8);
					bottom: 10vh;
					width: 65vw;
					height: 120rpx;
					border-radius: 120rpx;
					color: #000;
					display: flex;
					justify-content: space-around;
					align-items: center;
					backdrop-filter: blur(20rpx);
					.box{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-items: center;
						padding:2rpx 12rpx ;
						.text{
							color:$text-font-color-2;
							font-size: 29rpx;
						}
					}
				}
			}
			swiper{
				width: 100%;
				height: 100%;
				swiper-item{
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
