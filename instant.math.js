//Got some of this code from InfoYZ

var mathOutput;

function processMath(input) {
 var isMath = /^[0-9.()*/+'sin''cos''asin''acos''tan''atan''sqrt'-]*$/.test(input);
 if (isMath) {
     var math = input;
     math = math.replace(/asin/g, '#');
     math = math.replace(/acos/g, '##');
     math = math.replace(/atan/g, '###');
     math = math.replace(/sin/g, 'Math.sin');
     math = math.replace(/cos/g, 'Math.cos');
     math = math.replace(/tan/g, 'Math.tan');
     math = math.replace(/sqrt/g, 'Math.sqrt');
     math = math.replace(/###/g, 'Math.atan');
     math = math.replace(/##/g, 'Math.acos');
     math = math.replace(/#/g, 'Math.asin');
     mathOutput = search + " = " + eval(math);
 }
}
