var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.user.vipInfo.level = 7
obj.data.user.vipInfo.valid = true
obj.data.user.vipInfo.expiredTime =  1776307200

body = JSON.stringify(obj);
$done({body});
