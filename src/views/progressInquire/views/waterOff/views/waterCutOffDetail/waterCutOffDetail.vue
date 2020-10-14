<template>
	<div id="waterCutOffDetail" class="pageContainer">
		<Navbar>
			<p class="desc">停水通知详情</p>
		</Navbar>
		<div class="container">
			<div class="detailWrapper">
				<div class="titleWrapper">
					<h4>{{ data.title }}</h4>
					<div class="infoWrapper">
						<div class="infoItem">
							<p class="label">
								<van-icon name="location-o" color="#576b95" />
								<span>所需区域</span>
							</p>
							<p class="info">{{ data.area }}</p>
						</div>
						<div class="infoItem">
							<p class="label">
								<van-icon name="label-o" color="#ed6a0c" />
								<span>停水类型</span>
							</p>
							<p class="info">{{ data.project }}</p>
						</div>
						<div class="infoItem">
							<p class="label">
								<van-icon name="underway-o" color="#ee0a24" />
								<span>停水时间</span>
							</p>
							<p class="info">{{ data.cutOffDate }}</p>
						</div>
					</div>
				</div>
				<div class="messageWrapper">
					<p>
						为配合悦来门诊部给水管迁改工程,我司 计划于2020年10月14日星期三13:00至17: 00,对悦来路DN300给水管进行停水接驳。届 时,中医院悦来门诊部、悦来路、悦来大街
						兴宁里、泰安路、和平正街、和平新街、悦来 中路2号等沿线范围用户将会停止供水。 请上述范围相关用户做好储水准备、如受 不可遇见因素的影响,停水时间和停水范围可
						能扩大,不便之处敬请各用户谅解。 如受天气影响,施工推迟,将另行通知。 咨询电话:96968 温馨提示:停水期间,请受影响的用户务 必将家里的水龙头关紧
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterCutOffDetail',
	data() {
		return {
			data: {
				title: '槎桥工业区DN300给水管进行停水接驳的通知',
				area: '城区',
				project: '计划检修',
				cutOffDate: '2020-10-13 09:00 至 2020-10-13 14:00'
			}
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'css/waterCutOffDetail.scss';
</style>
