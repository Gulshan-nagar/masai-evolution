let studentCode= "fs39_341405"
let email= "Gulshannagar@gmail.com"
let firstName=""
for(let i=0; i<email.length; i++){
  firstName+= email[i]
  if(email[i+1]==="@"){
    break
    
  }
}
let ConcatenatedString= "fs39_341405"+firstName

let lowerString= ConcatenatedString.toLowerCase()
let vowels= "aeiou"
let vowelString=""
for(let i=0; i<lowerString.length; i++){
  if(!vowels.includes(lowerString[i])){

    vowelString+=lowerString[i]
    continue
  }
}
function isPrime(num){
  if(vowelString<=1){
    false
  }
  for(let i=0; i<vowelString; i++){
    if(vowelString%i===0){
      return flase
    }
  }
  return true
}
console.log(lowerString)
let nums=""
for(let i=0; i<lowerString.length;i++){
  let char = lowerString[i]
  if(char>='0' && char<='9'){
    nums+=char
  }
}
console.log(nums)


  for(let i=0; i<nums.length; i++){
    if(isPrime(i)){
      continue
    }
    else{
      lowerString+=1
    }
  }
  

let newString= ""
for(let i=1; i<vowelString.length; i+=2){
 
  newString+=vowelString[i]
 
}
// console.log(newString)
let num= ""
for(let i=0; i<newString.length; i++){
  if(newString%1===0){
  num+= newString[i]
  }
}
let result= ""
for(let char of newString){
  if(char>='a'&& char <='z'){
    result+=(char.charCodeAt(0)-96)
  }
  else if(char>='0'&& char<= '9'){
    result+=28
  }
  else{
    result+=27
    
  }
  
}

// console.log(result)