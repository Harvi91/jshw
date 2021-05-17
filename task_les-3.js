// Задание 1! Поиск данных в массиве.
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;
// прим:
// user name: Ashton Kutcher.
// user age: 40.

// Если совпадения не произошло вывести alert с ошибкой: 
// “No results found for your request”
// // Example-----------------
// var data = [
//     {
//         firstName: 'Ashton',
//         lastName: 'Kutcher',
//         age: 40
//     }, {
//         firstName: 'Bradley',
//         lastName: 'Pitt',
//         age: 54
//     }, {
//         firstName: 'Hannah',
//         lastName: 'Dakota',
//         age: 24
//     }
//  ];
let a=prompt("Кого ищем?");
const data= [
    {
        firstName: 'Max',
        lastName: 'Ivanov',
        age: 21
    },
    {
        firstName: 'Roma',
        lastName: 'Petrov',
        age: 36

    },
    {
        firstName: 'Petr',
        lastName: 'Sidorov',
        age: 40
    }
]
let search=null;
for (let user of data){
    if(a===user.lastName){
        search = user;
    }
}

if (search){
    alert(search.firstName + ' '+ search.lastName +' '+ search.age )
}
else{
    alert('error')
}
