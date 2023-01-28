function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='coffee'){
            resolve("order placed");
        }else{
            reject("sorry, we only serve coffee");
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("order is being processed")
        resolve('coffee served for the ${order}')
    })
}
//Scenerio with promises
// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log('Request Recieved');
//     let orderIsProcessed=processOrder(orderFromCustomer)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// })

// //Async-await

async function serverOrder(){
    try{
        const orderRecieved=await placeOrder('coffee')
        console.log(orderRecieved)
        const processOrder=await processOrder(orderRecieved)
        console.log(processedOrder)
    }catch{
        console.log(error)
    }
}
serverOrder();
