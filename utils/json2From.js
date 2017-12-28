/**
 * post 请求form数据转换
 * @author zct
 */
function json2Form(json) {
    var str = [];
    for(var p in json){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
}  
module.exports = {  
  json2Form:json2Form,
}