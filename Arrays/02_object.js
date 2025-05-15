//  const mysym = Symbol("key1")
 
 
 
 const JsUser = {
    name: "Hetesh",
    age: 20, 
    

    location:"greater noida",
    email: "vivek@gmail.com",
    isLoggedIn:false,
 }

//  console.log(JsUser.age)
//  console.log(JsUser["email"])
//  console.log( JsUser[mysym])

 const abj1 = {1:"a", 2:"b"}
 const abj2 = {3:"a", 4:"b"}

//  const obj3 = {abj1,abj2}
//  const abj3 = Object.assign(abj1,abj2)

//  console.log(abj3);

const obj3 = {...abj1,...abj2}
 console.log(obj3);

 const user =[{
   id:1,
   email:"email@c"
 },

 {
   id:2,
   email:"alsdkfjasdjfas"
 },
 {

 },

]

user[1].email

console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))