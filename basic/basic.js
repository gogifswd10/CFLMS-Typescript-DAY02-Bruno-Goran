var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function result() {
    console.log("Goran");
    var arrayperson = [];
    var Person = /** @class */ (function () {
        function Person(name, age, jobtitle) {
            this.name = name;
            this.age = age;
            this.jobtitle = jobtitle;
            arrayperson.push(this);
        }
        Person.prototype.hellothere = function () {
            return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobtitle + "<br>";
        };
        return Person;
    }());
    ;
    // var Goran = new Person ("Goran", 5, "developer");
    // var Bruno = new Person ("Bru", 6, "developer");
    var Job = /** @class */ (function (_super) {
        __extends(Job, _super);
        // ②
        function Job(name, age, jobtitle, salary, joblocation) {
            var _this = _super.call(this, name, age, jobtitle) || this;
            _this.salary = salary;
            _this.joblocation = joblocation;
            return _this;
        }
        Job.prototype.hellothere = function () {
            return _super.prototype.hellothere.call(this) + " and and I get " + this.salary + " every month, and I work in " + this.joblocation + "<hr>"; // ⑤
        };
        return Job;
    }(Person));
    ;
    // var Goran = new Job("Gogi", 88, "backenddeveloper", 300, "Vienna");
    // var Bruno = new Job("Bruno", 7, "developerweb", 200, "Munich");
    // document.getElementById('basic2').innerHTML += Goran.hellothere();
    var name2 = document.getElementById("name").value;
    var age2 = Number(document.getElementById("age").value);
    var jobtitle2 = (document.getElementById("jobtitle").value);
    var salary2 = (document.getElementById("salary").value);
    var joblocation2 = (document.getElementById("joblocation").value);
    var newPerson = new Job(name2, age2, jobtitle2, salary2, joblocation2);
    console.table(arrayperson);
    var i = 0;
    for (i = 0; i < arrayperson.length; i++) {
        // document.getElementById('basic1').innerHTML += arrayperson[i].hellothere();
        document.getElementById('result').innerHTML += arrayperson[i].hellothere();
    }
}
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
