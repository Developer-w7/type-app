interface User{
    name:string;
    id:number;
    locations?:string[] | Array<string>;
    fun?:(x: number,y: number) => number | void | JSX.Element;
}
type a={
    name:string
}


interface TeslaModelS {
    readonly length?: number;
    readonly width?: number;
    readonly wheelbase?: number;
    readonly seatingCapacity?: number;
    getTyrePressure?: () => number;
    getRemCharging?: () => number;
}
interface TeslaModelSMap {
    engineer?: string,
    model?: TeslaModelS,
    readonly rating?: number
}

interface CustomArray {
    [index: number]: string
}
let cars: CustomArray = ['Hatchback', 'Sedan', 'Land Rover', 'Tesla Model S']


interface TeslaModelSReview {
    readonly [id: number]: TeslaModelSMap
}

const TeslaModelSReviewQueue: TeslaModelSReview = [
    {
        engineer: 'John',
        model: "", // modelByJohn1 is of type `TeslaModelS`
        rating: 2
    } 
]
// TeslaModelSReviewQueue[1]="abu";  Read Only

interface TeslaModelSReview2 {
    readonly [id: number]: TeslaModelS
}
// Function

interface Order {
    // ( customerId?: number,modelId: number): boolean   // A required parameter cannot follow an optional parameter.

    ( modelId: number,customerId?: number): boolean
}
let orderFn: Order = function (cId, mId) {
    // processing the order
    return true // processed successfully!
}
orderFn(6);

// How to use interfaces with classes

// Local variables:  a local variable is defined at the function or block level. It exists only until the function or the block is in execution. Every time a function runs, new copies of the local variables are created in memory
// Instance variables:  instances variables are members of the class. They are used to store the attributes of class objects. Each of the objects has its own copy of instance variables
// Static variables:  static variables are also called class variables because they are associated with a class as a whole. All of the objects of a class share the same copy of static variables

interface TeslaModelS2 {
    length?: number;
    width?: number;
     wheelbase?: number;
   seatingCapacity?: number;
    getTyrePressure?: () => number;
    getRemCharging?: () => number;
}
class TeslaModelSPrototype implements TeslaModelS2 {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    // private tempCache: string; // Need to check

    constructor (l:any, w:any, wb:any, sc:any) { // Implementation Not Working
        this.length = l;
        this.width = w;
        this.wheelbase = wb;
        this.seatingCapacity = sc;
    }

    getTyrePressure () {
        let tyrePressure = 20 // Evaluated after doing a few complex computations!
        return tyrePressure
    }

    getRemCharging () {
        let remCharging = 20 // Evaluated after doing a few complex computations!
        return remCharging
    }
}

let teslaObj = new TeslaModelSPrototype(196, 86, 116, 4)
console.log('Tyre Pressure', teslaObj.getTyrePressure())

interface ClockInterface {
    currentTime: Date;
  }
   
class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}
}

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});


function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") { //Narrowing
    return " ".repeat(padding) + input;
  }
  //return " ".repeat(padding) + input; //Wont work
  return padding + input;
}

console.log(padLeft(10,'10'))

// Types to check

// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"
