var nums = [
    [1, 2], 
    ["a", "b"]
];                      //这是二维数组
alert(nums[0][0]);      //输出1
alert(nums[1][0]);      //输出"a"
//用循环对二维数组进行赋值和遍历
//定义和赋值
const ROW = 3, COL = 3;         //行数为3，列数为3
var my_array = new Array();     //声明一维
var i, j;
for(i = 0; i < ROW; i++){
    my_array[i] = new Array();  //声明二维，在每一个一维数组的元素中，使用数组来填充
    for(j = 0; j < COL; j++){
        my_array[i][j] = i + "" + j;    //使用+ "" + 空字符，来让类型自动转换为字符串
    }
}
//遍历
for(i = 0; i < ROW; i++){
    for(j = 0; j < COL; j++){
        alert(my_array[i][j]);
    }
}