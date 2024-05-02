//Pt1
{
    let arr = ['a', 'b', 'c', 1, 2, 3, 4, true, false, 10];
    console.log(arr[0], arr[1], arr[2], arr[3],arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
}
//--------------------------------------------
{
    let book1 = {
        title : 'What to do',
        pageCount : 448,
        genre : 'Philosophical fiction'
    }
    let book2 = {
        title : 'Metamorphosis',
        pageCount : 127,
        genre : 'Fiction'
    }
    let book3 = {
        title : 'Great Gatsby',
        pageCount : 150,
        genre : 'Tragedy'
    }
    console.log(book1, book2, book3)
}
//-----------------------------------------
{
    let book1 = {
        title : 'What to do',
        pageCount : 448,
        genre : 'Philosophical fiction',
        author : [
            {
            name:'Chernyshevsky',
            age:63
            }
        ]

    }
    let book2 = {
        title : 'Metamorphosis',
        pageCount : 127,
        genre : 'Fiction',
        author : [
            {
                name:'Kafka',
                age:47
            }
        ]
    }
    let book3 = {
        title : 'Great Gatsby',
        pageCount : 150,
        genre : 'Tragedy',
        author : [
            {
                name:'Fitzgerald',
                age:34
            }
        ]
    }
    console.log(book1, book2, book3)
}
//-----------------------------------------------
{
    let users = [
        {
            name: 'Danya',
            username: 'Denchik',
            password: 'qwerty'
        },
        {
            name: 'Olya',
            username: 'Alyo',
            password: 'ytrewq'
        },
        {
            name: 'Anna',
            username: 'NaNa',
            password: 'uiop'
        },
        {
            name: 'Taras',
            username: 'Bogdanovich',
            password: 'poiu'
        },
        {
            name: 'Yura',
            username: 'Jora',
            password: 'asdf'
        },
        {
            name: 'Nazar',
            username: 'Nazik',
            password: 'fdsa'
        },
        {
            name: 'Maxim',
            username: 'Max',
            password: 'ghjk'
        },
        {
            name: 'Petro',
            username: 'Petya',
            password: 'kjhg'
        },
        {
            name: 'Ivan',
            username: 'Vasya',
            password: 'zxcv'
        },
        {
            name: 'Vasil',
            username: 'Vasya1',
            password: 'vcxz'
        }

    ]
    console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password)
    console.log(users[5].password, users[6].password, users[7].password, users[8].password, users[9].password)
}
//--------------------------------------------
{
    let weatherReports = [
        {
            id:1,
            Monday: {
                temperature: [
                    {
                        mornTemp: 10,
                        dayTemp: 18,
                        evenTemp: 15
                    }
                ]
            }
        },
        {
            id:2,
            Tuesday: {
                temperature: [
                    {
                        mornTemp: 13,
                        dayTemp: 21,
                        evenTemp: 10
                    }
                ]
            }

        },
        {
            id:3,
            Wednesday: {
                temperature: [
                    {
                        mornTemp: 15,
                        dayTemp: 30,
                        evenTemp: 24
                    }
                ]
            }

        },
        {
            id:4,
            Thursday: {
                temperature: [
                    {
                        mornTemp: 11,
                        dayTemp: 18,
                        evenTemp: 15
                    }
                ]
            }

        },

        {
            id:5,
            Friday: {
                temperature: [
                    {
                        mornTemp: 10,
                        dayTemp: 28,
                        evenTemp: 19
                    }
                ]
            }
        },
        {
            id:6,
            Saturday: {
                temperature: [
                    {
                        mornTemp: 13,
                        dayTemp: 17,
                        evenTemp: 10
                    }
                ]
            }
        },
        {
            id:7,
            Sunday: {
                temperature: [{
                        mornTemp: 9,
                        dayTemp: 15,
                        evenTemp: 7
                }
                ]
            }
        }
    ]
    console.log(weatherReports)
}
//Pt2------------------------------------------------------------------
{
    let a = 1;
    let x= a;
    if( x !== 0){
        console.log('Вірно');
    }else
    {
        console.log('Невірно');
    }
    a = 0;
    x = a;
    if( x !== 0){
        console.log('Вірно');
    }else
    {
        console.log('Невірно');
    }
    a = -3;
    x = a;
    if( x !== 0){
        console.log('Вірно');
    }else
    {
        console.log('Невірно');
    }
}
//-----------------------------------------------------------------------------
{
    let time = 15;
    if(time < 16){
        console.log('Перша четверть години')
    }else{
        if (time < 31){
            console.log('Друга четверть години')
        }else{
            if (time < 46){
                console.log('Третя четверть години')
            }else{
                if (time <= 60){
                    console.log('Четверта четверть години')
                }else{
                    console.log('В годині лише 60 хвилин')
                }
            }
        }
    }
}
//-----------------------------------------------------------------------------------
{
    let day = 20;
    if(day < 10){
        console.log('First decade')
    }else{
        if (day < 20){
            console.log('Second decade')
        }else{
            if (day <= 31){
                console.log('Third decade')
            }else{
                console.log('В місяці лише 31 день')
            }
        }

    }
}
//------------------------------------------------------------------------------------

// {
//     let day = prompt('Введіть номер дня')
//     switch (day){
//         case '1' :{
//             console.log('Monday')
//             break;
//         }
//         case '2' :{
//             console.log('Tuesday')
//             break;
//         }
//         case '3':{
//             console.log('Wednesday')
//             break;
//         }
//         case '4' :{
//             console.log('Thursday')
//             break;
//         }
//         case '5' :{
//             console.log('Friday')
//             break;
//         }
//         case '6' :{
//             console.log('Saturday')
//             break;
//         }
//         case '7' :{
//             console.log('Sunday')
//             break;
//         }
//         default:
//             console.log('Wrong number')
//     }
// }
//---------------------------------

// {
//     let x = prompt('enter first number')
//     let y = prompt('enter second number')
//
//     if (x > y) {
//         console.log(`bigger number is \`${x}\` `)
//     } else {
//         if (x === y) {
//             console.log('number are equal')
//         } else {
//             if (x < y) {
//                 console.log(`bigger number is \`${y}\` `)
//             }
//         }
//     }
// }

//-------------------------------------------------

{
    let x = '';
    if (x === false || x === '0' || x=== null || x ==='' || x === undefined ){
        x = 'default';
        console.log(x);
    }else{
        console.log('good')
    }

}

//------------------------------------------------

{
    let coursesAndDurationArray = [
        {name: 'JavaScript Complex', monthDuration: 5},
        {name: 'Java Complex', monthDuration: 6},
        {name: 'Python Complex', monthDuration: 6},
        {name: 'QA Complex', monthDuration: 4},
        {name: 'FullStack', monthDuration: 7},
        {name: 'Frontend', monthDuration: 4}
    ];

    if(coursesAndDurationArray[0].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[0].name}\`  Super`)
    }
    if(coursesAndDurationArray[1].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[1].name}\`  Super`)
    }
    if(coursesAndDurationArray[2].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[2].name}\`  Super`)
    }
    if(coursesAndDurationArray[3].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[3].name}\`  Super`)
    }
    if(coursesAndDurationArray[4].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[4].name}\`  Super`)
    }
    if(coursesAndDurationArray[5].monthDuration > 5){
        console.log(`\`${coursesAndDurationArray[5].name}\`  Super`)
    }

}