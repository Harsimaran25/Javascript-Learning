
class PersonBHAI { 
    constructor(name) {
        this.name = name;
    }
get location(){

   return 'MULLTAR'   ; 
}
    greet() {
        console.log(`Hello, ${this.name}`);
       // console.log('Hello,', this.name);
    }
};
module.exports = PersonBHAI;