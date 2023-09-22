function greeting(name) {
    const greet = 'Hi';
    function sayHi(){
        console.log(greet + ' ' + name);
    }
    // open API
    return {
        sayHi: sayHi
    }
}
const person = greeting('Natalya');
person.sayHi();