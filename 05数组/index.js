var array = new Array(4);       //用Array对象定义数组，数组长度为4
var n_array = new Array();      //也可以不指定数组长度
array[0] = "a";             //填充数组，第一个元素为字符串a
//以下为定义数组，和填充数组的全过程
var nums = new Array(4);
nums[0] = 1;                //下标以0开始,下标为0的元素是第一个元素
nums[1] = 2;
nums[3] = 3;
nums[4] = 4;
//也可以使用其他方法定义和填充数组
//使用Array对象
var nums = new Array(1,2,3,4);
//或者
var nums = [1,2,3,4];
//在一个数组中也可以填充不同类型的数据，因为JavaScript是弱类型语言
var new_array = ["a", 1, 2, false, "HelloWorld"];
alert(new_array[4]);    //输出new_array数组的第五个元素(下标为4)的值(即字符串"HelloWorld")