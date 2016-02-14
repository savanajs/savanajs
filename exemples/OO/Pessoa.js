var Mamifero = $SavanaObj.Create(function(){

  this.olhos = "Preto"; // this -> public
  this.pelo = "castalho"; // this -> public

  this._init(function(){ // Initialization
 
  });

  this.andar = function(){ // Method public
  	alert("andando")
  }

  this.falar = function(){ // Method public
  	alert("falando")
  }

});

var Pessoa = $SavanaObj.Create(function(){

  this.name = "Rafael"; // this -> public
  this.idade = "30";    
  var _senha = 12345678 // private with(_variable)

  this._init(function(){ // Constructor
  	_methodPrivate();
  });

  this.methodPublic = function(){ // Method public
  	alert("methodPublic")
  }

  function _methodPrivate(){ // Method private with(_fun)
  	alert("methodPrivate")
  }

}, Mamifero); // Extend

console.log(Mamifero)
console.log(Pessoa)
Pessoa.methodPublic();
Pessoa.andar();