<template>
	<div id="outlets" class="pageContainer">
		<PageModel>
			<Navbar>
				<p class="desc">
					尊敬的用户<br />
					以下为各镇区的营业网点
				</p>
			</Navbar>
			<div class="container">
				<div class="tip" v-if="!list.length"><van-empty description="没有查询到营业网点" /></div>
				<div class="outletList" v-else>
					<Outlet v-for="(outlet, i) in list" :key="i" />
				</div>
			</div>
		</PageModel>
	</div>
</template>

<script>
import Outlet from './components/Outlet';
export default {
	name: 'outlets',
	components: {
		Outlet
	},
	data() {
		return {
			list: [1, 2]
		};
	}
};
</script>

<style></style>
