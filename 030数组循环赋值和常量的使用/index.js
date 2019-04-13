const N = 5;            //定义常量 N，常量一般用大写字母
var nums = new Array(N);    //数组nums的长度为5，下标为0~4
for(var i = 0; i < N; i++){
    nums[i] = i;        //将i的值赋给nums的当前下标（即下标i）
    alert("数组nums的第" + (i + 1) + "个元素为： " + nums[i]);
}