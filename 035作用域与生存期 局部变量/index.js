//局部变量：只存在于定义它的函数（或域）内部。若一个域的内部调用了一个全局变量的名字，JS会认为那是在调用全局变量
//定义一个局部变量
{
    var x = 1;
}
alert(x);           //在JS中可以跨块作用域访问变量
//定义一个函数作用域
function myF(){
    var num = 0;
}
myF();
alert(num);         //没有输出任何东西，证明JS不可以跨函数作用域访问到变量，变量num为局部变量
//var 关键字的好处：
//var关键字可以限制变量的作用域，若是在函数里使用var定义变量，那么这个变量就是局部变量。在函数作用域外定义，那么就是全局变量
//定义变量一定要使用var关键字
//局部变量的生存期：随变量定义而生，只活在定义变量的函数作用域中