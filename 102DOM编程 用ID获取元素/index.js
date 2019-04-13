//欢迎使用document对象
//获取元素
/* getElementBy…… 通过……获取元素,返回对象
getElementsBy…… 通过……获取元素,返回数组 */

//1.getElementById(str_元素ID)  通过元素ID返回一个与那个给定ID属性值的元素节点对应的对象,JS区分大小写，所以请注意这里的方法不要写错了,这里str_元素ID的意思是，有一个字符串型参数是元素的ID
var word = document.getElementById("myid");        //在dom树中找到ID为"myid"的元素，返回一个对象,因为这个方法是是属于document对象的,所以需要在前边写上document.
alert(word);                                       //输出了"[object HTMLParagraphElement]",说明返回了一个html的p标签的对象
//使用typeof操作符来查看操作数的类型
alert(typeof word);                //word是typeof的操作数,查看word的类型,输出object,说明getElementById返回一个对象

//文档的每个元素都是对象
//可以在html的body标签里的script标签里内部调用js代码，这样便于测试