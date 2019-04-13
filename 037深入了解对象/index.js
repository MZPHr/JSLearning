/**
 * 对象，自包含的数据集合，包含在对象里的数据可以通过属性和方法访问（特定的变量和方法的集合）
 * 属性：隶属于某个特定对象的变量
 * 方法：在某个特定对象里才能调用的函数
 */
//在JS里可以用"."语法来访问属性和方法
//例子
var harry = new Object();           //定义一个叫harry的对象
harry.age = 10;                     //属性age的值为10(10岁)
harry.sex = "male";                 //属性sex的值为male(男性)
harry.height = 1.5;                 //属性height的值为1.5(身高一米五)
var age = harry.age;                //变量名与属性名互不冲突，若追求代码可读性可以把变量名改成harry_age或h_age
alert(age);
alert("harry今年" + harry.age + "岁了");
//对象的确可以增强代码可读性