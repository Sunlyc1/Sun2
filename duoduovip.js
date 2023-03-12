var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.user.vipInfo.valid = true

body = JSON.stringify(obj);
$done({body});
