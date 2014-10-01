/*
** Simple Sidebar v1.1.0 by DcDeiv https://github.com/dcdeiv
** Api v1.0.0
**
** GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
**
** # Default Options
** # Example of Usage
**
** - *REQUIRED* means that without that value, the plug-in won't work.
** - *WARNING* means that you have to read very carefully.
** - STRING: "a string", 'another string', 'a "complex" string', "another 'complex' string", '50px', '5em', '100%', '1000ms', etc.
** - NUMBER: 500, 50, 5, 100 - these are all PIXELS or MILLISECONDS(ms).
** - undefined is undefined but not 'undefined' nor "undefined".
**
** Forewarned is forearmed.
**
*/



// # Default Options
====================

//Select the $sidebar. Ex: '.sidebar'
$( 'sidebar-selector' ).simpleSidebar({
	//Global plug-in settings
	//*REQUIRED*
	settings: {
		//*REQUIRED* OPENER is the selector that fire the animation. It can be an icon a button, an input, an image, a div or a span. Whatever you want. Ex: '.menu-button', '#button'.
		opener: undefined, //STRING
		//*REQUIRED* WRAPPER is the selector for the wrapper/container div/section that holds all content. It is required to animate correctly the document. Fixed elements ("position: fixed") can be included or excluded. It does not matter if you put inside the $sidebar and the navigation-bar nor if you put them outside. Ex: '.wrapper', '#container' etc.
		wrapper: undefined, //STRING
		//IGNORE is the selector for all elements that must be ignored. This feature comes in help especially when you have to install this plug-in in a CMS or blog. TUMBLR Ex: '#ga_target, #tumblr_controls'.
		ignore: undefined, //STRING
		//DATA is the data-attribute for the new elements that the plug-in creates.
		data: 'ssbplugin',
		//ANIMATION properties.
		animation: {
			//DURATION of the animation
			duration: 500,
			//EASING of the animation. If you include the "jQuery-UI" library in your document you can specify an easing (see https://jqueryui.com/resources/demos/effect/easing.html) Ex: 'linear', 'swing', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart'.
			easing: 'swing'
		}
	},
	//*REQUIRED* all SIDEBAR settings
	sidebar: {
		//*REQUIRED* the ALIGN of the $sidebar. Ex: undefined, 'left', 'right'.
		//*WARNING* type in lowercase. If undefined the align is automatically assigned to 'left'.
		align: undefined, //STRING
		//*REQUIRED* the WIDTH and MAXWIDTH of the $sidebar. This value will override CSS.
		width: 350, //NUMBER
		//the GAP between the end of the sidebar (margin-right for the left-sidebar. margin-left for the right-sidebar) and the end of the document (document margin-right for the left-sidebar. document margin-left for the right-sidebar) when the screen is smaller that the $sidebar width.
		gap: 64, //NUMBER
		//CLOSINGLINKS is the selector that will fire the $sidebar closing animation.
		//*WARNING* do not select parent and child. Ex: 'li, a' when "<li><a href=""></a></li>". So just select the child element ('a'). POSSIBLE EXAMPLES: 'a', 'li', 'a, .fauxlinks, #social, .button'.
		closingLinks: 'a',
		//*REQUIRED* This feature assures the plug-in that some values will override CSS.
		style: {
			//*REQUIRED* zINDEX or 'z-index' is required to position the sidebar above ALL content and to position the "mask div" one level below the sidebar.
			zIndex: 3000
			//
			//*WARNING* You can add more style here or in a separate file but everything here will override styles in separate CSS files.
			//*WARNING* Do no care about "position: fixed, top:0, left:0, bottom:0, right:0" because the plug-in will care about it. Positioning rules will be overridden automatically by the plug-in.
		}
	},
	//MASK holds all settings of the mask-div. The mask-div is a required feature that lays over the document content (except the $sidebar) and fires the closing animation function.
	mask: {
		//STYLE holds all CSS rules. Use this feature to stylize the mask.
		style: {
			//Default options.
			backgroundColor: 'black', //if you do not want any color use 'transparent'.
			opacity: 0.5, //if you do not want any opacity use 0.
			filter: 'Alpha(opacity=50)' //IE8 and earlier - If you do not want any opacity use 0.
			//You can add more options.
		}
	}
});



/* # Example of Usage
**======================
** with required options
*/


$( '#sidebar' ).simpleSidebar({
	settings: {
		opener: '.button',
		wrapper: '#wrapper',
	},
	sidebar: {
		align: 'left'
		width: 250,
		closingLinks: 'a',
		style: {
			zIndex: 100
		}
	},
	mask: {
		style: {
			backgroundColor: 'grey',
			opacity: 0.9,
			filter: 'Alpha(opacity=90)'
		}
	}
});
