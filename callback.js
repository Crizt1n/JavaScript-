// call back function

function greet(name, callback){    // name= Christo  .  callback=callme
    console.log('Hi', name);   // hi Christo
    callback()  // callme()
}

function callme(){
console.log('Its a callback Function');

}

//Call 
greet('Christo',callme)




// Set Time out Method

 console.log('HI CHRISTO');
 setTimeout(()=>{console.log('YOU ARE CUTE..!!!!');},2000) // its a predefined Function// 3000 is refferd to the time and it is measured in milli seconds
  