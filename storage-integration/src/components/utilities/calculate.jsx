

const sumPlus = (a,b,c,d)=> a+b+c+d;

const add = (a,b) => a+b;

/* reduce apply on array */
// const nums = [2, 6, 23, 1, 4];
// const sumReducer = (previous, current) => previous + current;
// const total = nums.reduce(sumReducer ,0)

/* reduce apply on obj */
// const products =[
//     {id:1, name:'Blash', price: 500},
//     {id:2, name:'Highlighter', price: 300},
//     {id:3, name:'Foundation', price: 900},
//     {id:4, name:'Eyelashes', price: 200}
// ]

// const itemReducer = (previous, current)=> previous + current.price;
// const itemTotal = products.reduce(itemReducer, 0)

const getTotalPrice = products => {
    const reducer = (previous, current)=> previous + current.price;
    const total = products.reduce(reducer, 0);
    return total
}

// export default sumPlus;
// export multiple :

export{
    sumPlus,
     add,
     getTotalPrice as getTotal
}