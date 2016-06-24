//ceebox
/*
 * Ceebox 1.3.4 beta (Code optimization; improved gallery navigation)
 * 1.3.4 is currently stable but it's not finished nor have I tested it across all browsers. 
 *
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/CeeBox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Adapted from Thickbox (http://jquery.com/demo/thickbox/) Copyright (c) 2007 Cody Lindley (http://www.codylindley.com)
 * Video pop-up code inspired by Videobox (http://videobox-lb.sourceforge.net/)
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

// BASE SETTINGS - Edit to your liking
// path to loading animationChange base settings below.
var pathToLoadingAnim = "/images/siteimages/videoloading.png";

// Base Width and Height for html boxes 
// if set to false, size is set automatically by size of browser window. Can be set to a static size (ie, var vidBaseW = 480; var vidBaseH = 359;).
var htmlBaseW = false;
var htmlBaseH = false;
// Base Width and Height for video boxes
// if set to false, size is set automatically by size of browser window. Can be set to a static size (ie, var vidBaseW = 480; var vidBaseH = 359;).
var vidBaseW = false;
var vidBaseH = false;


/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call cee_init
$(document).ready(function(){   
	cee_init('a.ceebox, area.ceebox, input.ceebox');//pass where to apply ceebox
	imgLoader = new Image();// preload image
	imgLoader.src = pathToLoadingAnim;
	
	/* Opera Hack.
	 * Flash movies were not displaying properly with CeeBox under Opera. Videobox works fine, I don't know what's different.
	 * I randomly discovered that if there is an inline element immediately under the body tag it works. 
	 * Don't ask me why but this works. Note that I have made the text invisible to hide added element.
	 * If anyone has a better solution please let me know. I hate having to include something as hacky as this.
	*/
		if($.browser.opera){
			$("body").append("<span style='line-height:0px;color:rgba(0,0,0,0)' rel='lame opera hack'>-</span>");
		}
});

//add ceebox function to href & area elements that have a class of .ceebox
function cee_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	cee_show(t,a,g);
	this.blur();
	return false;
	});
}

function cee_show(caption, url, rel) {//function called when the user clicks on a ceebox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("html").css("overflow","hidden");
			if (document.getElementById("cee_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='cee_HideSelect'></iframe><div id='cee_overlay'></div><div id='cee_window'></div>");
				$("#cee_overlay").click(cee_remove);
			}
		}else{//all others
			if(document.getElementById("cee_overlay") === null){
				$("body").append("<div id='cee_overlay'></div><div id='cee_window'></div>");
				$("#cee_overlay").click(cee_remove);
			}
		}
		//For Firefox use png overlay to hide flash otherwise use background and opacity
		(cee_detectMacXFF()) ? $("#cee_overlay").addClass("cee_overlayMacFFBGHack") : $("#cee_overlay").addClass("cee_overlayBG");
		
		if(caption===null){caption="";}
		$("body").append("<div id='cee_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		$('#cee_load').show();//show loader
		
		var baseURL = (url.indexOf("?")!==-1) ? url.substr(0, url.indexOf("?")) : url; //grab query string if there is one
		
		var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.swf$|\.htm$|\.html$|\.asp$|\.aspx$/;
		var urlType = baseURL.toLowerCase().match(urlString);
		
		// Size of module window for video or html
		var vidSize = cee_getSize(rel,vidBaseW,vidBaseH);
		var htmlSize = cee_getSize(rel,htmlBaseW,htmlBaseH);
		
		var urlTest = [
			[(!url.match(/^http:+/) && (rel && !rel.match("iframe"))) || (rel && rel.match("ajax")) || false, "ajax"],
			[urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp' || false, "image"],
			[url.match(/youtube\.com\/watch/i) || false, "youtube"],
			[url.match(/metacafe\.com\/watch/i) || false, "metacafe"],
            [url.match(/google\.com\/videoplay/i) || false, "google"],
            [url.match(/ifilm\.com\/video/i) || false, "ifilm"],
            [url.match(/vimeo\.com/i) || false, "vimeo"],
            [url.match(/dailymotion\.com/i) || false, "dailymotion"],
            [url.match(/facebook\.com\/video/i) || false, "facebook"]
        ]

		var i = urlTest.length;
		var urlMatch;
		do {
			if (urlTest[i-1][0]){var urlMatch = urlTest[i-1][1]; break};
		} while (--i);
		switch (urlMatch) {
			case "image":
				cee_imagegal(url,caption,rel,urlString);
				break;
			case "facebook":
				var src = "http://www.facebook.com/v/"+url.split('v=')[1].split('&')[0];
				var params = {wmode: "transparent",movie: src,allowFullScreen: "true",allowScriptAccess: "always",flashvars: {autoplay: true}};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "youtube":
				var src = "http://www.youtube.com/v/"+url.split('v=')[1].split('&')[0]+"&hl=en&fs=1&autoplay=1";
				var params = {wmode: "transparent",allowFullScreen: "true",allowScriptAccess: "always"};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "metacafe":
				var src = "http://www.metacafe.com/fplayer/"+url.split('id=')[1].split('&')[0]+"/.swf";
				var params = {wmode: "transparent"};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "google":
				src = "http://video.google.com/googleplayer.swf?docId="+url.split('id=')[1].split('&')[0]+"&hl=en";
				params = {wmode: "transparent",allowFullScreen: "true",allowScriptAccess: "always",flashvars: {autoplay: true,playerMode: "normal",fs: true}};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "ifilm":
				src = "http://www.ifilm.com/efp";
				params = {wmode: "transparent",flashvars: {flvbaseclip: vidId+"&"}};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "vimeo":
				src = "http://www.vimeo.com/moogaloop.swf?clip_id="+url.split('/')[3]+"&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1";
				params = {wmode: "transparent",allowFullScreen: "true",allowScriptAccess: "always"};
				cee_vidWindow(src,vidSize,caption,params);
				break;
			case "dailymotion":
				src = "http://www.dailymotion.com/swf/"+url.split('/')[4]+"&related=0&autoplay=1";
				params = {allowFullScreen: "true",allowScriptAccess: "always"};
				cee_vidWindow(src,vidSize,caption,params);
			case "ajax":
				cee_ajaxWindow(url,htmlSize,caption,rel);
				break;
			default:
				cee_iframeWindow(url,htmlSize,caption,rel);	
		}
		} catch(e) {
		//nothing here
	}
}
//helper functions below
function cee_imagegal(url,caption,rel,urlString) {
	//Display images in box

	// check to see if this is a gallery and set up next/prev buttons
	if (rel) {
		var prev = false;
		var next = false;
		var g = $("a[rel="+rel+"]").get();
		var gLength = g.length;
		var i = gLength;
		do {
			if (g[i-1].href == url) {var gImg = i;break;};
		} while (--i);
		var gNav = "Image " + (i) +" of "+ (gLength);
		if (gImg > 1) {
			gNav = gNav + "<span id='cee_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
			var prev = true;
		}
		if (gImg < gLength) {
			gNav = gNav + "<span id='cee_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
			var next = true;
		}
		
	} else {gNav = false;}

	var imgPreloader = new Image();
	imgPreloader.onload = function(){
		imgPreloader.onload = null;
			
		// Resizing large images
		var pagesize = cee_getPageSize();
		var x = pagesize[0] - 150;
		var y = pagesize[1] - 150;
		var imgW = imgPreloader.width;
		var imgH = imgPreloader.height;
		
		if (imgW > x) {
			imgW = x;
			imgH = imgH * (x / imgW);
		};
		if (imgH > y) {
			imgW = imgW * (y/imgH);
			imgH = y;
		};
		// End Resizing
		
		$("#cee_window").append("<a href='' id='cee_ImageOff' title='Close'><img id='cee_Image' src='"+url+"' width='"+imgW+"' height='"+imgH+"' alt='"+caption+"'/></a>" + "<div id='cee_caption'>"+caption+"<div id='cee_secondLine'>" + gNav + "</div></div><div id='cee_closeWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div>");
		
		$("#cee_closeWindowButton").click(cee_remove);
		
		if (gNav) {
			if (gImg > 1) {
				function goPrev(){
					document.onkeydown = null;
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#cee_window").remove();
					$("body").append("<div id='cee_window'></div>");
					cee_show(g[gImg-2].title, g[gImg-2].href, rel);
					return false;
				}
				$("#cee_prev").click(goPrev);
			}
			if (gImg < gLength) {
				function goNext(){
					document.onkeydown = null;
					$("#cee_window").remove();
					$("body").append("<div id='cee_window'></div>");
					cee_show(g[gImg].title, g[gImg].href, rel);				
					return false;
				}
				$("#cee_next").click(goNext);
			}
		}
		
		document.onkeydown = function(e){ 	
			e = e || window.event;
			var code = e.keyCode || e.which;
			if(code == 27){ // close
				cee_remove();
			} else if(code == 190 || code == 39 && next == true){ // display next image
				goNext();
			} else if(code == 188 || code == 37 && prev == true){ // display prev image
				goPrev();
			}
		};
		
		cee_position(imgW + 30,imgH + 60);
		$("#cee_load").remove();
		$("#cee_ImageOff").click(cee_remove);
		$("#cee_window").css({display:"block"}); //for safari using css instead of show
	};
	
	imgPreloader.src = url;
};


function cee_ajaxWindow(url,htmlSize,caption,rel) {
	//if indicated as ajax display as such; also, show relative path links as ajax unless indicated as iframe

	var ajaxSize = [htmlSize[0],htmlSize[1] - 5];
	
	if($("#cee_window").css("display") != "block"){ //if window currently not displaying
		if(rel && rel.match("modal")){//modal ajax ceebox
			$("#cee_overlay").unbind();
			$("#cee_window").append("<div id='cee_ajaxContent' class='cee_modal' style='width:"+ajaxSize[0]+"px;height:"+ajaxSize[1]+"px;'></div>");	
			
		}else{//normal non-modal ajax
			$("#cee_window").append("<div id='cee_title'><div id='cee_ajaxWindowTitle'>"+caption+"</div><div id='cee_closeAjaxWindow'><a href='#' id='cee_closeWindowButton'>close</a> or Esc Key</div></div><div id='cee_ajaxContent' style='width:"+ajaxSize[0]+"px;height:"+ajaxSize[1]+"px'></div>");
		}
	}else{ //if the window is already up, we are just loading new content via ajax
		$("#cee_ajaxContent")[0].style.width = ajaxSize[0] +"px";
		$("#cee_ajaxContent")[0].style.height = ajaxSize[1] +"px";
		$("#cee_ajaxContent")[0].scrollTop = 0;
		$("#cee_ajaxWindowTitle").html(caption);
	}
	$("#cee_closeWindowButton").click(cee_remove);
	if (rel && rel.match(/#[a-z_A-Z1-9]+/)){ //if the user as supplied a id to target in the rel than use that
		targetId = rel.match(/#[a-z_A-Z1-9]+/);
		$("#cee_ajaxContent").load(url + " " + targetId);
	} else {
		$("#cee_ajaxContent").load(url);
	}
	
	cee_position(htmlSize[0]+30, htmlSize[1]+40);
	$("#cee_load").remove();
	cee_init("#cee_ajaxContent a.ceebox");
	$("#cee_window").css({display:"block"});
	document.onkeyup = function(e){ 	
		e = e || window.event;
		(e.keyCode == 27 || e.which == 27) ? cee_remove() : false ;
	};
			
}

function cee_iframeWindow(url,htmlSize,caption,rel) {
	//else show as iframe (catch-all)

	var iframeSize = [htmlSize[0] + 29,htmlSize[1] + 12];
	
	$("#cee_iframeContent").remove();
	if (rel && rel.match("modal")) {//modal iframe ceebox
		$("#cee_overlay").unbind();
		$("#cee_window").append("<iframe frameborder='0' hspace='0' src='"+url+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"' onload='cee_showIframe()' style='width:"+iframeSize[0]+"px;height:"+iframeSize[1]+"px;'> </iframe>");
	} else {//normal non-modal iframe ceebox (this is what it defaults to)
		$("#cee_window").append("<div id='cee_title'><div id='cee_ajaxWindowTitle'>"+caption+"</div><div id='cee_closeAjaxWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+url+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"' onload='cee_showIframe()' style='width:"+iframeSize[0]+"px;height:"+iframeSize[1]+"px;' > </iframe>");
	}
	$("#cee_closeWindowButton").click(cee_remove);
	cee_position(htmlSize[0]+30, htmlSize[1]+40);
	if($.browser.safari){//safari needs help because it will not fire iframe onload
		$("#cee_load").remove();
		$("#cee_window").css({display:"block"});
	}
	document.onkeyup = function(e){ 	
		e = e || window.event;
			(e.keyCode == 27 || e.which == 27) ? cee_remove() : false ;
	};
}

function cee_showIframe(){
	$("#cee_load").remove();
	$("#cee_window").css({display:"block"});
}

function cee_remove() {
 	$("#cee_imageOff").unbind("click");
	$("#cee_closeWindowButton").unbind("click");
	$("#cee_window").fadeOut("fast",function(){$('#cee_window,#cee_overlay,#cee_HideSelect').unbind().trigger("unload").remove();});
	$("#cee_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = null;
	document.onkeyup = null;
	return false;
}

function cee_position(w,h) {
$("#cee_window").css({marginLeft: '-' + parseInt((w / 2),10) + 'px', width: w + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
		$("#cee_window").css({marginTop: '-' + parseInt((h / 2),10) + 'px'});
	}
}

function cee_getSize(rel,baseW,baseH){	
			//Base width and height set at top of ceebox.js; If base not set than it is 
			//To set width and height manually for the video use the rel attribute. I.E., rel="600 480"
			var pagesize = cee_getPageSize();
			
			(baseW)? baseW=baseW*1 : baseW=pagesize[0] - 150;
			(baseH)? baseH=baseH*1 : baseH=pagesize[1] - 150;
			var sizes=new Array();
			if (rel && rel.match(/[0-9]+/g)){
				sizes = rel.match(/[0-9]+/g);
				sizes[0] = (sizes[0]) ? sizes[0]*1 : baseW;
				sizes[1] = (sizes[1]) ? sizes[1]*1 : baseH;
			} else {
				sizes = [baseW,baseH];
			}
			return sizes;
}

function cee_vidWindow(u,s,c,p) {
	//create ceebox window for video
	$("#cee_window").append("<div id='cee_video'></div>" + "<div id='cee_caption'>"+c+"</div><div id='cee_closeWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
	$("#cee_closeWindowButton").click(cee_remove);
	cee_position(s[0] + 30,s[1] + 60);
	document.onkeyup = function(e){ 	
			e = e || window.event;
			(e.keyCode == 27 || e.which == 27) ? cee_remove() : false ;
	};
	//embed swfobject
	$('#cee_video').flash({
		swf: u,
		width: s[0],
		height: s[1],
		params: p
	});

	$("#cee_load").remove();
	$("#cee_window").css({display:"block"}); //for safari using css instead of show
}

function cee_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function cee_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}