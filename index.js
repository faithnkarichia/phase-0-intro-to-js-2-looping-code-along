// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }


  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(arr,eventName){
    const newArr=[]
    for (let i=0; i<arr.length; i++){
        
       const message= `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`  
       newArr.push(message)

    }
    return newArr
}




writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(num){

let i=0;
while (num>=i){
    console.log(num)
    num--
   
}
    
}
countDown(10)