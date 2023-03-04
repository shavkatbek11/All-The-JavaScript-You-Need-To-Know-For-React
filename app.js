// functions exports 

export default function DoSomething() {

}
export const DoSomething = () => {

}
// ---------------------------------------------------

const MyComponent = () => {
    return <div></div>
}
// ---------------------------------------------------

<button>
    onClick = {() => {
        console.log('hello world');
    }}
</button>
// ---------------------------------------------------
let age = 10;
let name = "Pedro";
if (age > 10) {
   name = "Pedro"
}else{
   name = "Jeck"
}
// ---------------------------------------------------
let age = 16;
let name = age > 10 && "Pedro";
// ---------------------------------------------------
let age = 16;
let name = age > 10 !! "Pedro";
// ---------------------------------------------------
let age = 16;
let name = age > 10 ? "Pedro" : "Jeck";
// ---------------------------------------------------
let age = 16;
let name = age > 10 ? "Pedro" : "Jeck";

const Component = () => {
    return age > 10 ? <div> Pedro </div> : <div> Jeck </div>
}
// ---------------------------------------------------

// Objects 
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const name = person.name
const age = person.age
const isMarried = person.isMarried
// ---------------------------------------------------
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const {name,age,isMarried} = person;
// ---------------------------------------------------
const name = "Pedro"
const person = {
    name: name,
    age: 20,
    isMarried: false,
};
// ---------------------------------------------------
const name = "Pedro";
const age = 20;
const person = {
    name,
    age,
    isMarried: false,
};
// ---------------------------------------------------
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const person2 = {...person, name: "Jack"}
// ---------------------------------------------------
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const person2 = {...person, name: "Jack"};

const names = ["Pedro", "Jack", "Jessico"];
const names2 = [...names, "Joel"];
// ---------------------------------------------------

// map filter reduce 
let names = ["Pedro", "Jessico", "Carol"];

names.map((name) => {
    return name + '1';
});
// ---------------------------------------------------
let names = [,  "Jessico", "Carol", "Pedro", "Pedro"];

names.filter((name) => {
    return name !== "Pedro"
})