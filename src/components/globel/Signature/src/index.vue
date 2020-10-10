<template>
	<div class="signature" @click="visible = true">
		<h4 class="label" :class="{ required }">{{ label }}</h4>
		<div class="vanWrapper">
			<van-field :name="name" :rules="rules">
				<template #input>
					<div class="hidden">
						<van-uploader v-model="fileList" max-count="1" />
					</div>
					<div class="signatureWrapper">
						<div class="iconWrapper" v-if="!fileList.length">
							<van-icon size="40" color="#dcdee0" name="edit" />
						</div>
						<div class="imageWrapper" v-else>
							<div class="iconWrapper" @click.stop="fileList = []">
								<van-icon color="#ffffff" name="cross" />
							</div>
							<van-image width="100%" height="100%" :src="fileList[0].content" />
						</div>
					</div>
				</template>
			</van-field>
		</div>
		<van-popup v-model="visible" round :close-on-click-overlay="false" get-container="body">
			<SignatureBoard :visible.sync="visible" :fileList.sync="fileList" />
		</van-popup>
	</div>
</template>

<script>
import SignatureBoard from './components/SignatureBoard';
export default {
	name: 'Signature',
	props: ['required', 'name', 'label', 'rules'],
	components: {
		SignatureBoard
	},
	data() {
		return {
			visible: false,
			fileList: []
		};
	}
};
</script>

<style lang="scss" scoped>
.signature {
	position: relative;
	padding: 10px;
	background-color: #ffffff;
	&:after {
		position: absolute;
		box-sizing: border-box;
		content: '';
		pointer-events: none;
		right: 16px;
		bottom: 0;
		left: 16px;
		border-bottom: 1px solid #ebedf0;
		transform: scaleY(0.5);
	}
	.label {
		position: relative;
		padding: 10px 20px;
		font-size: 14px;
		font-weight: normal;
		color: #646566;
		&.required:before {
			content: '*';
			position: absolute;
			top: 8px;
			left: 8px;
			font-size: 10px;
			color: #ee0a24;
		}
	}
	.vanWrapper {
		.hidden {
			display: none;
		}
		.signatureWrapper {
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 50%;
			border-radius: 8px;
			background-color: #f7f8fa;
			overflow: hidden;
			.iconWrapper {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.imageWrapper {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				.iconWrapper {
					position: absolute;
					top: 0;
					right: 0;
					left: auto;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 14px;
					height: 14px;
					background-color: rgba(0, 0, 0, 0.7);
					border-radius: 0 0 0 12px;
					z-index: 1;
					/deep/.van-icon {
						position: absolute;
						top: -2px;
						right: -2px;
						color: #fff;
						font-size: 16px;
						transform: scale(0.5);
					}
				}
			}
		}
	}
}
</style>
