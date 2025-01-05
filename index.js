function password_Generator(length, inclowercase, incuppercase, incnumber, incspecialcharacter){
let pass=''
let empty=''
const Lcase='abcdefghijklmnopqrstuvwxyz'
const Ucase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num="0123456789"
const spec="!@#$%^&*()<>?:{}|~,.;'[]/"

if(inclowercase){
    empty +=Lcase
}
if(incuppercase){
    empty+=Ucase
}
if(incnumber){
    empty+=num
}
if(incspecialcharacter){
    empty+=spec
}
if(length <= 0){
    return "Enter a positive input"
}
if(empty === ""){
return "Please select a checkbox"
}

for(let i=0; i < length ;i++){
    const randomindex=Math.floor(Math.random()*empty.length)
    pass +=empty[randomindex]
}
return pass
}

let lowercase=document.getElementById("includeLowerCase")
let uppercase=document.getElementById("includeUpperCase")
let number=document.getElementById("includeNumbers")
let specialcharacter=document.getElementById("includeSpecialCharacters")
let result=document.getElementById("result")

document.getElementById("submit").addEventListener("click", () =>{
const length=parseInt(document.getElementById("length").value)
const inclowercase=lowercase.checked
const incuppercase=uppercase.checked
const incnumber=number.checked
const incspecialcharacter=specialcharacter.checked

const password=password_Generator( length, inclowercase, incuppercase, incnumber, incspecialcharacter)
result.textContent=`The generated password is: "${password}"`
})
