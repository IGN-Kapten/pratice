let category = document.getElementById("category")
let subcategory = document.getElementById("subcategory")

let label = document.getElementById("text-dis")

let language = document.getElementById("language")
let amount = document.getElementById("amount")

let btn = document.getElementById("btn")

let answer = document.getElementById("answer")

category.addEventListener('change', () => {
  if (category.value == "any") {
    subcategory.setAttribute("disabled", "")
    label.style.color = "grey"
  } else {
    subcategory.removeAttribute("disabled")
    label.style.color = "black"
  }
})

let baseurl = `https://v2.jokeapi.dev/joke/`
let url;
let error = false
let data;

btn.addEventListener('click', () => {
  geturl()
})

function geturl() {

  if (category.value == "any") {
    url = `${baseurl}any`
  }
  else {
    url = `${baseurl}${subcategory.value}`
  }

  url = `${url}?lang=${language.value}`

  if (amount.value <= 10) {
    for (i = 0; i < amount.value; i++) {
      jokesapi()
    }
  } else {
    let obj = {
        "error" : true,
        "message" : "Amount  should be <= 10"
    }
    errorHandler(obj)
  }
}

async function jokesapi() {
  response = await fetch(url)
  data = await response.json()

  if (errorHandler(data)) {
    errorThrower(data)
  } else {
    populate(data)
  }
}

function errorHandler(obj) {
  if (obj.error == true) {
    errorThrower(obj)
    return true
  } else {
    return false
  }
}

function populate(obj) {
  let h3 = document.createElement("h3")
  let div = document.createElement("div")
  let p = document.createElement("p")
  let p2 = document.createElement("p")
  
  h3.innerHTML = "Joke(s)"
  div.append(p, p2)
  div.style.border = "1px solid black"
  div.style.margin = "5px"
  
  p.innerHTML = obj.setup
  p2.innerHTML = obj.delivery
  
  answer.innerHTML = ""
  answer.append(h3, p, p2)
}

function errorThrower(obj) {
  let h3 = document.createElement("h3")
  let p = document.createElement("p")
  h3.innerHTML = "Error"
  p.innerHTML = obj.message
  
  answer.innerHTML = ""
  answer.append(h3, p)
}
