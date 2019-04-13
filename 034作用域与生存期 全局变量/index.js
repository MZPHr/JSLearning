//全局变量和局部变量：
//全局变量：可以在脚本的任何位置被引用的变量，在函数里也可以
//定义一个全局变量
var num = 1;
//域(或称之为块)
{
//这是一个块作用域域,用大括号括起来了
num++;          //num是全局变量，在域里可以使用
}
alert(num);     //输出2
//定义一个函数，全局变量在函数中也可使用
function myF(){
    var result = ++num;         //请使用前置++，因为后置++会造成先用num给result赋值，然后num再自增的结果
    alert(result);
}
myF();          //调用myF函数,输出3
//全局变量的生存期：贯穿整个脚本，定义的时候变量产生，脚本运行结束时变量死亡
