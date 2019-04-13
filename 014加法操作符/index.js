//操作符--算术操作符--加法
var num1 = 10, num2 = 2;
var result = num1 + num2;
alert(result);              //输出12
//加法也可以用于字符串的拼接
var str1 = "Hello", str2 = "World！";
var str = str1 + str2;      //这是字符串+字符串，可以进行字符串拼接
alert(str);                 //输出"HelloWorld!"
//字符串+数字会怎么样？
str1 = "Hi";
result = str1 + num1;
alert(result);              //输出"Hi10",是一个字符串，这是因为JS是弱类型语言，字符串+数字，的数字类型会被转化成字符串类型
//数字+字符串数字会怎么样？
num1 = 1, word = "10";
result = num1 + word;
alert(result);              //输出11，字符串类型被转换成数字类型
//特例：
var num1 = 1;
var my_word = "Happy";
var result = num1 + my_word;
alert(result);              //输出"1Happy"