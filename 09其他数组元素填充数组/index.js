//首先创建两个数组
var array1 = [1, 2, 3];
var array2 = ["a", "b", "c"];
//把array2的第一个元素赋值给array1的第四个元素
array1[3] = array2[0];
alert(array1[3]);       //输出array1的第三个元素，即输出"a"


/*  也可以这样
 var array2 = ["a", "b", "c"];
 var array1 = [array2[0], 2, 3];      //把arrray2的第一个元素赋值给了array1的第一个元素(下标0)的位置
 */