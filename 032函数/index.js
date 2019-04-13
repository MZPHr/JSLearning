//函数定义
/* function 函数名(){
    函数体(或称之为语句块)
} */
//例子,定义函数
function myF(){     //用驼峰命名法，每个词的开头大写，无需使用下划线
    alert("My first function!");
}
//调用函数
myF();      //先定义再调用
//定义带参函数
/* function 函数名(参数1, 参数2){       //参数不止有两个
    函数体
} */
//例子,定义
function myFun(num1, num2){
    var result = num1 * num2;
    alert(result);
}
//调用
myFun(1, 2);