//首先创建一个数组和一个对象
var array = Array();
var test = {one:1, two:2, three:3};
array[0] = test;            //把对象test填充到数组array的第一个元素的位置上
alert(array[0].one);        //输出1
//以下方法也可以
/* var test = {one : 1, two : 2};
var array = [test];
alert(array[0].one) */