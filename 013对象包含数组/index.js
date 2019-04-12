//创建一个对象和一个数组
var array = ["a", "b"];         //定义要分先后顺序，在这一行声明了array数组，在下一行内才能调用array数组。——先声明再调用
var test = {one : 1, two : 2, three : array};
alert(test.three[1]);
//或者使用以下方法
/* var test = {one : 1, two : 2};
var array = ["a", "b"];
test.three = array;
alert(test.three[1]); */