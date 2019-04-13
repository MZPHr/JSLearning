//内建对象，如Array()对象，Object()对象，Date()对象等，由JS这个编程语言自带的对象.
//定义一个Array()对象的实例：nums
var nums = new Array(4);    //事实上我们在使用JS的对象创建实例，nums就是实例
var num = nums.length;      //使用Array()对象的属性:length属性，可以得知nums的长度（即元素个数）
alert(num);
//在使用Object()对象的时候也是如此，我们创建Object对象的事例，这个实例属于Object对象，所以能够使用Object对象提供的属性和方法

//Date对象,可以存储和检索与特定时间有关的信息
//在创建Date对象的实例时，JS解释器会使用当前时间和日期对其初始化
//例子:
var current_date = new Date();                      //创建一个Date实例叫做current_date,只有创建实例才能使用属性和方法
var today = current_date.getDay();
// 除getDay（获取星期几）之外，还有getHours()、getMonth()等方法
alert("今天是星期 " + today);                       //输出6

//宿主对象，JS语言的解释器在浏览器中，由浏览器提供的预定义对象成为宿主对象，包括Form,Image,Element等等，利用他们可以获得网页表单，图像和各种表单元素等信息,document对象：可以在网页上获取任何元素的所有信息