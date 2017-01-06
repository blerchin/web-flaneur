function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function insertCookie(group){
    setCookie("username",group,365);
}

function printCookie(group){
    $('body').append('<div id="info"><p>group number <span class="group">'+group+'</span></div>');
}



function embedYouTube(url){
	 	var params = { allowScriptAccess: "always", modestbranding : 1,  allowFullScreen: "true" };
	    var atts = { id: url, class: 'outImage' };
	    $('#holder').append("<div class='embed' id='"+url+"'></div>");
	    swfobject.embedSWF("http://www.youtube.com/v/"+url+"&hl&enablejsapi=1&playerapiid=video&loop=1",url, 400, 300, "8", null, {autoplay: 0}, params, atts);
	}
	
function onYouTubePlayerReady(playerId, url) {
    ytplayer = document.getElementById("'"+url+"'");
    ytplayer.mute();
}