/*对象*/
//声明和赋值
var nums = Object();
nums.one = 1;       //用‘.’符号赋值,one是属性名，1是one的属性值
nums.two = 2;
nums.three = 3;
//用'.'号获取属性
alert(nums.two);        //会输出2
//也可以用另一种方法进行声明和赋值
var nums = {one : 1, two : 2, three : 3};
//属性名和变量名的命名标准相似，使用下划线命名，