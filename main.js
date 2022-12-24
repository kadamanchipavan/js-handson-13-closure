//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
//2Q
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//3Q
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  //4Q
  ( function outerFunc ( length ) {
    ( function innerFunc ( breadth ) {
      let area = length * breadth;
      console.log( "Area of Rectangle => " + area );
    }) ( 4 );
}) ( 15 );

//5q
function outer ( ) {
    var counter = 0;
    function inner ( ) {
        return counter += 1;
    };
    return inner;
}
var counter = outer( );
console.log ( counter ( ) );
console.log ( counter ( ) );
console.log ( counter ( ) );
console.log ( counter ( ) );
console.log ( counter ( ) );
//6Q
var a = 12;
( function ( ) {
   alert ( a );
}) ( );
//7Q
var a = 10;
    var x = ( function ( ) {
        var a = 12;
        return function ( ) {
          alert ( a );
        };
    }) ( );
    x ( );

 //8Q
 var globalVar = "xyz";
 ( function outerFunc ( outerArg ) {
     var outerVar = 'a';
     ( function innerFunc ( innerArg ) {
     var innerVar = 'b';
     console.log (
         "outerArg = " + outerArg + "\n" +
         "innerArg = " + innerArg + "\n" +
         "outerVar = " + outerVar + "\n" +
         "innerVar = " + innerVar + "\n" +
         "globalVar = " + globalVar );
     
     }) ( 456 );
 }) ( 123 );   