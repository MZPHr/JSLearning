//乘法
var x = 2;
var y = x * x;  //x 乘 x的到的值（即4）赋值给y
y *= y;         //y乘y得到的值赋值给了y
alert(y);       //输出16
//除法
alert(y / 2);   //输出y除以2的值,输出8,没有对y进行任何的赋值操作，只是把y除以2的值输出了而已，y本身没有变化，只是被调用了
y /= 2;         //y自除2
alert(y);       //输出8,
//%求余（亦称取模）
var num = 2;
alert(num % 2);     //2除2，商1余0，所以输出0
num %= 2;           //等价于num = num % 2;
alert(num)          //输出0
//** 幂
var my_num = 2;
alert(my_num ** 2);     //输出4