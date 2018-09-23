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
    } 
    introduce(){
        console.log(`hi i am ${this.name}, and i am a ${this.type}`);
        
    }

}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`weeeeeeee i am a ${this.type}`);
        
    }
}

const wizard1 = new Wizard('alex', 'mage');
const wizard2 = new Wizard('jah', 'dog');

///test

class Car {
    constructor(make, type) {
        this.make = make;
        this.type = type;  
    }
    intro(){
        console.log(`this is a ${this.make}, ${this.type}`);
        
    }
}

class Driver extends Car{
    constructor(make, type) {
        super(make, type);
    }

    drive(){
        console.log(`the ${this.make} ${this.type} is a fast car`);
        
    }
}

const driver1 = new Driver('nissan', 'navara');
const driver2 = new Driver('toyota', 'camry');