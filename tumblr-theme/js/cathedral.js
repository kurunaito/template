/*!
 * TumblrPosts 
 * Copyright (c) 2010, matsukaze.
 * 
 * @version 1.3
 * @author mach3
 * @requires jQuery <http://jquery.com>
 */

var TumblrPosts=function(e){this.option=$.extend({},this.option),this.config(e),this.$=$(this),this.on(this.EVENT_COMPLETE,$.proxy(this._createTagData,this))};(function(e,t){e.EVENT_COMPLETE="complete",e.EVENT_PROGRESS="progress",e.option={url:"/api/read/json/",restPath:"/api/read/json/",domain:null,maxNum:0},e.$=null,e.offset=0,e.step=50,e.posts=[],e.tags=[],e.config=function(e){return typeof e=="undefined"?this.option:typeof e=="string"?this.option[e]:(Object.prototype.toString.call(e)==="[object Object]"&&(t.extend(this.option,e),"domain"in e&&this.config("domain")&&this.config({url:"http://"+this.config("domain")+this.config("restPath")})),this)},e.on=function(){this.$.on.apply(this.$,arguments)},e.bind=e.on,e.off=function(){this.$.off.apply(this.$,arguments)},e.unbind=e.off,e.trigger=function(){this.$.trigger.apply(this.$,arguments)},e.run=function(e,n){var r,i;if(!e)this.posts=[],this.tags=[];else{if(!e.posts.length){this.trigger(this.EVENT_COMPLETE);return}for(r=0;r<e.posts.length;r+=1){if(this.posts.length>=this.config("maxNum")){this.trigger(this.EVENT_COMPLETE);return}i=e.posts[r],this.posts.push(i),i.tags&&(this.tags=this.tags.concat(i.tags))}this.offset+=this.step,this.trigger(this.EVENT_PROGRESS)}return t.ajax({url:this.option.url,data:{start:this.offset,num:this.step},dataType:"jsonp",success:t.proxy(this.run,this)}),this},e._createTagData=function(){var e,t,n;t={};for(e=0;e<this.tags.length;e++)n=this.tags[e],t[n]=t[n]?t[n]+1:1;this.tags=[];for(e in t)this.tags.push({name:e,count:t[e]})},e.getPosts=function(e,n){var r,i=[];return e=e||0,n=n||10,t.each(this.posts,function(t,r){if(t<e)return;if(t>=e+n)return!1;i.push(r)}),i},e.getTags=function(e){var t=this.tags;return e&&t.sort(function(t,n){if(e==="asc")return t.count-n.count;if(e==="desc")return n.count-t.count}),t},e.getTitleByPost=function(e,t){var n=e["regular-title"]||e["photo-caption"]||e["video-caption"]||e["regular-body"]||e.type||"";return n=n.replace(/\<.+?\>/gi,""),n=t?n.substr(0,t):n,n}})(TumblrPosts.prototype,jQuery);

   $(function() {
	var myTumblrPosts = new TumblrPosts();

	myTumblrPosts.config({
		domain : location.host, 
		maxNum : 300
	});

	myTumblrPosts.on("complete", function(){
		var tags;
	tags = this.getTags();

	$.each(tags, function(i, tag){
		var n='<li><a href="/tagged/' + tag.name + '">' + tag.name + "</a></li>";
	$(n).appendTo( $("#tagcloud")
	)})
	});

myTumblrPosts.run();

    })();