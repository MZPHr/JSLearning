/* //+=运算符
var x = 1;
var y = 2;
alert(x + y);       //输出3
x += y;             //等价于 x = x + y;
alert(x);           //输出3
//这个运算符也可以用于字符串的拼接
var word = "abc";
word += word;
alert(word);        //输出"abcabc"
//++运算符
var num = 0;
num++;              //在这里num++是后置++
alert(num++);       //输出1,后置++在表达式里不可用，所以alert(num++)实质上是alert(num);num++这两个语句
alert(num);         //这时num已经自增(即++)两次了，所以num是2
//前置++
var my_num = 0;
alert(++my_num);    //输出1，前置++在表达式里可用 */
//试验：++运算符是否能进行字符串拼接
var array = "abc";
array++;
alert(array);       //输出NaN(表示运算的值不是数字)，所以++运算符不能进行字符串拼接，且只有数字能进行++（自增）运算