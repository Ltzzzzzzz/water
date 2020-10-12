<template>
	<div id="map" class="pageContainer">
		<BaiduMap class="bm-view" ak="unNMuxcUFcLW0ZDGaPYS8XzeVxtndhxs" :center="center" :zoom="15" :double-click-zoom="false" :mapStyle="mapStyle">
			<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT" />
			<bm-marker :position="center" @click="show = true">
				<bm-info-window :show="show" :width="0" :height="0" @close="show = false">
					<div class="infoWrapper">
						<h4>xx营业厅</h4>
						<div class="businessHours">
							<p class="label">营业时间：</p>
							<div class="hours">
								<p class="hour">周一至周五：08:00 - 17:00</p>
								<p class="hour">周六：09:00 - 16:00</p>
								<p class="hour">周日：休息</p>
							</div>
						</div>
					</div>
				</bm-info-window>
			</bm-marker>
		</BaiduMap>
	</div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map';
import { BmMapType, BmMarker, BmInfoWindow } from 'vue-baidu-map';
export default {
	name: 'mapPage',
	components: {
		BaiduMap,
		BmMapType,
		BmMarker,
		BmInfoWindow
	},
	data() {
		return {
			show: true,
			center: { lng: 113.405024, lat: 22.520646 },
			mapStyle: {
				styleJson: [
					{
						featureType: 'all',
						elementType: 'all',
						stylers: {
							lightness: 10,
							saturation: -100
						}
					}
				]
			}
		};
	},
	methods: {
		getPoint() {
			// http://api.map.baidu.com/geocoder?address=东区竹苑路银竹街23号&output=json&key=unNMuxcUFcLW0ZDGaPYS8XzeVxtndhxs&city=中山市
		}
	}
};
</script>

<style lang="scss" scoped>
#map {
	.bm-view {
		width: 100%;
		height: 100%;
		.infoWrapper {
			h4 {
				margin-bottom: 8px;
				font-size: 16px;
				color: #333333;
			}
			.businessHours {
				display: flex;
				color: #707070;
				font-size: 12px;
				.label {
					margin-right: 4px;
				}
				.hours {
					flex: 1;
					overflow: hidden;
					.hour {
						margin-bottom: 4px;
					}
				}
			}
		}
	}
}
</style>
