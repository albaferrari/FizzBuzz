let i = 0;
for (i = 1; i < 101;i = i + 1){
  if (i % 3 == 0) {
    if(i % 5 == 0){
      console.log("FizzBuzz");
    }
    else{
      console.log("Fizz");
    }
  }
else if(i % 5 == 0){
console.log("Buzz");
}

else{
console.log(i)
}

}
