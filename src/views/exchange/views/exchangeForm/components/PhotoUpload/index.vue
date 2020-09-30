<template>
	<div class="photoUpload">
		<h4 class="label" :class="{ required }">{{ label }}</h4>
		<p class="placeholder">{{ placeholder }}</p>
		<div class="vanWrapper">
			<van-field :name="name" :rules="rules">
				<template #input>
					<van-uploader v-model="fileList" max-count="1" :after-read="afterRead">
						<div class="uploadWrapper">
							<div class="iconWrapper" v-if="!image">
								<van-icon size="40" color="#dcdee0" name="photograph" />
							</div>
							<div class="imageWrapper" v-else>
								<van-image width="100%" height="100%" :src="image" />
							</div>
						</div>
					</van-uploader>
				</template>
			</van-field>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PhotoUpload',
	props: ['value', 'required', 'name', 'label', 'placeholder', 'rules', 'image'],
	data() {
		return {
			fileList: []
		};
	},
	methods: {
		afterRead(file) {
			this.$emit('input', file);
		}
	}
};
</script>

<style lang="scss" scoped>
.photoUpload {
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
	.placeholder {
		margin-left: 10px;
		font-size: 12px;
		color: rgb(195, 195, 195);
	}
	.vanWrapper {
		display: flex;
		justify-content: center;
		/deep/.van-uploader {
			width: 100%;
			/deep/.van-uploader__input-wrapper {
				width: 100%;
				.uploadWrapper {
					position: relative;
					width: 100%;
					height: 0;
					padding-bottom: 50%;
					border-radius: 8px;
					background-color: #f7f8fa;
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
					}
				}
			}
			/deep/.van-uploader__preview {
				margin: 0;
				width: 100%;
				border-radius: 8px;
				overflow: hidden;
				/deep/.van-uploader__preview-image {
					position: relative;
					width: 100%;
					height: 0;
					padding-bottom: 50%;
					/deep/.van-image__img {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						object-fit: inherit !important;
					}
				}
			}
		}
	}
}
</style>
