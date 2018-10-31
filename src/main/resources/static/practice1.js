// window.onload = function () {
//     var li = document.getElementsByTagName("li");
//     var server = document.getElementsByClassName("server");
//     var img = document.getElementsByTagName("img")[0];
//     li[2].onmousemove = function () {
//         server[0].style.display = "block";

//         img.src = "images/1.png";
//     }
//     li[2].onmouseout = function () {
//         server[0].style.display = "none";
//         img.src = "images/å½¢çŠ¶6.png";
//     }
//     var previous = document.getElementsByTagName("span")[1];
//     var next = document.getElementsByTagName("span")[2];
//     // alert(next);
//     // console.log(previous);


//     // console.log(typeof (bg));
//     // console.log(bg);
//     // console.log(bg.length);
//     // console.log(bg[0].firstElementChild);
//     var bg = document.getElementById("bg");

//     var current = 0;
//     var bgArr = ["url(images/1.jpeg)", "url(images/2.jpeg)", "url(images/3.jpeg)"];
//     previous.onclick = function () {
//         if (current == 0) {
//             current = bgArr.length - 1;
//         } else {
//             current--;
//         }
//         bg.style.backgroundImage = bgArr[current];

//         // alert("dd");
//     }


//     next.onclick = function () {
//         if (current == 2) {
//             current = 0;
//         } else {
//             current++;
//         }
//         bg.style.backgroundImage = bgArr[current];

//     }


//     var nav = document.getElementsByTagName("nav")[0];
//     var ul = nav.getElementsByTagName("ul")[0];
//     // alert(ul);
//     // console.log(ul);

//     var lis = ul.getElementsByTagName("li");
//     // alert(li);
//     // lis[0].onclick = function(){
//     //     alert("ddd");
//     // }

    
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].onclick = function () {
//              for (var j = 0; j < lis.length; j++) {
//                 lis[j].style.backgroundColor = "";
//             }
//             // alert("ddd");
           
//             this.style.backgroundColor = "#d80c0c";
//             // lis[i].style.backgroundColor = "#d80c0c";
           
//         }

//     }
  







//     // previous.onclick = function(){
//     //     bg.src = "images/timg (1).jpeg";
// }
// $(function(){
//    $li = $("nav>ul>li");
//    $li.eq(2).mouseenter(function(){
//        $(".server").show();
      
//    })
//    $li.eq(2).mouseleave(function(){
//        $(".server").hide();
//    })
// var a;
// // console.log(a);
// var b = a * 0;
// // console.log(b);
// console.log(1+"23"-0+100);
// if (b == b) {
// console.log(b * 2 + "2" - 0 + 4);
// } else {
// console.log(!b * 2 + "2" - 0 + 4);
// }

// var t = 1

// console.log(0/t);
// // function test(t){
// // var s = s++;//此时的t 是一个局部变量，全局变量没有任何变化
// // console.log(s);//此时的结果又是多少？
// // }
// // test(t);
// console.log(t);


// (function test(){
//     var a=b=5;
//     // var a = 5;
//     // var b = a;
//     console.log(typeof a);
//     console.log(typeof b);
//     })();
//     console.log(typeof a);
//     console.log(typeof b);

function createXHR(){
    if(typeof XMLHttpRequest!="undefined"){
        return new XMLHttpRequest()
    }else if(typeof ActiveXObject!="undefined"){
        var version = ['MSXML2.XMLHttp.6.0',
        'MSXML2.XMLHttp.3.0',
        'MSXML2.XMLHttp'];
        for(var i =0;i<version.length;i++){
            try {
                return new ActiveXObject(version[i]);
            }catch(e){

            }
        }
        
    }else {
        throw new Error('您的系统或浏览器不支持XHR对象!');
        
    }
}
var addEven = document.getElementById("click");
addEven.onclick=function(){
    var xhr=createXHR();
    xhr.open("get","http://192.168.1.7:8080/login?username=kanghl&password=123456",false);
    xhr.send(null);
    if(xhr.status==200){
        var result = xhr.responseText;
        if(result == 'ok'){
            location.href = "/index.js";
        }
    }else {
        alert("错误"+xhr.status+"错误信息"+xhr.responseText);
    }
}










// })