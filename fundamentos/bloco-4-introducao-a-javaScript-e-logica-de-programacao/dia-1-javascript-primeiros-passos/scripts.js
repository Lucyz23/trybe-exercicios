var A = 34;
var B = 40;
console.log(A + B);

var A = 34;
var B = 40;
console.log(A - B);

var A = 34;
var B = 40;
console.log(A / B);

var A = 34;
var B = 40;
console.log(A % B);

const a = 5;
const b = 10;
const c = 6;

if (a > b && a > c){
    console.log( 'numero maior é A');
} else {
    console.log ('numero maior é C');
} if (b > c){
    console.log('Maior é b');
    
} else {
    console.log ('Maior é C');
}

const valorIndefinido =-1;

if(valorIndefinido >= 1){
    console.log('Positive');
} else if (
    valorIndefinido === 0
) {console.log('Zero');
} else {console.log ('Negative')};

const x = 10;
const z= 40;
const y= 80;

if ( x+y+z===180 ) {
    return true;
} else {
    return false;
} if (x < 0 || z < 0 || y < 0) {
    return console.error ('Angulo definido errado');
}
