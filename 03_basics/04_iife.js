// Immediately invoked Function expression (IIFE)

(function chai() {
    //named iife
    console.log(`DB Connected`);
})();

//to end the execution `;` is necessay

(() => {
    console.log(`DB Connected Two`);
})();

((name) => {
    console.log(name);
})("Dyuti");



//To avoid pollution, due to global scope in this function scope
