const persons = [
    {
        name: "vishwanath",
        age: 21,
        address: {
            city: "tiruchirappalli",
            pincode: 623456
        }
    },
    {
        name: "hari",
        age: 24,
        address: {
            city: "chennai",
            pincode: 679436
        }
    },
    {
        name: "shafiq",
        age: 28,
        address: {
            city: "panruti",
            pincode: 345456
        }
    },
    {
        name: "ajith",
        age: 35,
        address: {
            city: "theni",
            pincode: 623456
        }
    },
    {
        name: "tamil selvan",
        age: 17,
        address: {
            city: "erode",
            pincode: 456832
        }
    },
]


// map

// 1.Get person name 
const personName = persons.map(val =>  val.name)

// 2.Get person age
const personAge = persons.map(val =>  val.age)




// filter

// 1. Get the person age greater than > 30
const ageFilter = persons.filter(val => val.age > 30)

// 2. Get the person pincode greater than > 400007
const pincodeFilter = persons.filter(val => val.address.pincode < 400007 )



// find

// 1. find the particular person name 
const findName = persons.find(val => val.name === 'vishwanath')

// 2. find the particular address.city === tiruchirappalli
const findCity = persons.find(val =>  val.address.city === 'chennai')



// forEach


// 1. get all the person name 
persons.forEach(val => {
//    console.log(val.name);
})

// 2. get the person name and city
persons.forEach(val => {
//    console.log(` Hii, I'm ${val.name} and my city is ${val.address.city}`)
})



// sort


// 1. sort the name length and get small name length 
const sortNameLen = persons.sort((a, b) => {
    if (a.name.length < b.name.length) {
        console.log(a);
    }else{
        console.log(b)
    }
})


// 2.
