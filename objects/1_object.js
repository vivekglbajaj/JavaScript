// const tinderuser = new Object()
// const  tinderuser = {}
// tinderuser.id = "123"
// tinderuser.name = "vivek"
// tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
    email : "some@giam.com",
    fullname: {
        userfullname:{
            firstname : "vivek",
            lastname : "kumar"
        }
    }
 }
// console.log(regularUser.fullname.userfullname)

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign(obj1,obj2)

// const obj4 = {...obj1,...obj2}
// console.log(obj4)
// console.log(obj3);

const course= {
    coursename : "js in hindi",
    prince:"999",
    courseIntractor : "hitesh"
}
const {courseIntractor: Instructor} = course
console.log(Instructor)