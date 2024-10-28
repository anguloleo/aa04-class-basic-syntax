class Person {
  constructor(firstName, lastName, age ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.` )
  }

  static introducePeople(person){

    //check if argument is an array
    if(!Array.isArray(person)){ 
      throw new Error("introducePeople only takes an array as an argument.");
    }

    //see if items in array are instance of Person class
    for(let i = 0; i < person.length; i++){
      if(person[i] instanceof Person){
        person[i].introduce();
      }
      else{
        throw new Error("All items in array must be Person class instances.");
      }
    }
    
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
