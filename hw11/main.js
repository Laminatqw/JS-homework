//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


// {
//     fetch('https://dummyjson.com/carts')
//         .then(res => res.json())
//         .then(res => {
//             let {carts} = res;
//
//             for (const {id, products, total, discountedTotal, totalQuantity, userId, totalProducts} of carts) {
//                 let div = document.createElement('div')
//                 let productsInfo = products.map(product => `(${product.title}: ${product.price})`).join(', ');
//                 div.style.margin = '20px'
//
//                 div.innerText = `${id}, ${productsInfo}, ${total}, ${discountedTotal}, ${totalQuantity}, ${totalProducts}, ${userId}`
//                 document.body.appendChild(div)
//                 }
//
//
//
//         });
//
// }





// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
// {
//     fetch('https://dummyjson.com/recipes')
//         .then(res => res.json())
//         .then(res => {
//             let {recipes} = res;
//             for (const {id, name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, tags}  of recipes) {
//                 let div = document.createElement('div')
//                 let caption = document.createElement('div')
//                 caption.innerHTML = `ID : ${id},<br> Name : ${name}, <br><br> Ingredients:`
//
//                 div.appendChild(caption)
//                 let ingradientDiv =  document.createElement('div')
//                 let ingradientList = document.createElement('ul')
//                 for (const ingredient of ingredients) {
//                     let li = document.createElement('li')
//                     li.innerText = ingredient;
//                     ingradientList.appendChild(li)
//
//                 }
//                 ingradientDiv.appendChild(ingradientList)
//                 div.appendChild(ingradientDiv)
//
//                 let instructionCap = document.createElement('div')
//                 let instructionDiv = document.createElement('div')
//                 let instructionList  = document.createElement('ul')
//                 for (const instruction of instructions) {
//                     let li = document.createElement('li')
//                     li.innerText = instruction;
//                     instructionList.appendChild(li)
//                 }
//                 instructionCap.innerHTML = `Preparation:`
//                 instructionDiv.appendChild(instructionList)
//
//                 let otherInfo = document.createElement('div')
//                 otherInfo.innerHTML = `prepTimeMinutes = ${prepTimeMinutes},<br><br>
//                                 cookTimeMinutes = ${cookTimeMinutes}, <br><br>
//                                 servings = ${servings}, <br><br>
//                                 difficulty = ${difficulty}, <br><br>
//                                 cuisine = ${cuisine}, <br><br>
//                                 caloriesPerServing = ${caloriesPerServing}, <br><br>
//                                 tags = ${tags}<br><br>`
//
//                 div.appendChild(otherInfo)
//                 div.appendChild(instructionCap)
//                 div.appendChild(instructionDiv)
//
//
//                 document.body.appendChild(div)
//                 }
//         });
// }




// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


{
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(users => users.json())
        .then(users => {
            let div = document.createElement('div')
            let ul = document.createElement('ul')
            for (const {id,name} of users) {


                let li = document.createElement('li')
                li.innerHTML = `ID : ${id}<br>Name : ${name}<br><a href="users.html?id=${id}">Click On</a>`
                ul.appendChild(li)
            }
            div.appendChild(ul)
            document.body.appendChild(div)
        });
}