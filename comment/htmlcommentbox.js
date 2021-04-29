<!-- customize labels of htmlcommentbox.com -->
<script>
// This code goes ABOVE the main HTML Comment Box code!
// replace the text in the single quotes below to customize labels.
hcb_user = {
    comments_header : 'コメント',
    name_label : '名前',
    content_label: 'ここにコメントを入力',
    submit : 'コメントする',
    logout_link : '',
    admin_link : '',
    no_comments_msg: '',
    add:'コメントを追加する',
    again:'さらにコメントを入力する',
    rss:'',
    said:'さんのコメント',
    prev_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'Showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'名無し',
    mod_label:'(管理人)',
    subscribe:'email me replies',
    are_you_sure:'Do you want to flag this comment as inappropriate?',
  
    reply:'<img src="//www.htmlcommentbox.com/static/images/reply.png"/> 返信',
    flag:'',
    like:'<img src="//www.htmlcommentbox.com/static/images/like.png"/> いいね',
  
    //dates
    days_ago:'日前',
    hours_ago:'時間前',
    minutes_ago:'分前',
    within_the_last_minute:'数秒前',
  
    msg_thankyou:'コメントありがとうございます',
    msg_approval:'認証を待っています。認証が降り次第、反映されます。',
    msg_approval_required:'コメントありがとうございます',
  
    err_bad_html:'Your comment contained bad html.',
    err_bad_email:'Please enter a valid email address.',
    err_too_frequent:'You must wait a few seconds between posting comments.',
    err_comment_empty:'Your comment was not posted because it was empty!',
    err_denied:'Your comment was not accepted.',
  
    //SETTINGS
    MAX_CHARS: 8192,
    PAGE:'', // ID of the webpage to show comments for. defaults to the webpage the user is currently visiting.
    RELATIVE_DATES:true // show dates in the form "X hours ago." etc.
};
</script>
<!- done customizing labels of htmlcommentbox.com -->
ちなみに私は上記のようにhtmlcommentbox.jsを設定し、コメントボックスのJacaScriptの手前で読み込んでいます。
こんな感じ↓


<!-- 日本語化したJSを読み込む -->
<script type="text/javascript" src="/js/htmlcommentbox.js"></script>

<!-- begin wwww.htmlcommentbox.com -->
<div id="HCB_comment_box">コメントを読み込んでいます...</div>
<link rel="stylesheet" type="text/css" href="/css/twitter-bootstrap.css" />
<script type="text/javascript" id="hcb">

</script>
<!-- end www.htmlcommentbox.com -->
