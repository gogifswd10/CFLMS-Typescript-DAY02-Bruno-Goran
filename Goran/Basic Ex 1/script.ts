let numbers : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	 let res = " ";
	 let i = " ";
	 let j = " ";
function molimTe() {

		numbers.forEach(function(i=0) {


			numbers.forEach(function(j=0) {
				res += i + " x " + j + " = " + (i*j) + "<br>";
						

		}			

	}

};
molimTe(numbers); 



console.log(res)
document.getElementById("result").innerHTML=res;




// EX 1 TABLE

/*  "use strict";
let output: any = document.querySelector(".out");

document.write("<table border='1'>")
for (let i: number = 1; i < 11; i++) {
    document.write("<tr>")
    for (let y: number = 1; y < 11; y++) {
        let res : number = i * y;
        document.write(`<td style='padding:10px'>${res}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")*/     
