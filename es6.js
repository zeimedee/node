const name = () => {
    console.log("hello es6");
}
// currying in javascript
const num = () => {
    return(x) =>{
        return(y)=>{
            return x+y;
        };
    };
  

  }
  
var num2 = num();

// composing

const compose = (f,g) => (a) => f(g(a)) ;

var sum = (num) => num + 1;

compose(sum, sum)(5);

// function
 const neel = () => {
     return 1+4;
     
 }
//instantiation

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    } introduce(){
        console.log(`hi i am ${this.name}, and i am a ${this.type}`);
        
    }

}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`weeeeeeee i am a ${this.type}`);
        
    }
}

const wizard1 = new Wizard('alex', 'mage');
const wizard2 = new Wizard('jah', 'dog');

