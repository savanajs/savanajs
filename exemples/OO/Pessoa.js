var Mammal = SavanaObject.Create(function(){

  this.eyes = "Preto"; // this -> public
  this.fur = "castalho"; // this -> public

  this._init(function(){ // Initialization
 
  });

  this.walk = function(){ // Method public
  	alert("Walking")
  }

  this.speak = function(){ // Method public
  	alert("Speaking")
  }

});

var Person = SavanaObject.Create(function(){

  this.name = "Rafael"; // this -> public
  this.age = 30;    
  var _password = 12345678 // private with(_variable)

  this._init(function(){ // Constructor
  	_methodPrivate();
  });

  this.methodPublic = function(){ // Method public
  	alert("methodPublic")
  }

  this.showPassword = function(){
     alert(_password);
  }

  function _methodPrivate(){ // Method private with(_fun)
  	alert("methodPrivate");
  }

}, Mammal); // Extend

console.log(Mammal)
console.log(Person)
Person.methodPublic();
Person.walk();
alert(Person._password); // Undefined
Person.showPassword();