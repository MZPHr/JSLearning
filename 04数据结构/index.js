//JS不需要声明类型，它是弱类型语言，反之则是强类型语言
var age = "happy";
age = 3;
//1.字符串,单个和多个字符组成,JS没有字符型，但是有字符串型
var mood = "happy";
var mood = 'happy';		//单引号或多引号都行
//若字符串内包含双引号就用多引号，若有单引号就用双引号，或者用转义符"\"进行转义
var mood = "I'm \"happy!\"";
//尽可能使用同种引号

//2.浮点数
var num1 = 1.2;
var num2 = 1.2e2;       //可以使用科学计数法来给浮点型变量赋值
var num3 = 4.2e-2;

//3.布尔值
var word = true, word2 = false;
//这是布尔值，只有两个：true和false注意，不要和字符串类型搞混
var words = "ture";     //这个不是布尔值，只是个字符串