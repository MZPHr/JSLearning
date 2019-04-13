//用循环遍历数组元素
var nums = [1, 2, 3, 4];
for(var i = 0; i < nums.length; i++){       //length属性：获取nums的元素个数（即长度）
    alert(nums[i]);                          //数组下标从0开始，所以循环初值刚好合适
}

//使用break
var my_array = [1, 2, 3, "Don't watch me!"];
for(var i = 0; i < my_array.length; i++){
    if(my_array[i] == "Don't watch me!") break;         //如果当前下标的元素是"Don't watch me!"就跳出循环
    //第9行等价于if(i == 3),但是使用字符串"Don't watch me!"来判断,更为灵活
    alert(my_array[i]);
}

//使用continue
var words = ["a", "b", "c", "Don't watch me!", "d"];
for(var i = 0; i < words.length; i++){
    if(words[i] == "Don't watch me!") continue;         //不要输出"Don't watch me!"，但是要输出"d"，只需要跳过输出"Don't watch me!"所在的那次循环就行了
    alert(words[i]);
}