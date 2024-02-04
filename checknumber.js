//w.a.p to check whether the given number is mobile number or not


const validatemobile= (mobile)=>{
    return mobile.length==10? `${mobile} is a valid number`:`${mobile} is not a valid number`   // using str.length for 
}
 console.log(validatemobile('9061127341'));



 // w.a.p to check the id is gmail id or not

 const id=(gmail)=>{return gmail.endsWith('gmail.com')? ` ${gmail} is valid `: `${gmail} is not valid`}   // using endsWith , it is case sensitive
 console.log(id('ch@gmail.com'));


 // w.a.p to check the given word starts with letter Q

 const letter=(alpha)=> { return alpha.startsWith('Q') || alpha.startsWith('q')? ` ${alpha} Yes` :` ${alpha} 'No'`} // using startsWith, its also case sensitive
 console.log(letter('Qrent'));