var Person = savana.createClass(function(){

         this.name;
         this.gender;
         this.city;
         var password;

         // Setters

         this.set_name = function(name){ 
             this.name = name;
         }

         this.set_gender = function(gender){ 
             this.gender = gender;
         }

         this.set_city = function(city){ 
             this.city = city;
         }

         this.set_password = function(pwd){ 
             password = pwd;
         }

         // Getters

         this.get_name = function(){ 
             return this.name;
         }

         this.get_gender = function(){ 
             return this.gender;
         }

         this.get_city = function(){ 
             return this.city;
         }

         this.get_password = function(){ 
             return password;
         }

         this.getUserInfo = function(){
            return "My name is " + this.get_name() + " - Sex: " + this.get_gender() + " - city: " + this.get_city() + " - password: " + this.get_password();
         }

}); 

Person.set_name("Rafael");
Person.set_gender("Male");
Person.set_city("Barueri");
Person.set_password(123456789);

console.log(Person.getUserInfo());