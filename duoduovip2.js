var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.user.vipInfo.expiredTime =  1776307200

body = JSON.stringify(obj);
$done({body});
