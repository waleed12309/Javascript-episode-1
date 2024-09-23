// we can destructuring in obeject and array

const arr=[1,2,3,4,5,6]
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

const[a,b,c,d,e]=arr;


//object destructuring
const person={
    name:"Ali",
    age:21,
    gender:"male",
    loctaion:"Islamabad",
};

//dot notation
console.log(person.gender)

//bracket notation
console.log(person["gender"])