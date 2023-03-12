var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.user.vipInfo.level = 7

body = JSON.stringify(obj);
$done({body});
