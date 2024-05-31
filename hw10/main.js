//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// {
//     let form = document.createElement('form')
//
//
//     // `
//     let inputName = document.createElement('input')
//     let inputSurname = document.createElement('input')
//     let inputAge = document.createElement('input')
//     let btn = document.createElement('button')
//     btn.innerText = 'Submit'
//
//     form.appendChild(inputName);
//     form.appendChild(inputSurname);
//     form.appendChild(inputAge);
//     form.appendChild(btn);
//     document.body.appendChild(form);
//     let div = document.createElement('div')
//
//
//     btn.onclick = function (ev){
//         ev.preventDefault()
//         let h1 = document.createElement('h1')
//         let h2 = document.createElement('h1')
//         let h3 = document.createElement('h1')
//         h1.innerText = inputName.value
//         h2.innerText = inputSurname.value
//         h3.innerText = inputAge.value
//         div.appendChild(h1)
//         div.appendChild(h2)
//         div.appendChild(h3)
//         document.body.appendChild(div)
//     }
//
// }
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

// {
//     let div = document.createElement('div')
//     let count = localStorage.getItem('counter')
//
//     if(!count){
//         count = 0
//     }else{
//         count = parseInt(count)
//     }
//     count+=1;
//
//     localStorage.setItem('counter', count)
//     div.innerText = count
//     document.body.appendChild(div)
// }


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// {
//
//     let currentDate = new Date()
//     // console.log(currentDate)
//     let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     sessions.push(currentDate)
//     // console.log(sessions)
//     localStorage.setItem('sessions', JSON.stringify(sessions))
//     //------------------
//
// }



// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// {
//    dataArray = [
//        {"id": 1, "name": "QkP8s", "age": 36},
//        {"id": 2, "name": "V7sKj", "age": 22},
//        {"id": 3, "name": "HxNp3", "age": 45},
//        {"id": 4, "name": "j8TrG", "age": 29},
//        {"id": 5, "name": "zXn1F", "age": 53},
//        {"id": 6, "name": "L3sFk", "age": 61},
//        {"id": 7, "name": "R5j6Z", "age": 24},
//        {"id": 8, "name": "P8tWc", "age": 37},
//        {"id": 9, "name": "T2hRm", "age": 44},
//        {"id": 10, "name": "J9vBn", "age": 26},
//        {"id": 11, "name": "X4yLs", "age": 32},
//        {"id": 12, "name": "D6vZk", "age": 41},
//        {"id": 13, "name": "M3bGp", "age": 55},
//        {"id": 14, "name": "A7nVq", "age": 30},
//        {"id": 15, "name": "F9rJy", "age": 49},
//        {"id": 16, "name": "S6xKl", "age": 52},
//        {"id": 17, "name": "W2mVt", "age": 27},
//        {"id": 18, "name": "Y8pQs", "age": 33},
//        {"id": 19, "name": "N5zXw", "age": 60},
//        {"id": 20, "name": "B4jKr", "age": 31},
//        {"id": 21, "name": "G7xTm", "age": 46},
//        {"id": 22, "name": "C9yHl", "age": 28},
//        {"id": 23, "name": "E5rPk", "age": 54},
//        {"id": 24, "name": "H8vWn", "age": 35},
//        {"id": 25, "name": "Z3tLm", "age": 47},
//        {"id": 26, "name": "U7xQp", "age": 42},
//        {"id": 27, "name": "O2bJr", "age": 23},
//        {"id": 28, "name": "K6yXv", "age": 39},
//        {"id": 29, "name": "I9mKs", "age": 50},
//        {"id": 30, "name": "L5nGw", "age": 57},
//        {"id": 31, "name": "Q8zPr", "age": 38},
//        {"id": 32, "name": "J2xNv", "age": 48},
//        {"id": 33, "name": "R7yKt", "age": 25},
//        {"id": 34, "name": "P4vHl", "age": 43},
//        {"id": 35, "name": "T1sWm", "age": 58},
//        {"id": 36, "name": "X3kVt", "age": 40},
//        {"id": 37, "name": "D6nRp", "age": 34},
//        {"id": 38, "name": "M9yJr", "age": 59},
//        {"id": 39, "name": "A5xKw", "age": 21},
//        {"id": 40, "name": "F2mTp", "age": 47},
//        {"id": 41, "name": "S8vNr", "age": 36},
//        {"id": 42, "name": "W4kQs", "age": 31},
//        {"id": 43, "name": "Y7nKv", "age": 22},
//        {"id": 44, "name": "N3xJt", "age": 41},
//        {"id": 45, "name": "B6yWl", "age": 27},
//        {"id": 46, "name": "G9rXk", "age": 54},
//        {"id": 47, "name": "C2mVn", "age": 33},
//        {"id": 48, "name": "E5tLp", "age": 30},
//        {"id": 49, "name": "H8vRr", "age": 39},
//        {"id": 50, "name": "Z1sKm", "age": 58},
//        {"id": 51, "name": "U4xTt", "age": 29},
//        {"id": 52, "name": "O7yQs", "age": 38},
//        {"id": 53, "name": "K9vJr", "age": 56},
//        {"id": 54, "name": "I6mKl", "age": 25},
//        {"id": 55, "name": "L3tWm", "age": 40},
//        {"id": 56, "name": "Q5nVp", "age": 21},
//        {"id": 57, "name": "J8xHr", "age": 46},
//        {"id": 58, "name": "R2kQs", "age": 34},
//        {"id": 59, "name": "P7yXv", "age": 41},
//        {"id": 60, "name": "T4mJt", "age": 52},
//        {"id": 61, "name": "X1vKl", "age": 30},
//        {"id": 62, "name": "D9rWk", "age": 37},
//        {"id": 63, "name": "M2sNr", "age": 49},
//        {"id": 64, "name": "A5tVp", "age": 28},
//        {"id": 65, "name": "F8yQs", "age": 35},
//        {"id": 66, "name": "S6kJr", "age": 44},
//        {"id": 67, "name": "W3vKm", "age": 31},
//        {"id": 68, "name": "Y9nTr", "age": 53},
//        {"id": 69, "name": "N4mLp", "age": 21},
//        {"id": 70, "name": "B7xWs", "age": 32},
//        {"id": 71, "name": "G5vRr", "age": 43},
//        {"id": 72, "name": "C8kVt", "age": 27},
//        {"id": 73, "name": "E1nQm", "age": 50},
//        {"id": 74, "name": "H3yJs", "age": 28},
//        {"id": 75, "name": "Z6rKr", "age": 33},
//        {"id": 76, "name": "U9mLp", "age": 48},
//        {"id": 77, "name": "O4vTt", "age": 45},
//        {"id": 78, "name": "K1xQs", "age": 26},
//        {"id": 79, "name": "I7nHr", "age": 29},
//        {"id": 80, "name": "L2mXv", "age": 40},
//        {"id": 81, "name": "Q8tJt", "age": 55},
//        {"id": 82, "name": "J5vKl", "age": 22},
//        {"id": 83, "name": "R3yWk", "age": 41},
//        {"id": 84, "name": "P6sNr", "age": 60},
//        {"id": 85, "name": "T9mVp", "age": 34},
//        {"id": 86, "name": "X4tQs", "age": 53},
//        {"id": 87, "name": "D1vJr", "age": 23},
//        {"id": 88, "name": "M7kKm", "age": 35},
//        {"id": 89, "name": "A2nTr", "age": 52},
//        {"id": 90, "name": "F5xLp", "age": 24},
//        {"id": 91, "name": "S8yVs", "age": 37},
//        {"id": 92, "name": "W3rKr", "age": 46},
//        {"id": 93, "name": "Y1mLp", "age": 30},
//        {"id": 94, "name": "N6tXv", "age": 39},
//        {"id": 95, "name": "B9vTt", "age": 44},
//        {"id": 96, "name": "G4kQs", "age": 25},
//        {"id": 97, "name": "C7nHr", "age": 50},
//        {"id": 98, "name": "E2yJs", "age": 31},
//        {"id": 99, "name": "H5rKr", "age": 38},
//        {"id": 100, "name": "Z8mLp", "age": 42}
//
//    ]
//     let currentPage = 1;
//     const itemsPerPage = 10;
//
//     // Функція для відображення елементів на поточній сторінці
//     function showPage(arr, page) {
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         const itemsToShow = arr.slice(start, end);
//
//         const displayDiv = document.getElementById('display');
//         displayDiv.innerHTML = '';
//
//         itemsToShow.forEach(item => {
//             let div = document.createElement('div');
//             div.classList.add('item');
//             div.innerText = `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`;
//             displayDiv.appendChild(div);
//         });
//     }
//
//     // Функція для обробки натискання кнопки Prev
//     function showPrev() {
//         if (currentPage > 1) {
//             currentPage--;
//             showPage(dataArray, currentPage);
//         }
//     }
//
//     // Функція для обробки натискання кнопки Next
//     function showNext() {
//         if (currentPage < Math.ceil(dataArray.length / itemsPerPage)) {
//             currentPage++;
//             showPage(dataArray, currentPage);
//         }
//     }
//
//     // Створення форми та кнопок
//     let form = document.createElement('form');
//     let btnPrev = document.createElement('button');
//     btnPrev.type = 'button';
//     btnPrev.innerText = 'Prev';
//     btnPrev.onclick = showPrev;
//
//     let btnNext = document.createElement('button');
//     btnNext.type = 'button';
//     btnNext.innerText = 'Next';
//     btnNext.onclick = showNext;
//
//     // Додавання кнопок до форми
//     form.appendChild(btnPrev);
//     form.appendChild(btnNext);
//     document.body.appendChild(form);
//
//     // Додавання контейнера для відображення елементів
//     let displayDiv = document.createElement('div');
//     displayDiv.id = 'display';
//     document.body.appendChild(displayDiv);
//
//     // Виклик функції для відображення першої сторінки
//     showPage(dataArray, currentPage);
// }




//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент
// з id="text".

// {
//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     let btn = document.createElement('button')
//     btn.innerText = 'button'
//     p.id = 'text'
//     p.innerText = '0438530495'
//     div.appendChild(btn)
//     div.appendChild(p)
//     document.body.appendChild(div)
//
//     btn.onclick = function (){
//         let elementRemove = document.getElementById('text')
//         elementRemove.remove()
//     }
//
// }




// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18,
// та повідомити про це користувача
//
// {
//     let inp = document.createElement('input')
//     let btn = document.createElement('button')
//     let div = document.createElement('div')
//     btn.innerText = 'btn'
//     div.appendChild(inp)
//     div.appendChild(btn)
//     document.body.appendChild(div)
//     btn.onclick = function (){
//         let info = inp.value
//         if (info < 18){
//             alert('тікай з сайту')
//         }else{
//             alert('всьо ок')
//         }
//     }
// }


