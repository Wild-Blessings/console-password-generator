console.log('Hello World!');
document.write("Random password generator")

let upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let number =  10;
let symbol=  "!@#$%^&*().<_+=";
let wordsRand =[
  
  "Jumping", "rope", "is","one" , "of","the","m,ost","popular", "training","tools"
  ]


function capital (){
  return upperCase[Math.floor(Math.random()*upperCase.length )]
}
function lower (){
  return lowerCase[Math.floor(Math.random()*lowerCase.length )]
  }
  
  function numbes (){
    let  dh = Math.floor(Math.random()*number)
    return dh
  }
  function specialChar () {
    return symbol [Math.floor(Math.random() * symbol.length)]
  }
  
  function words (){
    return wordsRand [Math.floor(Math.random()*wordsRand.length)]
  }
  
console.log(capital()+lower ()+ numbes()+specialChar()+words());