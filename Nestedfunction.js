// example for nested function


const global ='global'

parent=()=>{
    let parentpro ='parent'
child=()=>{
    let childpro = 'child'
    console.log(`global is ${global} and parentpro is ${parentpro} and child property is ${childpro}`);
}
child()
}

parent()
