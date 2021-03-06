

#Customize
Tumblrの管理画面からカスタマイズ画面を呼び出してください。  
テーマが適用されていると以下の設定項目が出てきます。
  

##Body 
* **Background(Image)**  
背景画像がアップロード可能。タイル状に並べます
* **Header**  
ヘッダー画像がアップロード可能。  
画像がない場合はブログタイトルと説明文が出ます。  
* **Background(Color)**  
背景色変更可能。デフォルト値は「#fff」

##Switch（表示切替関係）
* **Infinite Scroll**  
オンオフできます。オフの場合、ページネーションが出ます。  
オンにするとスマートフォンなどでも無限スクロールするので、困る人はオフをおススメします。

###Top Menu Bar link（メニューリンク部分）
* **Show Contents link**  
メニューのコンテンツリンクをオンオフします。  
アーカイブリンクもフリーページも使わない人はオフで。
* **Show Tagcloud link**  
タグクラウドリンクをオンオフ。  
タグを基本使わない人はオフで。
* **Show Archive link**  
* **Show Random link**  
* **Show RSS link**  
コンテンツリンクに格納されているこれらのリンクがいらない人は適時オフに。

###Controls&PermalinkPage（右上のアレと個別記事画面）
* **Delete tumblr controls**  
オンで右上に出てくるタンブラーコントロールを抹殺します。  
デフォルトはオフ（表示）状態。
* **Permalink Reblog Button**  
個別記事のリブログボタンをオンオフ。  
デフォルトはオン（表示）状態。
* **Permalink Like Button**  
個別記事のリブログボタンをオンオフ。  
デフォルトはオン（表示）状態
* **Show Post Date**  
テキストリストモードを解除したときの一覧記事での日付をオンオフします。  
デフォルトはオン（表示）状態。
* **Show Permalink Date**  
個別記事の日付をオンオフします。
デフォルトはオン（表示）状態。  
* **Text Link List Mode**  
テキストリストが一覧で出ます。  
デフォルトはオン状態。オフにすると日記風に使えます。  

###User Info（プロフィール部分）
* **Show User Info**  
メニューのインフォリンクを表示非表示に。  
freeページで別にアバウトページなどを作りたい人はオフに。
* **Show User SNS**  
インフォ部分のタンブラーアイコン下に出るSNSアイコンボタンを表示非表示に。  
別にSNSリンクいらないわという人はオフに。  
  
  
##Text（入力関係）
###Top Menu Bar（メニューリンク部分）
* **Menu Other Link URL**  
メニューのTagsリンクの後ろに一つだけ追加できます。  
アドレスを追加してください。下のラベル項目だけ入力してもメニューには追加されません。
* **Menu Other link Label**  
上で追加したリンクに名前を付けます。  
この項目だけ入力してもメニューには追加されません。

###User Info（プロフィール部分）
* **Your Name**  
名前を入力してください。無記入の場合は出ません。
* **Your Profile**  
タグ可能なので、改行したい場合はタグを入れてください。
* **Your Twitter Username**
ツイッターのアカウントのみを入力してください。  
アドレスは必要ありません。
* **Your Website**  
* **Your Other SNS link**  
SNSやウェブサイトのリンクを張ります。
* **Google Analtics ID**  
Google Analticsを利用の際はIDをこちらに  

#Custom CSS
ちょっと細かいところのデザインを変えたいというときは、  `{CustomCSS}`を使います。  
Tumblrカスタマイズページの下部にある、「**詳細設定**」へ飛び、カスタムCSSを入力していきます。  

####リンク色変更
`a { color:好きな色コード;}`  

####ページトップに戻るリンクの背景色変更（PC表示のみ）
`.pagetop a {background-color: 好きな色コード;}`
