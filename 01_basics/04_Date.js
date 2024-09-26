let mydate = new Date();
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

//let mynewdate=new Date("2023-11-2")
let mynewdate=new Date(2021,1,3)//insex of months start from 0-11
console.log(mynewdate.toString())

let timestamp=Date.now()
console.log(timestamp.toLocaleString())