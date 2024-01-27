# TwitterProtector
QRコードメーカーの振りをしてTwitterを不正アクセスから守ります。  
MITライセンスです。  
改変する際はかならずライセンス表記と著作権表示が必要です。  

# 使い方
(release)[https://github.com/kanxta/TwitterProtector/releases]からzipをDLし、解凍し、Google chromeに拡張機能として登録してください。  
`chrome://extensions`でデベロッパーモードをonにすると登録できます。詳しくはggってください。　　
ちなみにロックの情報はあなたのgoogleアカウントに保存されるため、複数のデバイスでロックの状態を同期することができます。ただし、ほかのデバイスですでにサイトを開いていた場合、何らかの要因によってリロードされたときにロックされます。  

### QRコードの作成
一応QRコードも作れます。拡張機能のポップアップを開き、URLをフォームに入れます。その後作成を押すだけです。  
すこし時間がかかるので気長に3秒くらい待っててください。  
やる気がでなかったので最低限のcssしか入っていません。また、inputをlabelでかこわずspanでラベルを疑似的に付けるという超パワー的な実装ですのであらかじめご了承ください。  

### ロックの有効化・無効化
拡張機能のポップアップ(QRコード作成画面)を開き、お好きなキーを10回連続で押すと設定画面に移ります。  
ON・OFFのトグルスイッチはJavascript不使用のため真ん中あたりをクリックしないと反応しなかったり反応が鈍かったりします。  
ONにするとパスワードを訪ねるダイアログが出るので、お好きなパスワードを入力してください。文字数は多すぎると(試してませんが100文字くらいならたぶん大丈夫です)うまく保存されないと思うので注意してください。  
OFFにするとまたまたパスワードを訪ねるダイアログが出るので、ONにしたときのパスワードを入れてください。もし忘れた場合は拡張機能を一回消して、もう一回入れてください。
パスワードが平分でgoogleアカウントに保存されますので、セキュリティ上不安な方はカスタマイズしてハッシュ値で保存するように改造してみてはいかがでしょうか？

### 緊急ロック
親が来た時などに使える方法です。有効化されているサイト(デフォではtwitterのみ)でお好きなキーを7回連続で押すとパスワードを訪ねるポップアップが出るので、好きなパスワードを登録してください。  
この方法でロックした場合、一度リロードされます。  
ロックは拡張機能のポップアップから解除できます。  

# カスタマイズする
manifest.jsonでロックを有効にするサイトを複数登録することができます。  
パスワードをサイトごとに分ける、といったことはできません。  
```
(前略)
[
  "https://twitter.com/*",
  "URL2",
  ...
],
(後略)
```
拡張機能を導入したままファイルを改変した際は、`chrome://extensions`で拡張機能をリロードしてください。方法はggってください。  

# お願い
改変される方は一報入れていただけるとありがたいです。強制ではありませんが。  

プログラミング初心者なのでくそコードですが温かい目で見守ってください。どうしても何か言いたい方はissueを立ててください。極力対応します。  

# 免責事項
この拡張機能を使用して生じた問題について作者(kanxta)は一切の責任を取らないものとします。(MITライセンス)

