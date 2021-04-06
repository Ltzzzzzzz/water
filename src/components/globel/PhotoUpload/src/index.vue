<template>
	<div class="photoUpload">
		<h4 class="label" :class="{ required }">{{ label }}</h4>
		<p class="placeholder">{{ placeholder }}</p>
		<div class="vanWrapper">
			<van-uploader v-model="fileList" :max-count="maxcount ? maxcount : 6" :after-read="afterRead" @delete="remove">
				<div class="uploadWrapper">
					<div class="iconWrapper" v-if="!image">
						<van-icon size="40" color="#dcdee0" name="photograph" />
					</div>
					<div class="imageWrapper" v-else>
						<van-image width="100%" height="100%" :src="image" />
					</div>
				</div>
			</van-uploader>
			<van-field :name="name" :rules="rules" v-model="filesStr" />
		</div>
	</div>
</template>

<script>
import commonApi from 'api/common';
export default {
	name: 'PhotoUpload',
	props: ['required', 'name', 'label', 'placeholder', 'rules', 'image', 'maxcount'],
	data() {
		return {
			fileList: [],
			filesStr: ''
		};
	},
	methods: {
		async afterRead() {
			const file = this.fileList.map(x => x.file)[0];
			const rs = await commonApi.upload({ file });
			this.filesStr = rs.data;
		},
		remove(e, i) {
			const arr = this.filesStr.split(',');
			arr.splice(i.index, 1);
			this.filesStr = arr.join(',');
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
		flex-direction: column;
		padding: 10px 16px;
		/deep/.van-cell {
			padding: 0;
			&:after {
				display: none;
			}
			.van-field__body {
				display: none;
			}
		}
		/deep/.van-uploader {
			width: 100%;
			.van-uploader__input-wrapper {
				width: 100%;
				.uploadWrapper {
					position: relative;
					width: 100%;
					height: 0;
					padding-bottom: 50%;
					// margin-bottom: 10px;
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
			.van-uploader__preview {
				margin: 0;
				margin-bottom: 10px;
				width: 100%;
				border-radius: 8px;
				overflow: hidden;
				.van-uploader__preview-image {
					position: relative;
					width: 100%;
					height: 0;
					padding-bottom: 50%;
					.van-image__img {
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
