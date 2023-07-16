let number = 129;
let result = 0;
i=3
while(i>0){
    rightmost = number%10;
    
    result = result*10 + rightmost;
    
     number = (number/10);
     i--
     console.log("Reversed number is : " + result)
}

