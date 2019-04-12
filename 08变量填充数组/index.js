//可以在数组里存储变量
//先定义一个数组
var nums = [1, 2, 3];
//然后是一个变量
var num = 4;
//填充数组
nums[3] = num;
alert(nums[3]);     //这是输出的是变量num的值，因为nums数组的第四个元素是变量num
/**
 * 也可以这样
 * var word = "c";
 * var words = ["a", "b", word];    这里把变量word填充到words数组的第三个元素
 * alert(words[2]);         输出“c”
 */