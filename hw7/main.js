//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'));
users.push(new User(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891'));
users.push(new User(3, 'Jim', 'Beam', 'jim.beam@example.com', '123-456-7892'));
users.push(new User(4, 'Jack', 'Daniels', 'jack.daniels@example.com', '123-456-7893'));
users.push(new User(5, 'Johnny', 'Walker', 'johnny.walker@example.com', '123-456-7894'));
users.push(new User(6, 'James', 'Bond', 'james.bond@example.com', '123-456-7895'));
users.push(new User(7, 'Jason', 'Bourne', 'jason.bourne@example.com', '123-456-7896'));
users.push(new User(8, 'Lara', 'Croft', 'lara.croft@example.com', '123-456-7897'));
users.push(new User(9, 'Bruce', 'Wayne', 'bruce.wayne@example.com', '123-456-7898'));
users.push(new User(10, 'Clark', 'Kent', 'clark.kent@example.com', '123-456-7899'));

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(users.sort((a, b) => {
    return b.id - a.id
}));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let clients = [];


clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2', '123', '321', '541']));
clients.push(new Client(2, 'Jane', 'Doe', 'jane.doe@example.com', '123-456-7891', ['item3', 'item4']));
clients.push(new Client(3, 'Jim', 'Beam', 'jim.beam@example.com', '123-456-7892', ['item5', 'item6']));
clients.push(new Client(4, 'Jack', 'Daniels', 'jack.daniels@example.com', '123-456-7893', ['item7', 'item8', '431', '312']));
clients.push(new Client(5, 'Johnny', 'Walker', 'johnny.walker@example.com', '123-456-7894', ['item9', 'item10']));
clients.push(new Client(6, 'James', 'Bond', 'james.bond@example.com', '123-456-7895', ['item11', 'item12', '431', '312']));
clients.push(new Client(7, 'Jason', 'Bourne', 'jason.bourne@example.com', '123-456-7896', ['item13', 'item14']));
clients.push(new Client(8, 'Lara', 'Croft', 'lara.croft@example.com', '123-456-7897', ['item15', 'item16', '431', '312','431', '312']));
clients.push(new Client(9, 'Bruce', 'Wayne', 'bruce.wayne@example.com', '123-456-7898', ['item17', 'item18']));
clients.push(new Client(10, 'Clark', 'Kent', 'clark.kent@example.com', '123-456-7899', ['item19', 'item20']));


console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => {
    return a.order.length - b.order.length
}));

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//     і додає його в поточний об'єкт car

{
    function Car(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;

        this.drive = function () {
            return console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)
        }
        this.info = function () {
            console.log(`model - ${model}`)
            console.log(`producer - ${producer}`)
            console.log(`year - ${year}`)
            console.log(`maxSpeed - ${maxSpeed}`)
            console.log(`engineVolume - ${engineVolume}`)
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = maxSpeed + newSpeed
        }
        this.changeYear = function (newYear) {
            this.year = newYear
        }
        this.addDriver = function (newDriver) {
            this.newdriver = newDriver

        }
    }

    let car1 = new Car('ZIS-12', 'ZIS', 1936, 80, 8)
    // car1.drive()
    // car1.info()
    // car1.increaseMaxSpeed(12);
    // car1.changeYear(1938);
    // car1.addDriver({name: 'Vasil', age: 38})
    // console.log(car1);
}
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
{
    class Car {
        constructor(model, producer, year, maxSpeed, engineVolume) {
            this.model = model;
            this.producer = producer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
        }

        drive() {
            return console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
        }

        info() {
            for (let carKey in this) {
                let carDetail = ''
                carDetail = carKey.toString()
                console.log(`${carDetail} - ${carKey}`)
            }
        }
        increaseMaxSpeed(newValue){
            this.maxSpeed += newValue
        }
        changeYear(newYear){
            this.year = newYear
        }
        addDriver(newDriver){
            this.newDriver = newDriver
        }

    }

    let car1 = new Car('ZIS-12', 'ZIS', 1936, 80, 8)
    // car1.drive()
    // car1.info()
    // car1.increaseMaxSpeed(12);
    // car1.changeYear(1938);
    // car1.addDriver({name: 'Vasil', age: 38})
    // console.log(car1);

}
//
//

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

{
    class Cinderella{
        constructor(name, age, legSize) {
            this.name = name;
            this.age = age;
            this.legSize = legSize;
        }
        tryShoe(prince){
           if (this.legSize === prince.shooe){
               console.log(`Справжня попелющка це ${this.name}`)
           }
        }
    }
    let Cinderellas = []
    Cinderellas.push(new Cinderella('Cinderella1', 18, 36))
    Cinderellas.push(new Cinderella('Cinderella2', 17, 37))
    Cinderellas.push(new Cinderella('Cinderella3', 16, 36))
    Cinderellas.push(new Cinderella('Cinderella4', 28, 38))
    Cinderellas.push(new Cinderella('Cinderella5', 27, 39))
    Cinderellas.push(new Cinderella('Cinderella6', 26, 40))
    Cinderellas.push(new Cinderella('Cinderella7', 25, 38))
    Cinderellas.push(new Cinderella('Cinderella8', 24, 37))
    Cinderellas.push(new Cinderella('Cinderella9', 23, 42))
    Cinderellas.push(new Cinderella('Cinderella10', 22, 36))

    let prince = {name:'Prince', age:96, shooe: 39}
    for (const Cindy of Cinderellas) {
        Cindy.tryShoe(prince)
    }


}

//
//
//
// Через Array.prototype. створити власний foreach
{
    arr = [1, 2, 3, 4, 5, 6, 7]
    Array.prototype.freach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    }

    arr.freach(function (elem, index, arr) {
        console.log('elem ' + elem + ' on index ' + index + ' in array ' + arr)
    })
}


