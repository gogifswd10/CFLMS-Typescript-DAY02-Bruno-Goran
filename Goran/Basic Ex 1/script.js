var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = " ";
var i = " ";
var j = " ";
function molimTe() {
    numbers.forEach(function (i) {
        if (i === void 0) { i = 0; }
        numbers.forEach(function (j) {
            if (j === void 0) { j = 0; }
            res += i + " x " + j + " = " + (i * j) + "<br>";
        });
    });
}
;
molimTe(numbers);
console.log(res);
document.getElementById("result").innerHTML = res;
/*function govno() {
    for (let value of numbers) {
        i = 0; i++;
        
                for (let value of numbers) {
                    j = 0, j++;
            }
                res += i + ' x ' + j ' = ' + govno;
    }

    govno(i*j)

}*/
