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
var arraycar = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(name, price) {
        this.name = name;
        this.price = price;
        arraycar.push(this);
    }
    Vehicles.prototype.hellothere = function () {
        return "The price of the car \"" + this.name + "\" is " + this.price + " <br>";
    };
    return Vehicles;
}());
;
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    // ②
    function Details(name, price, kilometers, seats, fuel, year) {
        var _this = _super.call(this, name, price) || this;
        _this.kilometers = kilometers;
        _this.seats = seats;
        _this.fuel = fuel;
        _this.year = year;
        return _this;
    }
    Details.prototype.hellothere = function () {
        return _super.prototype.hellothere.call(this) + "  is with " + this.kilometers + ", " + this.seats + ", " + this.fuel + ", " + this.year + "<hr>"; // ⑤
    };
    return Details;
}(Vehicles));
;
var vehicle2 = document.getElementById("vehicle").value;
var bmw2 = new Details("BMW", 10000, 100000, 5, "Diesel", 1998);
var mercedes2 = new Details("Mercedes", 15000, 10000, 5, "Diesel", 2008);
var audi2 = new Details("Audi", 20000, 5000, 5, "Benzin", 2010);
var volvo2 = new Details("Volvo", 5000, 200000, 5, "Diesel", 1996);
for (var _i = 0, arraycar_1 = arraycar; _i < arraycar_1.length; _i++) {
    var i = arraycar_1[_i];
    document.getElementById("result").innerHTML += "<div>" + i.name + "</div>\n                                      <button class=\"showbtns\">See more</button>";
}
// var newCar = new Vehicles(vehicle2, price2);
console.table(arraycar);
var showbtns = document.getElementById("check");
var _loop_1 = function (i) {
    // document.getElementById('basic1').innerHTML += arrayperson[i].hellothere();
    showbtns.addEventListener("click", function () {
        document.getElementById('result').innerHTML += arraycar[i].hellothere();
    });
};
for (var i = 0; i < arraycar.length; i++) {
    _loop_1(i);
}
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. 
// Once the user clicks on some vehicle show its details and possibility to view the price
// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production 
// calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
// var Goran = new Job("Gogi", 88, "backenddeveloper", 300, "Vienna");
// var Bruno = new Job("Bruno", 7, "developerweb", 200, "Munich");
// document.getElementById('basic2').innerHTML += Goran.hellothere();
// var name2 = (<HTMLInputElement>document.getElementById("name")).value;
//      var age2 = Number((<HTMLInputElement>document.getElementById("age")).value);
//      var jobtitle2 = (<HTMLInputElement>document.getElementById("jobtitle")).value;
//      var salary2 = (<HTMLInputElement>document.getElementById("salary")).value;
//      var joblocation2 = (<HTMLInputElement>document.getElementById("joblocation")).value;
// var newPerson = new Job(name2, age2, jobtitle2, salary2, joblocation2)
// console.table(arrayperson);
// let i=0
// for (i=0; i<arrayperson.length; i++) {
// // document.getElementById('basic1').innerHTML += arrayperson[i].hellothere();
// document.getElementById('result').innerHTML += arrayperson[i].hellothere()
// }
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
