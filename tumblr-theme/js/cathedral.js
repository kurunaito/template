
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