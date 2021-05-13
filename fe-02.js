let a = prompt("Введите любое целое число");
if (a===null || a===""){
alert("Ничего не ввели");
}
else if (isNaN(a)){
alert("Ввели не число");
}
else if( a % 2 ===0){
alert("Вы ввели четное число");
}
else if(a%2===1){
alert("Вы ввели не четное число");
}
console.log(a)