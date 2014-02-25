// インスタンスを生成
var myTumblrPosts = new TumblrPosts();

// 読み込み完了時のイベントハンドラを設定
myTumblrPosts.on("complete", function(){
    var $ul, tags;

    // getTags() : タグリストを取得
    tags = this.getTags();
    $ul = $("<ul>");
    $.each(tags, function(i, tag){
        $ul.append(
            $("<li>").text(tag.name + " (" + tag.count + ")")
        );
    });

    $ul.appendTo( $("ul#tagcloud") );
});

// 読み込みを開始
myTumblrPosts.run();