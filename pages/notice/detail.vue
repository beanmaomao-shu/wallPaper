<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
				<uni-tag text="置顶" type="error" :inverted="true"/>
				</view>
			<view class="font">标题</view>
		</view>
		
		<view class="info">
			<view class="item">咸虾米</view>
			<view class="item">
				<uni-dateformat :data="Data.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
			</view>
		</view>
		
		<view class="content">内容区域</view>
		<view class="count">阅读 5588</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">

</style>
