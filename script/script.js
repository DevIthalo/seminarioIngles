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
var arthurcontent = 'Objects are <font color="#00FF00">Python’s abstraction</font> for data. All data in a <font color="#00FF00">Python program</font> is represented by objects or by relations between objects.<br>Every object has an identity, a type and a value. An <font color="#00FF00">object’s identity</font> never changes once it has been created; you <font color="#FF0000">may</font> think of it as the <font color="#00FF00">object’s address</font> in memory.The id() function returns an integer representing its identity.<br><br><img src="style/id.png" alt="" style="width: 50%"><br><Br>An object’s type determines the operations that the object supports and also defines the possible values for objects of that type. <font color="#00FF00">The type() function returns an object’s type</font> (which is an object itself). Like its identity, an object’s type is also <font color="#FFD700">unchangeable</font>.<br><br><img src="style/type.png" style="width: 50%"><br><br>The value of some objects <font color="#FF0000">can</font> change. Objects whose value <font color="#FF0000">can</font> change are said to be <font color="#FFD700">mutable</font>; objects whose value is <font color="#FFD700">unchangeable</font> once they are created are called <font color="#FFD700">immutable</font>.An object’s <font color="#FFD700">mutability</font> is determined by its type; for instance, numbers, <font color="#FFD700">strings</font> and <font color="#FFD700">tuples</font> are <font color="#FFD700">immutable</font>, while dictionaries and lists are <font color="#FFD700">mutable</font>.'// ASSUNTO que estará no modal
var arthurcontent2 = '<strong>CPython implementation detail:</strong> CPython currently uses a reference-counting scheme with (optional) delayed detection of cyclically linked garbage, which collects most objects as soon as they become unreachable, but is not guaranteed to collect garbage containing circular references.<br><strong>The standard type hierarchy</strong><br>None: It is used to signify the absence of a value in many situations, e.g., it is returned from functions that don’t explicitly return anything. Its truth value is false<br>numbers.Number:These are created by numeric literals and returned as results by <font color="#00FF00">arithmetic operators</font> and arithmetic built-in functions. <font color="#00FF00">Numeric objects</font> are <font color="#FFD700">immutable</font>; once created their value never changes. <font color="#00FF00">Python numbers</font> are of course strongly related to mathematical numbers, but subject to the limitations of numerical representation in computers.<br>The string representations of the numeric classes, computed by <font color="#FFD700">__repr__()</font> and <font color="#FFD700">__str__()</font>, have the following properties:<br><br><font color="#00FF00">They are valid numeric literals which</font>, when passed to their class constructor, produce an object having the value of the original numeric.<br>The representation is in base 10, when possible.<br>Leading zeros, possibly excepting a single zero before a decimal point, are not shown.<br>Trailing zeros, possibly excepting a single zero after a decimal point, are not shown.<br>A sign is shown only when the number is negative.<br>Python distinguishes between integers, <font color="#FFD700">floating point numbers</font>, and complex numbers:'
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
        if (passador >= 1 && passador < 7) { // Passar os Cards
            passador++
        }
    }else if(pessoa === 'back'){
        if (passador > 1 && passador <= 8) { // Voltar os cards
            passador--
        }
    }
    for(let c = 1; c <= 7; c++) { // Atribuir o numero da [pessoa] a variavel [passador]
        (pessoa === c) ? passador = c : false
    }
    if (pessoa === 1 || passador === 1){
        titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent
        //traducao('arthur') // Chama a função de traduzir
        topico.innerHTML = arthurheader
    }else if (pessoa === 2 || passador === 2){
		titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent2
        //traducao('arthur') // Chama a função de traduzir
        topico.innerHTML = arthurheader
	}else if (pessoa === 3 || passador === 3){
		titulo.innerHTML = davititle
        conteudo.innerHTML = davicontent
        traducao('davi')
        topico.innerHTML = daviheader
    }else if (pessoa === 4 || passador === 4){
        titulo.innerHTML = geffersontitle
        conteudo.innerHTML = geffersoncontent
        traducao('gefferson')
        topico.innerHTML = geffersonheader
    }else if (pessoa === 5 || passador === 5){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent
        traducao('ithalo')
        topico.innerHTML = italoheader
    }else if (pessoa === 6 || passador === 6){
        titulo.innerHTML = pedrotitle
        conteudo.innerHTML = pedrocontent
        traducao('pedro')
        topico.innerHTML = pedroheader
    }else if (pessoa === 7 || passador === 7){
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