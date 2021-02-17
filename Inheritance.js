// N:B : inheritate uper function call from below class ..


class Parent{


    constructor(){

        this.FatherName = " Mr.Kamal";
        
    }
}

// if you want call to Uper class then you do type Extends Parent and type SUPER();

class Child extends Parent{

    constructor(name){
        super();
        this.name = name
     
    }

    
getFullName(){

    return this.name + " "+ this.FatherName;
    
}
    
}

const baby = new Child (" Samsu");
const baby2 = new Child ("Tom");
console.log(baby.getFullName());
console.log(baby2)