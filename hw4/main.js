




//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareCount(a,b){
    let S;
    if(a>0 && b>0){
        S = a * b;
    }else{
        console.log('wrong numbers')
    }
    return S;
}
//     console.log(squareCount(2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    function squareCircleCount(r) {
        let S;
        if (r > 0) {
            S = 3.14 * r ** 2;
        } else {
            console.log('wrong radius')
        }
        return S;
    }

    //console.log(squareCircleCount(2))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    function cylinder(h, r) {
        let S;
        if(h > 0 && r > 0){
            S = squareCircleCount(r) * h;
        }else{
            console.log('wrong numbers')
        }
        console.log(S);
    }
//     cylinder(10, 2)
}

// - створити функцію яка приймає масив та виводить кожен його елемент
{
    function returnArrElem(arr) {
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    }
    let arr = [1, 2, 3, 4, 5]
    // returnArrElem(arr);
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    function writeParagrapgh(txt) {
        document.write(`<p>${txt}</p>`);
    }
    let text = 'qwertyuiokjhgfdsazxcvbnm';
    // writeParagrapgh(text);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    function createList(txt) {
        document.write(`<ul>
                        <li>${txt}</li>
                        <li>${txt}</li>
                        <li>${txt}</li>
                        </ul>`);
    }
    let text='Red fear'
    // createList(text)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    function createCountedList(txt, count) {

        document.write(`<ul>`)
        for (let i = 0; i < count; i++) {
            document.write(`<li>${txt}</li>`)
        }
        document.write(`</ul>`)
    }
    let text='Red fear';
    let num = 10;
    // createCountedList(text, num)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
{
    function createArrList(arr) {

        document.write(`<ul>`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`)
        }
        document.write(`</ul>`)
    }
    let arr = [1, 2, 3, 'a', 'b', true, 'c']
    // createArrList(arr)
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
{
    function addObj(arr){
        for (let arrElement of arr) {
            document.write(`<div>`)
            for (let arrElementKey in arrElement) {
                document.write(` ${arrElementKey}: ${arrElement[arrElementKey]}`)
            }
            document.write(`</div>`)
        }

    }
    let people = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
        { id: 4, name: 'Emma', age: 28 },
    ];
    // addObj(people);
}
// - створити функцію яка повертає найменьше число з масиву
{
    function lowestNum(arr){
        let lowArr = [arr[0]];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < lowArr){
                lowArr = [arr[i]]
            }
        }
        console.log(lowArr)
    }
    let arr = [100, 200, 5, 1000]
    // lowestNum(arr)
}
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
{
    function sum(arr){
        let suma = 0;
        for (const arrElement of arr) {
            suma += arrElement;
        }
        console.log(suma)
    }
    let arr = [200, 500, 300]
    // sum(arr);
}
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
{
    function swap(arr, index1, index2) {
        for (let i = index1; i < arr.length - 1; i++) {
            temp = arr[i]
            arr[i] = arr[index2]
            arr[index2] = temp
        }
        console.log(arr)
    }

    let arr = [1, 5, 10, 15]
    // swap(arr, 2, 3)
}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
{
    function exchange(sumUAH, currencyValues, exchangeCurrency) {
        let res;
        for (const elem of currencyValues ) {
            if(elem.currency === exchangeCurrency){
                    res = sumUAH / elem.value;
                }

        }

        console.log(res)

    }
    exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
}