var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(student) {
    return "Hello " + student.fullName + "!!!!!!";
}
var user = "Mac";
var arr = [1, 2, 4];
var person = {
    firstName: "Mac1",
    lastName: "Lmac"
};
var std = new Student("Gopi", "Rajendran");
document.body.innerHTML = greeter(std);
