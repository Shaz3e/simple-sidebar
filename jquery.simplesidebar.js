//Simple Sidebar v0.0.1 by DcDeiv https://github.com/dcdeiv
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function( $ ) {
	$.fn.simpleSidebar = function( options ) {
		//declaring all global variables
		var sbw,
			//allowing user customisation
			defaults  = {
				settings: {
					opener: undefined,
					wrapper: undefined, //HTML tag is not safe. Please, use a container/wrapper div
					ignore: undefined,
					data: 'ssbplugin',
					animation: {
						duration: 500, //milliseconds (0.5s = 500ms)
						easing: 'swing'
					}
				},
				sidebar: {
					align: undefined,
					width: 350, //pixels
					gap: 64, //pixels
					closingLinks: undefined,
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
			},
			config    = $.extend( true, defaults, options ),
			$sidebar  = this,
			$opener   = $( config.settings.opener ),
			$wrapper  = $( config.settings.wrapper ),
			$ignore   = $( config.settings.ignore ),
			dataName  = config.settings.data,
			duration  = config.settings.animation.duration,
			easing    = config.settings.animation.easing,
			align     = config.sidebar.align,
			sbMaxW    = config.sidebar.width,
			gap       = config.sidebar.gap,
			$links    = config.sidebar.links,
			defStyle  = config.sidebar.style,
			maskStyle = config.mask.style,
			winMaxW   = sbMaxW + gap,
			//selecting all fixed elements except the sidebar and the ignore elements
			$fixedEl  = $( '*' )
				.not( $ignore )
				.not( $sidebar )
				.filter(function() {
					return $( this ).css( 'position' ) == 'fixed';
				}),
			//selecting all elements.
			$elements = $fixedEl
				.add( $sidebar )
				.add( $wrapper )
				.not( $ignore ),
			w         = $( window ).width();
			
			//Appending to 'body' the mask-div and adding its style
			var maskDiv = $( 'body' ).children().filter(function(){
				return $( this ).data( dataName ) === 'mask' ;
			});
			
			maskDiv
				//default style by user
				.css( maskStyle )
				//style properties that cannot be ovverriden
				.css({
					//mask-div is positioned with a negative integer for a bug in mobile browsers. On scrolling the page, the div will move as the browser-navigation-bar appears (Chrome Mobile, Opera Mobile, Firefox Mobile)
					position: 'fixed',
					top: -200,
					right: -200,
					left: -200,
					bottom: -200,
					//setting the z-index to 1 level below the sidebar so that it will overlay the page but not the sidebar
					zIndex: config.sidebar.style.zIndex - 1 })
				//hiding the mask-div. This element will be triggered only when the sidebar will be opened.
				.hide();
			
			//assining a value to sbw global variable
			if ( w < winMaxW ) {
				sbw = w - gap;
			} else {
				sbw = sbMaxW;
			}
			
			//checking config.sidebar.align
			console.log( align );
			
			var sbInitialPos = {
				width: sbw,
				marginLeft: -sbw
			};
			
	};
})(jQuery);