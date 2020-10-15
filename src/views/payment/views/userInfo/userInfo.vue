<template>
	<div id="userInfo" class="pageContainer">
		<Navbar>
			<p class="desc">
				尊敬的用户 <br />
				以下为您的客户详情
			</p>
		</Navbar>
		<div class="container">
			<div class="infoWrapper">
				<van-cell-group>
					<van-cell title="户号" value="1234567890" />
					<van-cell title="户名" value="袁敏棠" />
					<van-cell title="用户状态" value="正常" />
					<van-cell title="手机号" value="13800138000" />
					<van-cell title="身份证" value="44****************" />
					<van-cell title="固定电话" value="13800138000" />
					<van-cell title="地址" value="亨尾大街东区软件园3层314" />
				</van-cell-group>
			</div>
			<div class="infoWrapper">
				<van-cell-group>
					<van-cell title="总欠费金额" value="¥ 0.00" />
					<van-cell title="本期抄表日" value="2020-09-32" />
					<van-cell title="上期抄表日" value="2020-07-23" />
					<van-cell title="本期行至" value="276" />
					<van-cell title="上期行至" value="256" />
				</van-cell-group>
			</div>
			<div class="buttonWrapper">
				<van-button block type="info" text="查询缴费" to="/QueryWaterBill" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'userInfo'
};
</script>

<style lang="scss" scoped>
.infoWrapper {
	margin-bottom: 10px;
	border-radius: 8px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
</style>
