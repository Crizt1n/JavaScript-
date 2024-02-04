pattern="ABBABBABAA"
//Print first recursive character -B

// algorithm:-

//1. string converted into array of letters - split()

characters= pattern.split('')
console.log(characters);

//2. create an emplty object

obj={}

//3. fetch each letters in object

for(let char of characters){
    if(char in obj){
        console.log('First recurssive letter is : ',char);
        break
    }
    else{
        obj[char]=1
    }
}

//4. check these letters in the object - in
//5. present - print the letter
//6. else add that letter to the object




// In array method

obj1={}

pattern.split('').forEach(char=>char in obj1?console.log('First recurssive letter is : ',char) : obj1[char]=1 )
