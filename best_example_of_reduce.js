// reduces => it reduces an array to a single value

// const array=[1,2,3,4,5]

// const sumvalue=array.reduce((accumulator,currentValue)=> accumulator+currentValue, initialValue);
// console.log(sumvalue);

// reduces have two parameter accumulator and currentValue and one initailValue joki 0 rahega
// now accumulator => ye 1st time tho array ka first value he legha but after adding with currentValue jo sumvalue aayaga wo accumulator mai ayaga
// currentValue => array value 







// ------------------------------real project example
const shoppingcart=[
    {
        itemName:"java",
        price :3000
    },
    {
        itemName:"javascript",
        price :5000
    },
    {
        itemName:"data science course",
        price :15000
    },
    {
        itemName:"full stack web development",
        price :25000
    },
    {
        itemName:"backend",
        price :10000
    },
    {
        itemName:"frontend",
        price :14000
    },
]


//------------------ add the total prices of all courses
const PriceToPay=shoppingcart.reduce((ass,tot)=> ass+tot.price,0)

console.log(PriceToPay)