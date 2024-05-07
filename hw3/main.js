
//PT1-----------------
// for(i = 0; i<=9; i++){
//     document.write(`<div>1234;</div>`)
// }
//----------------------------------
// for(i = 0; i<=9; i++){
//     document.write(`<div>[${i}]  1234;</div>`)
// }
//-----------------------------------
// let i = 0
// while(i  < 20){
//     document.write(`<h1>12345;</h1>`);
//     i++;
// }
//--------------------------------
// let i = 0
// while(i  < 20){
//     document.write(`<h1>[${i}]   12345;</h1>`);
//     i++;
// }
//--------------------------------
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//     for (let item of listOfItems){
//         document.write(`<ul>
//                         <li>${item}</li>
//                         </ul>`)
//     }
//------------------------------------
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//     for (let i=0; i < products.length; i++){
//        document.write( `<div className="product-card">
//             <h3 className="product-title"> ${products[i].title} . Price - ${products[i].price} </h3>
//             <img src="${products[i].image}" alt="" className="product-image"/>
//         </div>`)
//     }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let i = 0; i < users.length; i++) {
//     if(users[i].status === true){
//         console.log(users[i])
//     }
// }
// console.log('-----------------------------------')
//
// for (let i = 0; i < users.length; i++) {
//     if(users[i].status === false){
//         console.log(users[i])
//     }
// }
// console.log('-----------------------------------')
//
// for (let i = 0; i < users.length; i++) {
//     if(users[i].age >= 30){
//         console.log(users[i])
//     }
// }