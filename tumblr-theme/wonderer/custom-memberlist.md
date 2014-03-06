#Custom CSS Swatch
色変更が簡単に出来るように、別に外部CSSを作りました。  
何かしらの役に立てれば幸いです。これらのコードは、 カスタマイズ画面の「ＨＴＭＬを編集」より`<header>`内の  

* css  
`<link href ="～wide.css" rel="stylesheet">`より**下**にいれてください。  
* javascript  
`<link href ="～script.js" rel="stylesheet">`より**下**にいれてください。 

##Black.css
[DEMO](http://wonderer-demo.tumblr.com/black)  

* css  
`<link href ="http://273c.github.io/template/tumblr-theme/css/wonderer-black.css" rel="stylesheet">`  


#Custom CSS
ちょっと細かいところのデザインを変えたいというときは、`{CustomCSS}`を使います。  
Tumblrカスタマイズページの下部にある、「**詳細設定**」へ飛び、カスタムCSSを入力していきます。  

####リンク色変更
`a { color:好きな色コード;}`  

####記事ブロック背景色変更
`.row {background-color: 好きな色コード;}`  

####見出しタイトルの背景色/背景画像変更
`h1,h2{background-color:色コード;background-image:url("アドレス");}`  

####ページトップに戻るリンクの背景色変更（PC表示のみ）
`.pagetop a {background-color: 好きな色コード;}`  

#Member List
テキスト投稿での崩れない執筆者一覧の作り方です。 コピペして、アドレスなどを書きくわえて使用してください。  
これだとスマートフォン版で一列に並んで、しかもはみ出さないです。  
人数分改行タグなしでずらりと並べてください。ブラウザサイズによって勝手に並び替えます。  
フルブラウザで見た場合、自動的に横四列になります。  

###バナー画像＋執筆者名前
    <div class="col-sm-6 col-md-3 member-list">
    <a href="サイトアドレス"><img src="画像アドレス"></a>
    <div class="caption">
    <h3>執筆者名前</h3>
    </div></div>  

###執筆者名前＋ウェブサイトボタン
    <div class="col-sm-6 col-md-3 member-list">
    <div class="caption">
    <h3>執筆者名前</h3>
    <a href="サイトアドレス" class="btn btn-default btn-sm" role="button">Website</a>
    </div></div>  

###サンプル画像アイコン＋執筆者名前＋ウェブサイトボタン
    <div class="col-sm-6 col-md-3 member-list">
    <img src="サンプル画像アイコンアドレス">
    <div class="caption"><h3>執筆者名前</h3>
    <a href="サイトアドレス" class="btn btn-default btn-sm" role="button">Website</a>
    </div></div>