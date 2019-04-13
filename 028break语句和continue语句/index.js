//break语句     跳出循环
var i = 0;
while (i < 5) {
    i++;
    if (i == 3)         //如果i等于3，就跳出循环
        break;
}
alert(i);               //输出3
//要是这样写
/**
 * var i = 0;
 * while(i < 5){
 *      if(i == 3)
 *          break;
 *      i++
 * }                    在跳出循环以后i是2
 */

 //continue语句         跳过本次循环，进行下一次循环
 var i;
 for(i = 0; i < 5; i++){
    if(i == 4) continue;
    alert(i);
 }                      //输出1, 2, 3, 5没有4