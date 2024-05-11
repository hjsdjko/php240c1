<template>
<view class="content">
	<view class="box" :style='{"padding":"36rpx","boxShadow":"0 0 0px rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='kehu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>客户账号</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.kehuzhanghao" placeholder="客户账号"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='kehu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>密码</view>
			<input  type="password" style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='kehu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>客户姓名</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.kehuxingming" placeholder="客户姓名"></input>
		</view>
			<view v-if="tableName=='kehu'" :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' class="cu-form-group select">
                                <view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">性别</view>
                                <picker  @change="kehuxingbieChange" :value="kehuxingbieIndex" :range="kehuxingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='kehu'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>客户手机</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.kehushouji" placeholder="客户手机"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='kehu'" @tap="kehutouxiangTap" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>头像</view>
			<view style="flex: 1;">
				<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"rgba(161, 161, 161, 1)","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"100%","borderWidth":"4rpx","width":"88rpx","borderStyle":"solid","height":"88rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"rgba(161, 161, 161, 1)","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"100%","borderWidth":"4rpx","width":"88rpx","borderStyle":"solid","height":"88rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>员工工号</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.yuangonggonghao" placeholder="员工工号"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>密码</view>
			<input  type="password" style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>员工姓名</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.yuangongxingming" placeholder="员工姓名"></input>
		</view>
			<view v-if="tableName=='yuangong'" :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' class="cu-form-group select">
                                <view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">性别</view>
                                <picker  @change="yuangongxingbieChange" :value="yuangongxingbieIndex" :range="yuangongxingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>部门</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.bumen" placeholder="部门"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>职位</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.zhiwei" placeholder="职位"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>联系方式</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>身份证</view>
			<input   style="padding: 0 30upx" :style='{"padding":"0 40rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(255, 170, 119, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"120rpx 0 0 120rpx","borderWidth":"2rpx 8rpx 2rpx 2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.shenfenzheng" placeholder="身份证"></input>
		</view>
		<view :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='yuangong'" @tap="yuangongzhaopianTap" class="cu-form-group">
			<view class="title" :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid"}'>照片</view>
			<view style="flex: 1;">
				<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"rgba(161, 161, 161, 1)","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"100%","borderWidth":"4rpx","width":"88rpx","borderStyle":"solid","height":"88rpx"}' v-if="ruleForm.zhaopian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.zhaopian" mode=""></image>
				<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"rgba(161, 161, 161, 1)","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"100%","borderWidth":"4rpx","width":"88rpx","borderStyle":"solid","height":"88rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		
		<view class="btn">
			<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0","backgroundColor":"rgba(255, 105, 18, 1)","borderColor":"rgba(255, 105, 18, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"300rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>保存</button>
			<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0 0 0 30rpx","backgroundColor":"rgba(187, 187, 187, 1)","borderColor":"rgba(187, 187, 187, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"2rpx","width":"auto","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>退出登录</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				kehuxingbieOptions: [],
				kehuxingbieIndex: 0,
				yuangongxingbieOptions: [],
				yuangongxingbieIndex: 0,
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='kehu'){
				this.kehuxingbieOptions = "男,女".split(',');
				this.kehuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.kehuxingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='yuangong'){
				this.yuangongxingbieOptions = "男,女".split(',');
				this.yuangongxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yuangongxingbieIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
                        // 下拉变化
                        kehuxingbieChange(e) {
                                this.kehuxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.kehuxingbieOptions[this.kehuxingbieIndex]
                        },
                        // 下拉变化
                        yuangongxingbieChange(e) {
                                this.yuangongxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.yuangongxingbieOptions[this.yuangongxingbieIndex]
                        },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.kehuzhanghao) && `kehu` == this.tableName){
					this.$utils.msg(`客户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `kehu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`kehu` == this.tableName && this.ruleForm.kehushouji&&(!this.$validate.isMobile(this.ruleForm.kehushouji))){
					this.$utils.msg(`客户手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.yuangonggonghao) && `yuangong` == this.tableName){
					this.$utils.msg(`员工工号不能为空`);
					return
				}
				if((!this.ruleForm.yuangongxingming) && `yuangong` == this.tableName){
					this.$utils.msg(`员工姓名不能为空`);
					return
				}
				if(`yuangong` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				if(`yuangong` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
					this.$utils.msg(`身份证应输入身份证格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			}

			,kehutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
			,yuangongzhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220212/50d4054a7e74477e830c1bca02ecf8cd.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.avator {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-left: 30upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}

	.cu-btn {
		width: 100%;
	}
	.cu-form-group .title {
		height: auto;
	}

	.right-input {
		flex: 1;
		text-align: left;
		line-height: 88rpx;
	}
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	}
	.box {
	  width: auto;
	  padding: 0 10upx;
	  box-sizing: border-box;
	  margin-bottom: 20upx;
	}

.picker-select-input {
	line-height: 88rpx;
}
</style>
