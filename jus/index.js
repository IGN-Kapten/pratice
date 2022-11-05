let inp = document.getElementById("inp")
let sub = document.getElementById("sub")
let display = document.getElementById("display")

let str = ""

sub.addEventListener('click', ()=>{
  ans()
  let str = inp.value
  
  if (ans() == true) {
    display.innerHTML = `${str} is Palindrome`
  } else {
    display.innerHTML = `${str} is not Palindrome`
  }
})

function ans(){
  let str = inp.value
  str = str.toLowerCase()
  
  let reversed = str.split("").reverse().join("")
  
  if (reversed == str) {
    return true
  } else {
    return false
  }
}
