
    // Nação Reggueira - TADS I


var titulo = document.querySelector('.component-name')
var conteudo = document.querySelector('.modal-content')
var topico = document.querySelector('.modal-header')
var assunto = document.querySelector('.subject')
var subtitle = document.querySelector('.subtitle-modal')
var passador = 0

assunto.innerHTML = 'DATA MODEL'
//PARA EVITAR REPETIÇÕES AO LONGO DO CODIGO - INICIO
var arthurtitle = 'ARTHUR'
var arthurcontent = '<desc id="arthur">Pass</desc> <desc id="arthur">the</desc> <desc id="arthur">mouse</desc>'
var arthurheader = '<br>[ASSUNTO]'

var davititle = 'DAVI'
var davicontent = '<desc id="davi">Pass</desc> <desc id="davi">the</desc> <desc id="davi">mouse</desc>'
var daviheader = '<br>[ASSUNTO]'

var geffersontitle = 'GEFFERSON'
var geffersoncontent = '<desc id="gefferson">Pass</desc> <desc id="gefferson">the</desc> <desc id="gefferson">mouse</desc>'
var geffersonheader = '<br>[ASSUNTO]'

var ithalotitle = 'ITHALO'
var ithalocontent = '<desc id="ithalo">Pass</desc> <desc id="ithalo">the</desc> <desc id="ithalo">mouse</desc>'
var italoheader = '<br>[ASSUNTO]'

var pedrotitle = 'PEDRO'
var pedrocontent = '<desc id="pedro">Pass</desc> <desc id="pedro">the</desc> <desc id="pedro">mouse</desc>'
var pedroheader = '<br>[ASSUNTO]'

var wesleytitle = 'WESLEY'
var wesleycontent = '<desc id="wesley">Pass</desc> <desc id="wesley">the</desc> <desc id="wesley">mouse</desc>'
var wesleyheader = '<br>[ASSUNTO]'

//FIM

function verConteudo(mn, pessoa){
    subtitle.style.display = 'block'
    assunto.style.display = 'block';
    let tads = document.querySelector('.piscar')
    let modal = document.getElementById(mn)
    if (typeof modal == 'undefined' || modal === null)
        return
    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden'
    tads.innerHTML = ''
    if (pessoa === 'next'){
        (passador === 0) ? passador++ : false
        if (passador >= 1 && passador < 6) {
            passador++
        }
    }else if(pessoa === 'back'){
        if (passador > 1 && passador <= 7) {
            passador--
        }
    }
    for(let c = 1; c <= 6; c++) {
        (pessoa === c) ? passador = c : false
    }
    if (pessoa === 1 || passador === 1){
        titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent
        traducao('arthur')
        topico.innerHTML = arthurheader
    }else if (pessoa === 2 || passador === 2){
        titulo.innerHTML = davititle
        conteudo.innerHTML = davicontent
        traducao('davi')
        topico.innerHTML = daviheader
    }else if (pessoa === 3 || passador === 3){
        titulo.innerHTML = geffersontitle
        conteudo.innerHTML = geffersoncontent
        traducao('gefferson')
        topico.innerHTML = geffersonheader
    }else if (pessoa === 4 || passador === 4){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent
        traducao('ithalo')
        topico.innerHTML = italoheader
    }else if (pessoa === 5 || passador === 5){
        titulo.innerHTML = pedrotitle
        conteudo.innerHTML = pedrocontent
        traducao('pedro')
        topico.innerHTML = pedroheader
    }else if (pessoa === 6 || passador === 6){
        titulo.innerHTML = wesleytitle
        conteudo.innerHTML = wesleycontent
        traducao('wesley')
        topico.innerHTML = wesleyheader
    }
}

function fecharConteudo(mn){
    assunto.style.display = 'block';
    let tads = document.querySelector('.piscar')
    let modal = document.getElementById(mn)
    if (typeof modal == 'undefined' || modal === null)
        return
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'
    tads.innerHTML = '&copy; TADS I'
}

function traducao(nome){
    var palavras = []
    if (nome === 'arthur'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>') // É AQUI QUE VEM AS PALAVRAS TRADUZIDAS!
    }else if(nome === 'davi'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>')
    }else if(nome === 'gefferson'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>')
    }else if(nome === 'ithalo'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>')
    }else if(nome === 'pedro'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>')
    }else if(nome === 'wesley'){
        palavras.push('<strong>Passe</strong>', '<strong>o</strong>', '<strong>mouse</strong>')
    }
    for (let pos in palavras){
        let element = document.querySelectorAll("#" + nome)[pos]
        let guarda = element.innerHTML
        element.addEventListener('mouseover', function (){
            element.innerHTML = palavras[pos]
        })
        element.addEventListener('mouseout', function (){
            element.innerHTML = guarda
        })
    }
}