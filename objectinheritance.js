
// Object inheritance / Prototype inheritance

baleno={
    model : 'hatch black',
    variant : ['automatic','manual'],
    manufacturer : 'maruti'

}

glanza ={
    manufacturer:'toyota'
}
glanza.__proto__=baleno

console.log(glanza.variant);