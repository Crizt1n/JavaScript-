text="hai hello all hello world all"
console.log(text);

// w.a.p to print the word count in the given text
// o/p {hai:1, hello:2, all:1, world:1}

//Alogorithm:-

//1. convert text into array(using spliit or arrayFrom)

words=text.split(' ')
/* console.log(words); */

//2. create an empty object
wc={}

//3. fetch words from array(using for of)
for(let word of words){
    //4. check these words in array (using 'in')
    if(word in wc){
        //5. present - count increment
        wc[word]+=1
    }
    else{
        //6. else - add that word into the object
        wc[word]=1
    }
}

//7. Display the object

console.log(wc);

wc1={}

text.split(' ').forEach(word=>word in wc1?wc1[word]+=1:wc1[word]=1);
console.log(wc1);