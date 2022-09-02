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
        name: "tamil",
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
console.log(ageFilter);