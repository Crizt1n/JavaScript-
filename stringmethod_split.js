sentence='good morning all'

//print all the vowels present in the given sentence

console.log('----------Vowels---------------');

vowels=['a','e','i','o','u','A','E','I','O','U']
console.log(vowels);

console.log('-----------In splitted form---------------');


characters=sentence.split('')
console.log(characters);

console.log('-------------Using loop--------------');

for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
    }
}

console.log('-------------Using array from Method---------------');

// using an array method without using loop

Array.from(sentence).filter(char=>vowels.includes(char)).forEach(item=>{console.log(item);})
 