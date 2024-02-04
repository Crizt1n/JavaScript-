
//Method of Polymorphism - Functional Overloading

class A{
    methoda(){
        console.log('iside class A');
    }
    methoda(n){
        this.n1=n
        console.log('Inside Second method',this.n1);
    }
}

const obj = new A()

obj.methoda() // 'inside first method'
obj.methoda(5) // 'inside second method',this.n1


// method overloading is not supported by javascript so there won't be proper output running above program
// but it can be resolved using spread operator(...) but it will return as the array of arguments