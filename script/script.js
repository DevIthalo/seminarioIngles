/*
    Nação Reggueira - TADS I
 */

//Pegando elementos do HTML e atribuindo a variaveis
var titulo = document.querySelector('.component-name')
var conteudo = document.querySelector('.modal-content')
var topico = document.querySelector('.modal-header')
var assunto = document.querySelector('.subject')
var subtitle = document.querySelector('.subtitle-modal')
var passador = 0 // Posteriormente sera usada para passar e voltar os assuntos

//INICIO DE TUDO QUE ESTARÁ NO MODAL
assunto.innerHTML = 'DATA MODEL' // TEMA DA NAÇÃO REGGUEIRA que aparecerá no modal
var arthurtitle = 'ARTHUR' // Nome dos integrantes que aparecerá no modal
var arthurcontent = 'Objects are Python’s abstraction for data. All data in a Python program is represented by objects or by relations between objects.<br>Every object has an identity, a type and a value. An object’s identity never changes once it has been created; you may think of it as the object’s address in memory.The id() function returns an integer representing its identity.<br><br><img src="style/id.png" alt="" style="width: 50%"><br><Br>An object’s type determines the operations that the object supports and also defines the possible values for objects of that type. The type() function returns an object’s type (which is an object itself). Like its identity, an object’s type is also unchangeable.<br><br><img src="style/type.png" style="width: 50%"><br><br>The value of some objects can change. Objects whose value can change are said to be mutable; objects whose value is unchangeable once they are created are called immutable.An object’s mutability is determined by its type; for instance, numbers, strings and tuples are immutable, while dictionaries and lists are mutable.<br><strong>CPython implementation detail:</strong> CPython currently uses a reference-counting scheme with (optional) delayed detection of cyclically linked garbage, which collects most objects as soon as they become unreachable, but is not guaranteed to collect garbage containing circular references. <br><br><strong>The standard type hierarchy</strong><Br>None: It is used to signify the absence of a value in many situations, e.g., it is returned from functions that don’t explicitly return anything. Its truth value is false<br><br>numbers.Number:These are created by numeric literals and returned as results by arithmetic operators and arithmetic built-in functions. Numeric objects are immutable; once created their value never changes. Python numbers are of course strongly related to mathematical numbers, but subject to the limitations of numerical representation in computers.The string representations of the numeric classes, computed by __repr__() and __str__(), have the following properties:'// ASSUNTO que estará no modal
var arthurheader = '<br>Objects, values and types & The standard type hierarchy' // Nome do assunto que estará no modal

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
        (passador === 0) ? passador++ : false // Se passador ser igual a 0 ele já incrementa para o 1
        if (passador >= 1 && passador < 6) { // Passar os Cards
            passador++
        }
    }else if(pessoa === 'back'){
        if (passador > 1 && passador <= 7) { // Voltar os cards
            passador--
        }
    }
    for(let c = 1; c <= 6; c++) { // Atribuir o numero da [pessoa] a variavel [passador]
        (pessoa === c) ? passador = c : false
    }
    if (pessoa === 1 || passador === 1){
        titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent
        //traducao('arthur') // Chama a função de traduzir
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
    var palavras = [] // Inicializa a variavel vazia, para depois atribuir valores a ela
    if (nome === 'arthur'){
        palavras.push('') // É AQUI QUE VEM AS PALAVRAS TRADUZIDAS!
    }else if(nome === 'davi'){
        palavras.push('')
    }else if(nome === 'gefferson'){
        palavras.push('')
    }else if(nome === 'ithalo'){
        palavras.push('')
    }else if(nome === 'pedro'){
        palavras.push('')
    }else if(nome === 'wesley'){
        palavras.push('')
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