//定义一个函数
function myF(num1, num2){
    var result = num1 * num2;
    return result;              //返回变量result
}
//变量result就是函数myF的返回值，于是,就能用变量接收函数的返回值了
var num = myF(1, 2);
alert(num);
//若是没有返回值，则不能用变量接收函数执行的结果