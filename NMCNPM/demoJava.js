// điều kiện false
/*
false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
*/

// ĐIỀU KIỆN HÀM
/*
Hàm(function) trong javascript
1. Hàm : một khối mã
    - làm 1 việc cụ thể
2. loại hàm
    - built-in
    - Tự định nghĩa
3 tính chất
4. tạo hàm
*/
// cách đặt tên hàm: a-z,A-Z,0-9,_,$
function showDialog(message){
    console.log(message);
}
function writeLog(){
    var myString = '';
    for(var param of argument){
        myString += `${param} - `
    }
    console.log(myString)
}
writeLog("hello cac ban","hello cac ban2","hello cac ban");