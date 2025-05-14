let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())


let myCreatedDate = new Date(2025,3,23)
console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) // it's give me time in the milisecond
console.log(Math.floor(Date.now()/1000)); // and it remove the float value and give the integer


let newDate = new Date()
console.log(newDate)


console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

newDate.toLocaleString('default',{

  weekday: "lang",

})