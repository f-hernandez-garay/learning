console.log("Excersie Two");

for(let i = 1; i <= 100; i++){
   if (!(i % 15)){
       console.log("FizzBuzz");
   }else if(!(i % 3)) {
       console.log("Fizz");
   }else if(!(i % 5)) {
       console.log("Buzz");
   }else {
       console.log(i);
   }
}

