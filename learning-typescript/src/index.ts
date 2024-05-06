let sales: number = 123_456;
let course: string = 'TypeScript';
let is_published: boolean = true;
let count = 124;
let level; //not initialize it, then the type is any

function render(document: any) {
    console.timeLog(document);
}

//arrays
let numbers: number[] = [];
// numbers.forEach(n => n.)


//tuples
let user: [number, string] = [1, 'Lei'];
//add another element, that will casue an error
// first one should be a number, the second is a string
// user[0]. after the dot there will be suggestions

//tupels are liek arrays with different types, limit it by two (thats a good practice)


//enums
// you cna represent a list of related constants
// if you define your enums javascript will compile a more optimized codes
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large};
//the Medium will be automatically be 2, and the Large is 3
// if you start by Small = 0, then Medium will be 1, and Large is 2
// if you start by Small = 's', then yu need to specify the value for Medium and Large

let mySize: Size = Size.Medium;
console.log(mySize);


//functions
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022);

// add? if the argument is optional


//objects
// aliases //for reusability

type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: 'Diane', 
    retire: (date: Date) => {
    console.log(date);
} };


//union Types
function kgToLbs(weight: number | string): number {
    //  Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');

//Intersection types

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable; //both draggable and resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


//literal types
//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: 50 | 100 = 100;


type Metric = 'cm' | 'inch';


// Nullable Types
function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase());
    else 
    console.log('Hola!');
}

greet(null);


// Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {
        birthday: new Date()
    };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
// console.log(customer.birthday);
console.log(customer?.birthday?.getFullYear());


//Optional element access operator
// if (customers !== null && customers !== undefined)
//customers?.[0]

//Optional call operator
// let log: any = (message: string) => console.log(message)
let log: any = null;
// log('a');
log?.('a');