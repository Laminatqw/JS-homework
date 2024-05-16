



// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker










//- Знайти та вивести довижину настипних стрінгових значень
let t1 = 'hello world'
let t2 = 'lorem ipsum'
let t3 = 'javascript is cool'
console.log(t1.length, t2.length, t3.length)

// - Перевести до великого регістру наступні стрінгові значення
console.log(t1.toUpperCase(), t2.toUpperCase(), t3 .toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let tb1 = 'HELLO WORLD'
let tb2 = 'LOREM IPSUM'
let tb3 = 'JAVASCRIPT IS COOL'
console.log(tb1.toLowerCase(), tb2.toLowerCase(), tb3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let dirtyString = ' dirty string   '
    let rep = dirtyString.replace(' ', '')
    let rek = rep.split(' ', 2)
    let res = rek.join(' ')
    console.log(res);
}

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
{
    function toArr(txt){
        let splitedText = txt.split(' ')
        console.log(splitedText)
    }
    let str = 'Ревуть воли як ясла повні'
    let arr = toArr(str);
}


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr = [10,8,-7,55,987,-1011,0,1050,0]
    console.log(arr.map(tostr = (array) => array.toString()));
}
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];

    function sortNums(arr, dir){
        arr.sort((a, b) => {
            if(dir === 'ascending'){
                return a - b;
            }else if (dir === 'descending'){
                return b - a;
            }else{
                console.log('wrong direction')
            }

        })
        console.log(arr)
    }


sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
}));
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
}));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
    let newType = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
    return newType
}));
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)

{
    let suits = ['spade', 'diamond', 'heart', 'clubs']
    let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    let deck = []

    let getColor = (suit) => {
        if (suit === 'diamond' || suit === 'heart') {
            return 'red'
        } else {
            return 'black'
        }
    }

    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({
                cardSuit: suit,
                values: value,
                color: getColor(suit)
            })
        })
    })
    console.log(deck)

    // - знайти піковий туз

    console.log(deck.find((value) => value.cardSuit === 'spade' && value.values === 'ace'));
    //  - всі шістки
    console.log(deck.filter(value => value.values === 6))
    //  - всі червоні карти
    console.log(deck.filter(value => value.color === 'red'))
    //  - всі буби
    console.log(deck.filter(value => value.cardSuit === 'diamond'))
    //  - всі трефи від 9 та більше
    console.log(deck.filter(value => value.cardSuit === 'clubs' && value.values >= '9'))


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
    console.log(deck)
    deckPack = deck.reduce((cont, card) => {
        if(card.cardSuit === 'spade'){
            cont.spades.push(card)
        }else{if(card.cardSuit === 'diamond'){
            cont.diamonds.push(card)
        }else{
            if(card.cardSuit === 'heart'){
                cont.hearts.push(card)
            }else{
                if(card.cardSuit === 'clubs'){
                    cont.clubs.push(card)
                }
            }
        }}
        return cont;
    }, { spades: [], diamonds: [], hearts: [], clubs: [] });

    console.log(deckPack);




}
// =========================
//
