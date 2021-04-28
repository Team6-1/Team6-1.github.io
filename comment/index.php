<title>Comment page/6-1 Developer Portal</title>
<h1 style="text-align:center">Welcome to 6-1 Developer Portal!</h1>
<p style="text-align:center">Dev : Hamac</p>
<p>&nbsp;</p>
<p>コメント欄です。</p>
<!--ここから掲示板開始!-->
<form action="s.php" method="post"><table><tr>
<th>ネーム</th><td><input type="text" name="name" size="20"></td></tr><tr>
<th>記事</th><td><textarea name="txt" rows="2" cols="20" tabindex="0"></textarea></td></tr>
</table><input type="submit" value="投稿"></form>
<br>
<?php
$log = 5; //表示するログの数初期は、5
$fp = fopen('log.html', 'r');
for($i=0; $i < $log; $i++){
$fps = fgets($fp);
print $fps;
}
?>
<!--ここから掲示板終了-->
<p>&nbsp;</p>
<p><a href="https://team6-1.github.io">ホームへ戻る</a></p>
<p>&nbsp;</p>
<h6 style="text-align:center">© HamacDev</h6>
