<template>
	
	<transition name="playback">
	<div class="playback" v-show="this.$store.state.playback">
		<div class="detailcontent">
			
			<!-- 头部 -->
			<div class="content-header">
				<i class="icon-arrow-left2" @click="routerGo"></i>
				<div class="musicTopDetail">
					<p>小酒窝</p> 
					<p class="singer">林俊杰,蔡卓妍</p>
				</div>
				<i class="icon-share2"></i>
			</div>
			
			<!-- 碟子 -->
			<div class="cd">
				<div class="swith-line">
					<div :class="plays ? 'triger-a' : 'triger'"></div>
				</div>
				<div :class="plays ? 'cd-bg' : 'cd-bg-a' " >
					<img class="auto-img play-img" src="../../public/img/banner1.png">
				</div>
			</div>
			
			<!-- 4功能 -->
			<div class="musicDo">
				<i class="icon-heart"></i>
				<i class="icon-download2"></i>
				<i class="icon-bubbles4"></i>
				<i class="icon-list2"></i>
			</div>
			
			
			<!-- 进度条 -->
			<div class="range">
				<span>00:00</span>
				<div class="duration">
					<div class="currentProgress"></div>
					<i class="ball"></i>
				</div>
				<span>04:00</span>
			</div>
			
			
			<!-- 底部控制栏 -->
			<div class="musicDetailCtrl">
				<i class="icon-repeat"></i>
				<i class="icon-backward2"></i>
				
				<i v-if="plays" @click="Plays" class="icon-pause"></i>
				<i v-else @click="Plays" class="icon-play2"></i>
				
				<i class="icon-forward3"></i>
				<i class="icon-list2"></i>
				
			</div>
		</div>
	</div>
	</transition>
</template>

<script>
	export default {
		name:'Playback',
		props:{
			rogo: {
				type: Boolean,
			}
		},
		data() {
			return {
				plays:false,
			}
		},
		methods: {
			routerGo(){
				this.$store.state.playback = false
			},
			Plays(){
				this.plays = !this.plays
			}
		},
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "./public/sass/mixin";
	
	
	.playback{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #aaa;
		z-index: 50;
	}
	.detailcontent{
		background: rgba(0,0,0,.15);
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 55;
	}
	.content-header{
		height: 67px;
		width: 100%;
		display: flex;
		justify-content:space-between;
		align-items:center; 
		
		.singer{
			font-size: 12px;
		}
		
		.icon-arrow-left2{
			padding: 20px 0;
		}
		
		.icon-arrow-left2, .icon-share2{
			flex: 0 0 10%;
			font-size: 24px;
			margin-left: 14px;
		}
		.icon-share2{
			font-size: 20px;
		}
		.musicTopDetail{
			flex: 0 0 70%;
			color: #fff;
		}
	}
	.swith-line{
		width: 80%;
		height: 1px;
		background-image: linear-gradient(270deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));
		margin: 0 auto;
		position: relative;
	}
	.triger{
		background: url(../../public/img/swith.png) no-repeat center;
		z-index: 10;
		background-position: right;
		background-size: 100%;
		width: 90px;
		height: 140px;
		position: absolute;
		left: 50%;
		top: -6px;
		//旋转角度
		transform: translate3d(-16px,0,0) rotate(-30deg);
		// transform: translate3d(-16px,0,0);
		//动画时间
		transition: all .3s;
		// 旋转中心点x, y轴
		transform-origin: 14px 16px; 
	}
	.triger-a{
		background: url(../../public/img/swith.png) no-repeat center;
		z-index: 100;
		background-position: right;
		background-size: 100%;
		width: 90px;
		height: 140px;
		position: absolute;
		left: 50%;
		top: -6px;
		//旋转角度
		// transform: translate3d(-16px,0,0) rotate(-30deg);
		transform: translate3d(-16px,0,0);
		//动画时间
		transition: all .3s;
		// 旋转中心点x, y轴
		transform-origin: 14px 16px; 
	}
	
	.cd-bg{
		background: url(../../public/img/cd-mine.png) no-repeat center;
		z-index: 20;
		background-size: cover;
		position: relative;
		width: 300px;
		height: 300px;
		margin: 80px auto 60px;
		animation:changDeg 8s linear 0.2s infinite;
		
	}
	
	.cd{
		position: relative;
	}
	//碟子旋转动画
	@keyframes changDeg {
		0%{
			transform: rotate(0deg)
		}
		100%{
			transform: rotate(360deg)
		}
	}
	
	.play-img{
		width: 190px;
		height: 190px;
		border-radius: 50%;
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		bottom: 55px;
		margin: 0 auto;
	}
	
	.cd-bg-a{
		background: url(../../public/img/cd-mine.png) no-repeat center;
		z-index: 20;
		background-size: cover;
		width: 300px;
		height: 300px;
		margin: 80px auto 60px;
	}
	
	.musicDo{
		width: 263px;
		margin: 0 auto 25px;
		display: flex;
		
		i{
			flex: 1;
			text-align: center;
			font-size: 20px;
		}
	}
	
	.range{
		width: 90%;
		height: 40px;
		margin: 0 auto;
		display: flex;
		justify-content:space-between;
		align-items:center;
		
		span{
			flex: 0 0 13%;
			font-size: 12px;
			color: hsla(0,0%,100%,.8);
			text-align: center;
		}
		
		.duration{
			flex: 0 0 72%;
			background: hsla(0,0%,96%,.3);
			height: 2px;
			position: relative;
		}
		
		.currentProgress{
			height: 2px;
			width: 30%;
			background: #c62f2f;
		}
		
		.ball{
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: #fff;
			position: absolute;
			top: -7px;
			left: calc(30.28%);
		}
	}
	
	.musicDetailCtrl{
		background-image: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.4),transparent,transparent);
		width: 100%;
		height: 80px;
		display: flex;
		justify-content:space-between;
		align-items:center;
		
		i{
			flex: 1;
			text-align: center;
		}
		
		.icon-pause, .icon-play2{
			font-size: 44px;
		}
		
		.icon-list2{
			font-size: 22px;
		}
		
		.icon-backward2, .icon-forward3{
			font-size: 32px;
		}
	}
	
</style>
