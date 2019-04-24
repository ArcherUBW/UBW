<template>
  <div id="app">
	<!-- 头部 -->
	<div class="home-header">
		<div class="header-list" @click="toggleFn">
			<i class="icon-th-list"></i>
		</div>
		<span>
			网易云歌曲
		</span>
		<div class="header-search">
			<i class="icon-search"></i>
		</div>
	</div>
	
	
	<!-- 抽屉 -->
	<transition name="drawer">
		<div class="drawer" v-show="show">
			我是抽屉
		</div>
	</transition>
	
	<transition name="fade">
		<div class="mask" v-show="show" @click="toggleFn"></div>
	</transition>
	
	
	<!-- js导航 -->
	<div class="header-tab">
		<router-link to="/" active-class="active" exact>推荐音乐</router-link>
		<router-link to="/singer" >歌手</router-link>
		<router-link to="/ranklist" exact-active-class="exact">排行榜</router-link>
	</div>
	
	
	
	<keep-alive>
	  <router-view></router-view>
	</keep-alive>
	
	
	<!-- 尾部 -->
	<div class="bottom-bar" @click="barFn">
		<div class="head-portrait">
			<img src="">
		</div>
		<div class="music-detail">
			<p class="music-name">小酒窝</p>
			<p class="music-singer">林俊杰,蔡卓妍</p>
		</div>
		
		<i class="icon-play2"></i>
		<i class="icon-th-list"></i>
	</div>
	
	<transition name="playback">
		<Playback v-if="this.$store.state.playback"></Playback>
	</transition>
  </div>
</template>

<script>
	import Playback from './views/Playback.vue'
	export default {
		name:'app',
		data(){
			return{
				show:false,
			}
		}, 
		methods: {
			toggleFn() {
				this.show = !this.show
			},
			barFn(){
				this.$store.state.playback = !this.$store.state.playback
			},
			
		},
		watch:{
			playback(news,old){
				console.log('新',news)
				console.log('旧',old)
			}
		},
		components:{
			Playback
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "../public/sass/mixin";
	
	.home-header{
		width: 100%;
		height: 55px;
		background-color: #d43c33;
		display: flex;
		justify-content:space-between;
		align-items:center;
		
		.header-list{
			flex:0 30px;
			margin-left:10px;
		}
		
		span{
			flex: 0 0 130px;
			font-size:24px;
			color: #fff;
			font-weight: 600;
		}
		
		.header-search{
			flex:0 30px;
			width: 30px;
			margin-right:10px;
		}
		
		
	}
	
	.header-tab{
		height: 40px;
		line-height: 40px;
		display: flex;
		background-color: #fff;
		
		a{
			flex: 1;
			font-size: 15px;
			text-align: center;
			color: #2c3e50;
		}
		
		.active {
			border-bottom: 2px solid #d43c33;
		}
	}
	
	.bottom-bar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 45px;
		background: #fff;
		display: flex;
		justify-content:space-between;
		align-items:center ;
		
		.head-portrait{
			width: 36px;
			height: 36px;
			background-color: red;
			border-radius: 50%;
			margin-left: 5px;
		}
		
		.music-detail{
			flex: 0 0 60%;
			
			.music-name{
				font-size: 14px;
				font-weight: 400;
				color: #333;
			}
			
			.music-singer{
				color: #aaa;
				font-size: 10px;
				font-weight: 400;
			}
		}
		
		.icon-play2, .icon-th-list{
			flex: 0 0 5%;
			font-size: 28px;
			color: #999;
		}
		.icon-th-list{
			margin-right: 10px;
		}
	}
	
	.drawer{
		position: fixed;
		top: 0;
		left: 0;
		width: 286px;
		height: 100%;
		background: rgb(240, 240, 240);
		z-index: 30;
	}
	
	.mask{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 25;
		background: rgba(7, 17, 27, 0.5);
	}
	
	
	//抽屉
	//进入第一帧
	.drawer-enter, .drawer-leave-to{
		transform: translateX(-100%);
	}
	
	//过程
	.drawer-enter-active, .drawer-leave-active{
		transition: all 0.4s linear;
	}
	
	//退出
	.drawer-enter-to, .drawer-leave{
		transform: translateX(0);
	}
	
	
	//遮罩层
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	.fade-entert-to, .fade-leave {
		opacity: 0.5;
	}

	.fade-enter-active, .fade-leave-active {
		transition: all 0.4s linear;
	}
	
	
	//播放页面
	.playback-enter,{
		transform: translateY(100%);
	}
	.playback-leave-to {
		transform: translateX(100%)
	}
	.playback-entert-to, .playback-leave {
		transform: translateY(0);
	}
	.playback-enter-active, .playback-leave-active {
		transition: all 0.2s linear;
	}
	
</style>
