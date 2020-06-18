let arrayperson:Array<any> = [];

class Person { // ①
   name :string; // ②
   age: number ;
   jobtitle :string // ②    
constructor(name, age, jobtitle) { // ③
       this.name = name;
       this.age = age;
       this.jobtitle = jobtitle;
       arrayperson.push(this);
       console.table(this);
   }
   hellothere() { // ④
       return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobtitle}<hr>`;
   }
};
var Goran = new Person ("Goran", 5, "developer");
var Bruno = new Person ("Bru", 6, "developer");

let i=0

for (i=0; i<arrayperson.length; i++) {
document.getElementById('basic1').innerHTML += arrayperson[i].hellothere();

}

class Job extends Person { // ①
   salary;
   joblocation;
    // ②

   constructor(name, age, jobtitle, salary, joblocation) {
       super(name, age, jobtitle); // ③
        this.salary = salary;
        this.joblocation = joblocation;
   }

   hellothere() { // ④
       return  `${super.hellothere()} and and I get ${this.salary} every month, and I work in ${this.joblocation}`; // ⑤
   }
};

var Goran2 = new Job("Goran", 5, "developer", 100, "Vienna");
document.getElementById('basic2').innerHTML += Goran2.hellothere();
//Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the 
//function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”



// // Print your full name in the browser.
// function printName(name? : string): string {
//    if (name) {
//        return "Hi " + name;
//    } else {
//        return "Hi  User";
//    }
// }
// var result = printName("Admir Saraseli");

// document.getElementById('result').innerHTML = result

// // 2. Print your first name 10 times in the browser using a forEach loop.
// let namedata = ['Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir', 'Admir'];
// namedata.forEach(function(value) {
//    document.getElementById('name').innerHTML += value+'  '
// });

// // A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
// setTimeout(function() {

//   for (let i = 1; i <= 10; i++) {
//      console.log('Saraseli'+i)
//   }
    
// }, 5000);