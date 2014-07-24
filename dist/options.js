$( '#sidebar' ).simpleSidebar({
	settings: {
		opener: undefined,
		wrapper: undefind,
		ignore: undefined,
		data: 'ssbplugin',
		animation: {
			duration: 500,
			easing: 'swing'
		}
	},
	sidebar: {
		align: undefined,
		width: 550, //pixels
		gap: 64, //pixels
		closingLinks: 'a',
		style: {
			zIndex: 3000
		}
	},
	mask: {
		style: {
			backgroundColor: 'grey',
			opacity: 0.5,
			filter: 'Alpha(opacity=50)' //IE8 and earlier
		}
	}
});