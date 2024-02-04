// Polymorphism Method - Overriding

class A{
    methoda(){
        console.log('inside parent class');
    }
}

class B extends A{
    methoda(){
        console.log('inside child class');
    }
    methoda(){
        console.log('inside child1 class');
    }
}

const obj = new B
obj.methoda()