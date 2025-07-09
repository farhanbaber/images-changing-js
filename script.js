    let isON = false

function Changepic() {
    let img = document.getElementById("img")
isON= !isON

    if (isON) {
        img.src = "assets/ai.jpeg"
    } else {
        img.src = "assets/ai manger.jpeg" 
    }
}
// function two

let isYes = false
function ChangeTwo() {
    let imgTwo = document.getElementById("imgTwo")
    isYes =!isYes
      
    if (isYes) {
                imgTwo.src = "assets/bomb.jpeg"

    } else {
        imgTwo.src = "assets/dr qadeer.jpeg"

    }
}
// function three

let isCorrect = false
function ChangeThree() {
    let Thirdimg = document.getElementById("imgThree")
    isCorrect = !isCorrect

    if (isCorrect) {
        Thirdimg.src = "assets/ronaldo.jpeg"
    } else {
     Thirdimg.src = "assets/winner ro.jpeg"
    }
}

// function four


let  isYup = false
function ChangeForth() {
    let forthimg = document.getElementById("forthimg")

    isYup = !isYup

    if (isYup) {
        forthimg.src = "assets/saylani logo.png"
    } else {
        
        forthimg.src = "assets/saylani class.jpg" 
    }
}

// function fifth

let istrue = false
function fiveimg() {
    let fiveimg =  document.getElementById("fiveimg")
    istrue = !istrue
    if (istrue) {
        fiveimg.src = "assets/karne wala coder.jpg"
    } else {
        fiveimg.src = "assets/bugs.jpeg"
    }
}

// function sixth 

let isRight = true

function imgSix() {
    let imgSix = document.getElementById("imgSix")
    isRight= !isRight
    if (isRight) {
        imgSix.src = "assets/school.jpg"
    } else {
        imgSix.src = "assets/degree.jpg"
        
    }
}


