class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + " " + lastName;
    }
}


interface Person {
    firstName: string;
    lastName: string;
}

function greeter(student: Student) {
    return "Hello " + student.fullName + "!!!!!!";
}

let user = "Mac";
let arr = [1, 2, 4];
let person = {
    firstName: "Mac1",
    lastName: "Lmac"
};

let std = new Student("Gopi", "Rajendran");
document.body.innerHTML = greeter(std);
