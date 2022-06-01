let titleName = document.getElementById('titleName')
let cardText = document.getElementById('cardText')
var cacheObjetivos = document.getElementById('objetivos')
var cacheTextoInicial = document.getElementById('initialText')
let passador = 0

if(passador === 0){
    cardText.innerHTML = cacheTextoInicial.innerHTML
}

function avancarCard(){
    if (passador >= 0 && passador <= 6){
        passador++
    }
    if(passador === 1){
        cardText.innerHTML = cacheObjetivos.innerHTML
        titleName.style.display = 'none'
    }else if(passador === 2){
        titleName.innerHTML = 'Arthur'
        cardText.innerHTML = 'Conteúdo_1'
        titleName.style.display = 'block'
    }else if(passador === 3){
        titleName.innerHTML = 'Davi'
        cardText.innerHTML = 'Conteúdo_2'
    }else if(passador === 4){
        titleName.innerHTML = 'Gefferson'
        cardText.innerHTML = 'Conteúdo_3'
    }else if(passador === 5){
        titleName.innerHTML = 'Ithalo'
        cardText.innerHTML = 'Conteúdo_4'
    }else if(passador === 6){
        titleName.innerHTML = 'Pedro'
        cardText.innerHTML = 'Conteúdo_5'
    }else if(passador === 7){
        titleName.innerHTML = 'Wesley'
        cardText.innerHTML = 'Conteúdo_6'
    }
}

function voltarCard(){
    if (passador >= 1 && passador <= 7){
        passador--
    }
    if(passador === 0){
        cardText.innerHTML = cacheTextoInicial.innerHTML
        titleName.style.display = 'none'
    }else if(passador === 1){
        cardText.innerHTML = cacheObjetivos.innerHTML
        titleName.style.display = 'none'
    }else if(passador === 2){
        titleName.innerHTML = 'Arthur'
        cardText.innerHTML = 'Conteúdo_1'
    }else if(passador === 3){
        titleName.innerHTML = 'Davi'
        cardText.innerHTML = 'Conteúdo_2'
    }else if(passador === 4){
        titleName.innerHTML = 'Gefferson'
        cardText.innerHTML = 'Conteúdo_3'
    }else if(passador === 5){
        titleName.innerHTML = 'Ithalo'
        cardText.innerHTML = 'Conteúdo_4'
    }else if(passador === 6){
        titleName.innerHTML = 'Pedro'
        cardText.innerHTML = 'Conteúdo_5'
    }else if(passador === 7){
        titleName.innerHTML = 'Wesley'
        cardText.innerHTML = 'Conteúdo_6'
    }
}