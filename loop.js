//JavaScript Loop

let car = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
car.push('Alok');
// console.log(car[0]);
// console.log(car[1]);
// console.log(car[2]);

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i]);
// }

const user = [
    { id: 1, name: "Alok" , email: "alok@gmail.com" },
    { id: 2, name: "John" , email: "john@gmail.com" },
    { id: 3, name: "Rakesh" , email: "rakesh@gmail.com" },
];

for (let i = 0; i < user.length; i++) {
    if (user[i].email =="rakesh@gmail.com") {
        console.log(user[i].id , user[i].name , user[i].email)
    }
    else{
        console.log(user[i].id , "not found")
    }
}


//For In Loop

let person = {
    name: 'Alok',
    age: 30,
    country: 'Bangladesh',
    job: 'Web Developer',
}

// for (let i in person) {
//     let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
//     console.log(capLetter + ': ' + person[i]);
// }


//ForEach Method

// car.forEach(function (i) {
//     console.log(i);
// });


//For Of Loop
for (let i of car) {
    console.log(i);
}


//While Loop
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}
