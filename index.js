// built in functions & 
// are pre-written code that helps programmers that perform tasks and helps them 
// not to begin from  scratch

//  const string = "Vanilla Javascript";
//  console.log(string.includes("Vanilla"));
//  console.log(string.toLocaleUpperCase());

//  // 
//  const str = "Manizabayo Elie";
//  const mySubString = str.substring(0,1);
//  console.log(str.charAt(0).toUpperCase())   
//  console.log(mySubString)

// split method 
const word = "Learning";
console.log(word.split(''))
const words = ["react","ui/ux" , "node"];
console.log(words.join(","));


// trim method removes  space before and after
const email = "manizabayoelie@gmail.com "
console.log(email.trim())

// push  and pop  adds or  removes element at the end of array


// unshift and shift  adds or  removes element at the start of array
// concat joins/combines  elements in two arrays

const fruits = ["Banana","Mango", "oranges"];
const vegetables = ["Carrots","tomatoes"];
const food = fruits.concat(vegetables);
console.log(food);

// method chaining

const users = [
    {
        name : "John doe",
        age  : 25 ,
        Location :"Kigali"
    },
    {
        name : "James Milner",
        age  : 40 ,
        Location :"Kayonza"
    },
       {
        name : "Kalisa David",
        age  : 20 ,
        Location :"Kayonza"
    }
]
// find all user that located  Kayonza and over 30 years old 
const result = users.filter(user=>user.Location==="Kayonza" && user.age>30)
                    .map(user=>user.name)

console.log(result)