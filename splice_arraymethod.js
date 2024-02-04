// array method - Splice()    -  add or delete items in between the array
// syntax  :  array.splice(index,deletehowmany,items)

a=['max','miller','mini','manu']

//remove mini

a.splice(2,1)
console.log(a);

// add maxwell to 2nd position
a.splice(1,0,'maxwell')
console.log(a);