var word = prompt("Regras:\n- Não utilize números e acentuações\n- \"Ç\" é um caractére válido\nInsira a palavra:")
var word = word.toUpperCase()
var splitword = word.split("")
var txtword = []
var chars = []
var count = 0
var mis = 0
var img = document.getElementById("imgglws")
var txt = document.getElementById("wordtxt")
var btns = document.getElementsByClassName("keyboard")

insertText()

function insertText(){
    for(let i in splitword){
        txtword.push("-")
    }
    txt.value = txtword.join(" ")
}

function checkCharacter(c){
    if(chars.indexOf(c) < 0){
        chars.push(c)
    }else{
        return
    }
    
    for(let i in splitword){
        if(c == splitword[i]){
            txtword[i] = c
            count++
        }
    }
    
    if(count == 0){
        mis++
        mistake()
    }
    
    txt.value = txtword.join(" ")

    count = 0

    if(txtword.indexOf("-") < 0){
        img.src = "imgs/victory.png"
        for(let i in btns){
            btns[i].disabled = true
        } 
    }
}

function mistake(){
    if(mis < 4){
        img.src = "imgs/forca" + mis + ".png"
    }else{
        img.src = "imgs/gameover.png"
        for(let i in btns){
            btns[i].disabled = true
        } 
    }
}

