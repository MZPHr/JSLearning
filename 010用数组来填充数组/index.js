//创建两个数组
var nums = [1, 2, 3];
var words = ["a", "b", "c"];
//把words数组填充到nums数组的第四个元素的位置
nums[3] = words;
alert(nums[3][0]);     //输出为"a",因为nums数组的第四个元素是words数组，所以nums[3]等价于words,于是nums[3][0]等价于words[0]

/**
 * 也可以这样
 * var words = ["a", "b", "c"];
 * var nums = [1, 2, 3, words];
 */