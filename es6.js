const name = () => {
    console.log("hello es6");
}
// currying in javascript
const num = () => {
    return(x) =>{
        return(y)=>{
            return x+y;
        }
    }
  

  }
  
var num2 = num();

// composing

const compose = (f,g) => (a) => f(g(a)) ;

var sum = (num) => num + 1;

compose(sum, sum)(5);

//
 const neel = () => {
     return 1+4;
     
 }