<template>
	<div id="queryWaterBillDetail" class="pageContainer">
		<div class="titleWrapper">
			<p>
				尊敬的用户 <br />
				以下为您的账单详情面板
			</p>
		</div>
		<div class="container">
			<div class="infoWrapper">
				<van-cell-group>
					<van-cell title="户号" value="100162144" />
					<van-cell title="户名" value="小*袁" />
					<van-cell title="用水地址" value="东区软件园314" />
					<van-cell title="表身号" value="020-1234567890" />
					<van-cell title="用户状态" value="正常" />
				</van-cell-group>
			</div>
			<div class="infoWrapper">
				<van-cell-group>
					<van-cell title="本期抄表日" value="2020-09-21" />
					<van-cell title="上期抄表日" value="2020-07-23" />
					<van-cell title="本期行至" value="276" />
					<van-cell title="上期行至" value="256" />
					<van-cell title="实收水量" value="20" />
				</van-cell-group>
			</div>
			<div class="infoWrapper">
				<van-cell-group>
					<van-cell title="水费" value="32" />
					<van-cell title="污水处理费" value="19" />
					<van-cell title="垃圾处理费" value="6.2" />
					<van-cell title="其他费用" value="0" />
					<van-cell title="违约金" value="0" />
					<van-cell title="总金额" value="57.2" />
				</van-cell-group>
			</div>
			<div class="infoWrapper">
				<div ref="chart" id="chart"></div>
			</div>
		</div>
		<div class="submitBtn">
			<van-button block round type="primary" text="缴费" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'QueryWaterBillDetail',
	mounted() {
		this.drawChart();
	},
	methods: {
		drawChart() {
			let chart = this.$echarts.init(this.$refs.chart),
				data = [24, 30, 27, 22, 22, 24, 20];

			chart.setOption(this.chartSetting(data));
		},
		chartSetting(data) {
			return {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'none'
					},
					formatter: '{b}<br />{a}: {c}'
				},
				grid: {
					top: '10%',
					right: '10%',
					bottom: '10%'
				},
				yAxis: {
					name: '水量',
					nameTextStyle: {
						fontSize: 10
					},
					axisLabel: {
						fontSize: 10
					}
				},
				xAxis: {
					name: '抄表\n时间',
					nameLocation: 'end',
					nameTextStyle: {
						fontSize: 10
					},
					data: ['2019-09', '2019-11', '2020-01', '2020-03', '2020-05', '2020-07', '2020-09'],
					axisLabel: {
						interval: 0, // 横向信息全部显示
						fontSize: 10
					},
					axisPointer: {
						type: 'shadow'
					}
				},
				series: [
					{
						type: 'bar',
						data,
						name: '水量',
						barWidth: '50%',
						itemStyle: {
							color: '#4199b4',
							opacity: 0.7,
							shadowColor: 'rgba(65, 153, 180, 0.8)',
							shadowBlur: 10
						}
					},
					{
						type: 'line',
						data,
						label: {
							show: true
						},
						itemStyle: {
							color: '#1d7eb8'
						}
					}
				],
				dataZoom: [
					{
						type: 'inside',
						showDetail: false,
						realtime: true,
						start: 0,
						end: 80,
						minSpan: 40,
						maxSpan: 80,
						left: '10',
						right: '10'
					}
				]
			};
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/queryWaterBillDetail.scss';
</style>
