//传统数组,在填充数组时只给出了数组的元素的值，下标会自动变化，即给数组填充新元素时会自动增加下标数目
var nums = [1, 2, 3];
//关联数组，使用字符串作为下标
var m_array = Array();
m_array["no1"] = 1;
m_array["no2"] = 2;
m_array["no3"] = 3;
//使用Object对象创建关联数组最好,以上是用Array创建的