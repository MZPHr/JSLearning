var m_array = Array();
var i;
for (i = 0; i < 4; i++) {
    m_array["no" + i] = i;
}
alert(m_array["no3"]);      //m_array["no3"]是当i==3时也就是m_array的第四个元素，弹窗会显示3