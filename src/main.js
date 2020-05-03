import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;

$(document).ready(() => {
	// SideNav Button Initialization
	$(".button-collapse").sideNav();
		// SideNav Scrollbar Initialization
		var sideNavScrollbar = document.querySelector('.custom-scrollbar');
		var ps = new PerfectScrollbar(sideNavScrollbar);

new WOW().init();
});