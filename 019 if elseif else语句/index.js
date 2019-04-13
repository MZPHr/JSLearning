/* if(条件1){       若满足条件一则执行语句块1，执行完毕后跳出if elseif else语句。若不满足，则开始判断是否满足条件2
    语句块1
}else if(条件2){    若满足条件2，执行语句块2，执行完毕后跳出if elseif else语句。若不满足，则开始执行语句块3
    语句块2
}else{
    语句块3
}  */
//例子
var num = 5;
if(num == 0){
    alert("num == 0");
}else if(num == 1){
    alert("num == 1");
}else if(num == 2){
    alert("num == 2");
}else if(num == 3){
    alert("num == 3");
}else if(num == 4){
    alert("num == 4");
}else{
    alert("num == " + num);
}
//最后输出"num == 5"