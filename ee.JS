// excercise 1


const products = [
    {
        name:"Laptop" ,category: "electronics", price :800
    },
     {
        name:"Phone" ,category: "electronics", price :300
    },
     {
        name:"Shirt" ,category: "clothing", price :40,
    }
]

const results = products.filter(product=>product.category==="electronics"&& product.price>200)
                        .map(product=>product.price)
    const totalPrice = results.reduce((accumulator,currentValue)=>{
        return accumulator+ currentValue
    }  ,0 )
    console.log(results)   
    console.log(totalPrice)       
                        