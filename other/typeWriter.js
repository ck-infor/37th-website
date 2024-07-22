//接受三個參數，文字、位置(id)、間隔(毫秒)
function typeWriter(text, targetArea, milisecond) {
    var paragraph = document.getElementById(targetArea);
    var context = String(text);
    var index = 0;
    var type = function() {
        if(context.length > index) {
            var myText = "";
            for(var i = 0; i <= index; i++) {
                myText = myText + context.charAt(i);
            }
            if(index != context.length - 1) {
                myText = myText + "|";
            }
            index += 1;
            paragraph.innerHTML = myText;
        }
        else if(context.length == index) {
            var times = 1;
            var lastAppear = setInterval(() => {
                if(times % 2 == 0) {
                    paragraph.innerHTML = context;
                }
                else {
                    paragraph.innerHTML = context + "|";
                }
                times += 1;
            }, 500);
            var timer = setInterval(() => {
                clearInterval(timer);
                clearInterval(lastAppear);
                paragraph.innerHTML = context;
            }, 5000);
            index += 1;
        }
        else {
            clearInterval(myInterval);
        }
    }
    var myInterval = setInterval(type, Number(milisecond));
}