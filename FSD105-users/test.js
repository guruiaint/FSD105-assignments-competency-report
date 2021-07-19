

function sum(num1,num2){
    return num1+num2;
}

function sayHello(name, lastName){
    console.log("Hi There " + name + " " + lastName + "!!!");
}

function runTest1(){
    console.log("Starting test 1");

    sayHello("Alex", "Jones");

    let a=41;
    let b=182;
    let result=sum(a,b);
    console.log(result);
}

function Dog(name,age,color,breed){
    this.name=name;
    this.age=age;
    this.color=color;
    this.breed=breed;
}

function runTest2(){
    console.log("Test for Objects");

    //object literal
    //used for configuration, 1 time structure
    let dog={
        name: "Elsa",
        age: 5,
        color: "Brown",
        breed: "Bogle"
    };
    console.log(dog);

    console.log(dog.name);
    dog.age = 6;

    //object constructor
    let elsa=new Dog("Elsa",5,"Brown","Bogle");
    console.log(elsa);
    let scooby=new Dog("Scooby",50,"Brown","Great Dane");
    console.log(scooby);
    //used for multiple objects with same structure
    //sendToServer(dog);
}