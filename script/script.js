/*
    Nação Reggueira - TADS I
 */

//Pegando elementos do HTML e atribuindo a variaveis
var titulo = document.querySelector('.component-name')
var conteudo = document.querySelector('.modal-content')
var topico = document.querySelector('.modal-header')
var assunto = document.querySelector('.subject')
var subtitle = document.querySelector('.subtitle-modal')
var left = document.querySelectorAll('#seta')[0]
var right = document.querySelectorAll('#seta')[1]
var passador = 0 // Posteriormente sera usada para passar e voltar os assuntos

//INICIO DE TUDO QUE ESTARÁ NO MODAL
assunto.innerHTML = 'DATA MODEL' // TEMA DA NAÇÃO REGGUEIRA que aparecerá no modal
var arthurtitle = 'ARTHUR' // Nome dos integrantes que aparecerá no modal
var arthurcontent = 'Objects are <font color="#00FF00">Python’s abstraction</font> for data. All data in a <font color="#00FF00">Python program</font> is represented by objects or by relations between objects.<br>Every object has an identity, a type and a value. An <font color="#00FF00">object’s identity</font> never changes once it has been created; you <font color="#FF0000">may</font> think of it as the <font color="#00FF00">object’s address</font> in memory.The id() function returns an integer representing its identity.<br><br><img src="style/id.png" alt="" style="width: 50%"><br><Br>An object’s type determines the operations that the object supports and also defines the possible values for objects of that type. <font color="#00FF00">The type() function returns an object’s type</font> (which is an object itself). Like its identity, an object’s type is also <font color="#FFD700">unchangeable</font>.<br><br><img src="style/type.png" style="width: 50%"><br><br>The value of some objects <font color="#FF0000">can</font> change. Objects whose value <font color="#FF0000">can</font> change are said to be <font color="#FFD700">mutable</font>; objects whose value is <font color="#FFD700">unchangeable</font> once they are created are called <font color="#FFD700">immutable</font>.An object’s <font color="#FFD700">mutability</font> is determined by its type; for instance, numbers, <font color="#FFD700">strings</font> and <font color="#FFD700">tuples</font> are <font color="#FFD700">immutable</font>, while dictionaries and lists are <font color="#FFD700">mutable</font>.'// ASSUNTO que estará no modal
var arthurcontent2 = '<strong>CPython implementation detail:</strong> CPython currently uses a reference-counting scheme with (optional) delayed detection of cyclically linked garbage, which collects most objects as soon as they become unreachable, but is not guaranteed to collect garbage containing circular references.<br><strong>The standard type hierarchy</strong><br>None: It is used to signify the absence of a value in many situations, e.g., it is returned from functions that don’t explicitly return anything. Its truth value is false<br>numbers.Number:These are created by numeric literals and returned as results by <font color="#00FF00">arithmetic operators</font> and arithmetic built-in functions. <font color="#00FF00">Numeric objects</font> are <font color="#FFD700">immutable</font>; once created their value never changes. <font color="#00FF00">Python numbers</font> are of course strongly related to mathematical numbers, but subject to the limitations of numerical representation in computers.<br>The string representations of the numeric classes, computed by <font color="#FFD700">__repr__()</font> and <font color="#FFD700">__str__()</font>, have the following properties:<br><br><font color="#00FF00">They are valid numeric literals which</font>, when passed to their class constructor, produce an object having the value of the original numeric.<br>The representation is in base 10, when possible.<br>Leading zeros, possibly excepting a single zero before a decimal point, are not shown.<br>Trailing zeros, possibly excepting a single zero after a decimal point, are not shown.<br>A sign is shown only when the number is negative.<br>Python distinguishes between integers, <font color="#FFD700">floating point numbers</font>, and complex numbers:'
var arthurheader = '<br>Objects, values and types & The standard type hierarchy' // Nome do assunto que estará no modal

var davititle = 'DAVI'
var davicontent = '<strong>NUMBERS</strong><br><br> ➢ Integral<br>These represent elements from the mathematical set of integers (positive and negative).There are two types of integers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Integers (int)<br>These represent numbers in an unlimited range, subject to available (virtual) memory only.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Booleans (bool)<Br>These represent the <font color="#FFD700">truth values</font> False and True. The Boolean type is a subtype of the integer type, and <font color="#FFD700">Boolean values</font> behave like the values 0 and 1, respectively, in almost all contexts, the exception being that when converted to a string, the strings "False" or "True" are returned, respectively.<br>➢ Real (float)<br>These represent <font color="#FFD700">machine-level</font> double precision <font color="#FFD700">floating point numbers</font>.Python does not support single-precision floating point numbers;<br><br><strong>&nbsp;&nbsp;SEQUENCES</strong><br><br>These represent finite ordered sets <font color="#FFD700">indexed</font> by non-negative numbers. When the length of a sequence is n, the index set contains the numbers 0, 1, …, n-1. Item i of sequence a is selected by a[i].<br>Sequences are distinguished according to their mutability:'
var davicontent2 = '➢ Immutable sequences<br>An object of an <font color="#FFD700">immutable</font> sequence type cannot change once it is created. (If the object contains references to other objects, these other objects <font color="#FF0000">may</font> be <font color="#FFD700">mutable</font> and <font color="#FF0000">may</font> be changed)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Strings<Br>A string is a sequence of values that represent Unicode <font color="#FFD700">code points</font>. All the code points in the range U+0000 - U+10FFFF <font color="#FF0000">can</font> be represented in a string. Python doesn’t have a char type; instead, every code point in the string is represented as a string object with length 1.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Tuples<Br>Tuples of two or more items are formed by comma-separated lists of expressions. A tuple of one item (a ‘singleton’) <font color="#FF0000">can</font> be formed by <font color="#FFD700">affixing</font> a comma to an expression. An empty tuple <font color="#FF0000">can</font> be formed by an empty pair of parentheses.<br>➢ Mutable sequences<br>Mutable sequences <font color="#FF0000">can</font> be changed after they are created.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Lists<Br>Lists are formed by placing a comma-separated <font color="#FFD700">list of expressions</font> in square brackets. (Note that there are no special cases needed to form lists of length 0 or 1.)'
var daviheader = '<br>Types of numbers & sequences'

var geffersontitle = 'GEFFERSON'
var geffersoncontent = 'There are currently two <font color="#FFD700">intrinsic</font> set types:<br><strong>Sets</strong><Br>These represent a <font color="#FFD700">mutable</font> set. they are created by the built-in set() constructor and <font color="#FF0000">can</font> be modified afterwards by several methods, such as add( ).<br><strong>Frozen sets</strong><br>These represent an immutable set. They are created by the built-in frozenset() constructor.As a frozenset is immutable and hashable, it <font color="#FF0000">can</font> be used again as an element of another set, or as a dictionary key.<br><strong>Mappings</strong><Br>These represent finite sets of objects <font color="#FFD700">indexed</font> by arbitrary index sets. The subscripts notation a[k] selects the item indexed by k from the mapping a; this <font color="#FF0000">can</font> be used in expressions and as the target of assignments or del statements.The built-in function <font color="#FFD700">len( )</font> returns the number of items in a mapping.<br>There is currently a single intrinsic mapping type:<br>Dictionaries<br><strong>Callable types:</strong><br>User-defined functions<br>A user-defined function object is created by a function definition. It should be called with an argument list containing the same number of items as the function\'s formal parameter list.'
var geffersoncontent2 = '<strong>Special attributes:</strong><br><br>• _doc_ “Writable"<br>• _name_ “Writable"<br>• _qualname_ “Writable”<br>• _module_ “Writable"<br>• _defalts_ “Writable"<br>• _code_ “Writable"<br>• _globals_ “Read-only"<br>• _dict_ “Writable"<br>• _Closure_ “Read-only"<br>• _annotations_ “Writable"<br>• _Kwdefalts_ “Writable”<br>'
var geffersonheader = '<br>Set type, mappings & callable types'

var ithalotitle = 'ITHALO'
var ithalocontent = 'Method name (same as __func__.__name__); __module__ is the name of the module the <font color="#FFD700">method</font> was defined in, or <font color="#FFD700">None</font> if unavailable.<br>Methods also support accessing (but not setting) the arbitrary <font color="#FFD700">function attributes</font> on the underlying function object.<br>User-defined method objects <font color="#FF0000">may</font> be created when getting an attribute of a <font color="#FFD700">class</font> (perhaps via an instance of that class), if that attribute is a user-defined function object or a class method object.<br>When an <font color="#FFD700">instance</font> method object is created by retrieving a user-defined function object from a class via one of its instances, its <font color="#FFD700">__self__</font> attribute is the instance, and the method object is said to be bound. The new method’s __func__ attribute is the original function object.<br>When an instance method object is created by retrieving a class method object from a class or instance, its __self__ attribute is the class itself, and its __func__ attribute is the function object underlying the class method.<br>When an instance method object is called, the underlying function (__func__) is called, inserting the class instance (__self__) in front of the argument list. For instance, when C is a class which contains a definition for a function f(), and x is an instance of C, calling x.f(1) is equivalent to calling C.f(x, 1).<br>When an instance method object is derived from a class method object, the “class instance” stored in __self__ will actually be the class itself, so that calling either x.f(1) or C.f(1) is equivalent to calling f(C,1) where f is the underlying function.'
var ithalocontent2 = 'Note that the transformation from function object to instance method object happens each time the attribute is retrieved from the instance. In some cases, a fruitful optimization is to assign the attribute to a local variable and call that local variable. Also notice that this transformation only happens for user-defined functions; other callable objects (and all non-callable objects) are retrieved without transformation. <font color="#00FF00">It is</font> also important to note that user-defined functions which <font color="#00FF00">are</font> attributes <font color="#00FF00">of</font> a class instance are not converted to bound methods; this only happens when the function <font color="#00FF00">is an</font> attribute of the class.<br><strong>Generator functions</strong><br>A function or method which uses the yield statement (see section The yield statement) is called a generator function. Such a function, when called, always returns an iterator object which <font color="#FF0000">can</font> be used to execute the body <font color="#00FF00">of the</font> function: calling the <font color="#00FF00">iterator’s</font> iterator.__next__() method <font color="#FF0000">will</font> cause the function to execute until it provides a value using the yield statement. When the function executes a return statement or falls off the end, a StopIteration exception is raised and the iterator will have reached the end of the set of values to be returned.<br><strong>Coroutine functions</strong><br>A function or method which is defined using async def is called a coroutine function. Such a function, when called, returns a coroutine object. It <font color="#FF0000">may</font> contain await expressions, as well as async with and async for statements. See also the Coroutine Objects section.'
var ithalocontent3 = '<strong>Built-in functions</strong><br>A built-in function object is a wrapper around a C function. Examples of built-in functions are <font color="#FFD700">len()</font> and math.sin() (math is a standard built-in module). The number and type of the <font color="#FFD700">arguments</font> are determined by the C function. Special <font color="#00FF00">read</font>-only attributes:<br>__doc__ is the function’s documentation string, or None if unavailable; __name__ is the function’s name; __self__ is set to None (but see the next item); __module__ is the name of the module the function was defined in or None if unavailable.<Br><strong>Built-in methods</strong><br>This is really a different disguise of a built-in function, this time containing an object passed to the C function as an implicit extra argument. An example of a built-in method is alist.append(), assuming alist is a list object. In this case, the special read-only attribute __self__ is set to the object denoted by alist.<br><strong>Classes</strong><br>Classes are callable. These objects normally act as factories for new instances of themselves, but variations are possible for class types that override __new__(). The arguments of the call are passed to __new__() and, in the typical case, to __init__() to initialize the new instance.<br><strong>Class Instances</strong><br>Instances of arbitrary classes <font color="#FF0000">can</font> be made callable by defining a __call__() method in their class.'
var ithalocontent4 = '<Strong>Modules</Strong><br><font color="#FFD700">Modules</font> are a basic organizational unit of Python code, and are created by the <font color="#FFD700">import system</font> as invoked either by the import statement, or by calling functions such as <font color="#FFD700">importlib.import_module()</font> and built-in __import__(). A module object has a namespace implemented by a dictionary object (this is the dictionary referenced by the __globals__ attribute of functions defined in the module). Attribute references are translated to lookups in this dictionary, e.g., m.x is equivalent to m.__dict__["x"]. A module object does not contain the code object used to initialize the module (since it isn’t needed once the initialization is done).<br>Attribute assignment updates the module’s namespace dictionary, e.g., m.x = 1 is equivalent to m.__dict__["x"] = 1.<br>Predefined (writable) attributes:<br>__name__<br>The module’s name.<br>__doc__<br>The module’s documentation string, or None if unavailable.<br>__file__<br>The pathname of the file from which the module was loaded, if it was loaded from a file. The __file__ attribute <font color="#FF0000">may</font> be missing for certain types of modules, such as C modules that are statically linked into the interpreter. For extension modules loaded dynamically from a shared library, it’s the pathname of the shared library file.<br>__annotations__<br>A <font color="#FFD700">dictionary</font> containing variable annotations collected during module body execution.'
var italoheader = '<br>Methods, instance, classes, function & Modules'

var pedrotitle = 'PEDRO'
var pedrocontent = '<strong>Custom class</strong><br><font color="#00FF00">Custom class types</font> typically created by <font color="#00FF00">class definitions</font>.When the <font color="#00FF00">attribute name</font> is not found there, the <font color="#00FF00">attribute search</font> continues in the <font color="#00FF00">base classes</font>.When a <font color="#00FF00">class attribute reference</font> (to a C class, say) would produce a <font color="#00FF00">class method object</font>, it is transformed into an <font color="#00FF00">instance method object</font> whose _self_ attribute is C. When it would produce a <font color="#00FF00">static method object</font>, it is transformed into the object encapsulated by the static method object.<br>Class attribute assignments update the class dictionary, never the dictionary of a base class.<br><strong>Class Instance</strong><br>A class instance has a <font color="#FFD700">namespace</font> implemented as a <font color="#FFD700">dictionary</font> that is the first place attribute references are looked up.When an <font color="#FFD700">attribute</font> is not found there, and the instance\'s class has an <font color="#FFD700">attribute</font> with that name, the search continues with the class\'s attributes.If a class attribute is found that is a user-defined function object, it is transformed into an instance method object whose _self_attribute is the instance.<br><strong>Code objects</strong><br>Code objects represent compiled executable Python code. Unlike function objects, code objects are immutable and do not contain references directly or indirectly to mutable objects.'
var pedroheader = '<br>Custom class, instance class & object code'

var wesleytitle = 'WESLEY'
var wesleycontent = '<strong>Frame Objects</strong><br>Frame objects represent execution frames. They <font color="#FF0000">may</font> occur in traceback objects (see below), and are also passed to registered trace functions.<br>Special read-only attributes:   f_back , none, f_code, f_locals, f_globals, f_builtins, f_lasti<br>Special writable attributes: f_trace, f_trace False, f_trace_opcodes True, f_lineno<br><strong>frame.clear()</strong><br>This method clears all references to local <font color="#FFD700">variables</font> held by the frame. Also, if the frame belonged to a generator, the generator is finalized. This helps break reference cycles involving frame objects (for example when catching an exception and storing its traceback for later use).<br><strong>Traceback objects</strong><br>Traceback objects represent a <font color="#FFD700">stack trace</font> of an exception. A traceback object is implicitly created when an exception occurs, and <font color="#FF0000">may</font> also be explicitly created by calling types.TracebackType.<br><strong>Slice objects</strong><br>Slice objects are used to represent slices for <font color="#FFD700">getitem()</font> methods. They are also created by the built-in slice() function.<br>Special read-only attributes: start is the lower bound; stop is the upper bound; step is the step value; each is None if omitted. These attributes <font color="#FF0000">can</font> have any type.'
var wesleyheader = '<br>Frame objects'

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
    left.style.display = 'Block'
    right.style.display = 'Block'
    tads.innerHTML = ''
    if (pessoa === 'next'){
        (passador === 0) ? passador++ : false // Se passador ser igual a 0 ele já incrementa para o 1
        if (passador >= 1 && passador < 12) { // Passar os Cards
            passador++
        }
    }else if(pessoa === 'back'){
        if (passador > 1 && passador <= 13) { // Voltar os cards
            passador--
        }
    }
    for(let c = 1; c <= 12; c++) { // Atribuir o numero da [pessoa] a variavel [passador]
        (pessoa === c) ? passador = c : false
    }
    if (pessoa === 1 || passador === 1){
        titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent
        //traducao('arthur') // Chama a função de traduzir
        topico.innerHTML = arthurheader
        left.style.display = 'None'
    }else if (pessoa === 2 || passador === 2){
		titulo.innerHTML = arthurtitle
        conteudo.innerHTML = arthurcontent2
        topico.innerHTML = arthurheader
	}else if (pessoa === 3 || passador === 3){
		titulo.innerHTML = davititle
        conteudo.innerHTML = davicontent
        topico.innerHTML = daviheader
    }else if (pessoa === 4 || passador === 4){
        titulo.innerHTML = davititle
        conteudo.innerHTML = davicontent2
        topico.innerHTML = daviheader
    }else if (pessoa === 5 || passador === 5){
        titulo.innerHTML = geffersontitle
        conteudo.innerHTML = geffersoncontent
        topico.innerHTML = geffersonheader
    }else if (pessoa === 6 || passador === 6){
        titulo.innerHTML = geffersontitle
        conteudo.innerHTML = geffersoncontent2
        topico.innerHTML = geffersonheader
    }else if (pessoa === 7 || passador === 7){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent
        topico.innerHTML = italoheader
    }else if (pessoa === 8 || passador === 8){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent2
        topico.innerHTML = italoheader
    }else if (pessoa === 9 || passador === 9){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent3
        topico.innerHTML = italoheader
    }else if (pessoa === 10 || passador === 10){
        titulo.innerHTML = ithalotitle
        conteudo.innerHTML = ithalocontent4
        topico.innerHTML = italoheader
    }else if (pessoa === 11 || passador === 11){
        titulo.innerHTML = pedrotitle
        conteudo.innerHTML = pedrocontent
        topico.innerHTML = pedroheader
    }else if (pessoa === 12 || passador === 12){
        titulo.innerHTML = wesleytitle
        conteudo.innerHTML = wesleycontent
        topico.innerHTML = wesleyheader
        right.style.display = 'None'
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
/*
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
 */