// Code your solutions in this file
// for (let age=30; age<40; age ++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }
    

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return(name);
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


//Function using arrow
writeCards = (name, event) => {
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return(name);
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");




let countup = 0;
while(countup<10) {
    console.log(countup++);
}

function countDown() {
    let countdown = 10;
    while(countdown>=0) {
        console.log(countdown--);
}
}
countDown(10);
