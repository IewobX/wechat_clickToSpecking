/**
 * @auther xubowei
 * 计时器（直接触发），可通过事件触发
 */


let i = 0;
setInterval(function(){
    document.getElementsByClassName('time')[0].getElementsByTagName('span')[0].innerHTML =  i++;
},1000);
