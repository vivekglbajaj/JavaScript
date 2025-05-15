//  const myArr = [0,1,2,3,4,5]
//  console.log(myArr)
// // Arrays methods
//  console.log(myArr.push(6))
//  console.log("push the element " + myArr)
//  console.log("Pop the element "+ myArr.pop())


// // const newArr = myArr.join()

// const myarr1 = myArr.slice(1,3)
// console.log(myarr1)

// console.log("BB", myArr)
// const myarr2 = myArr.splice(1,3);
// console.log("c",myArr)
// console.log(myarr2)

const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// // console.log(marvel_heroes)
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)

// const allheros = marvel_heroes.concat(dc_heroes)
// console.log(allheros)

const allnew_heroes = [...marvel_heroes,...dc_heroes]
console.log(allheros)