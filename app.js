function show(){
    var obj = {
        name: "ghous",
        insitute: "saylani",
        phone: "03242103064",
        male: true
    }
    console.log(obj)
}
show()

// function submit(){
//     var name = document.getElementById("name");
//     var number = document.getElementById("number");
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     localStorage.setItem("Name",name.value)
//     localStorage.setItem("Number",number.value)
//     localStorage.setItem("Email",email.value)
//     localStorage.setItem("Password",password.value)
//     // var obj = {
//     //            name: name.value,
//     //            number: number.value,
//     //            email: email.value,
//     //            password: password.value

//     // }
//     // localStorage.setItem("Data",JSON.stringify(obj))

//     window.location = "login.html";
// }
// function login(){
//     var userEmail = document.getElementById("userEmail");
//     var userPassword = document.getElementById("userPassword");
//     var storageEmail = localStorage.getItem("Email");
//     var storagePassword = localStorage.getItem("Password");
//     if(userEmail.value === storageEmail && userPassword.value === storagePassword){
//         alert("Login Succesfull")
//         window.location = "user.html"
//     }
//     else{
//         alert("Incorrect Details")
//     }
// }
// // var plan1 = { name: "Basic", price: 3.99, space: 100, transfer: 1000, pages: 10, discountMonths: [6, 7], calcAnnual: function (percentIfDisc) { var bestPrice = plan1.price; var currDate = new Date(); var thisMo = currDate.getMonth(); for (var i = 0; i < plan1.discountMonths.length; i++) { if (plan1.discountMonths[i] === thisMo) { bestPrice = plan1.price * percentIfDisc; break; } } return bestPrice * 12; } }; // function show(){
// //     var obj = {
// //         name: "ghous",
// //         insitute: "saylani",
// //         phone: "03242103064",
// //         male: true
// //     }
// //     console.log(obj)
// // }
// show()

// function submit(){
//     var name = document.getElementById("name");
//     var number = document.getElementById("number");
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     localStorage.setItem("Name",name.value)
//     localStorage.setItem("Number",number.value)
//     localStorage.setItem("Email",email.value)
//     localStorage.setItem("Password",password.value)
//     // var obj = {
//     //            name: name.value,
//     //            number: number.value,
//     //            email: email.value,
//     //            password: password.value

//     // }
//     // localStorage.setItem("Data",JSON.stringify(obj))

//     window.location = "login.html";
// }
// function login(){
//     var userEmail = document.getElementById("userEmail");
//     var userPassword = document.getElementById("userPassword");
//     var storageEmail = localStorage.getItem("Email");
//     var storagePassword = localStorage.getItem("Password");
//     if(userEmail.value === storageEmail && userPassword.value === storagePassword){
//         alert("Login Succesfull")
//         window.location = "user.html"
//     }
//     else{
//         alert("Incorrect Details")
//     }
// }
// var plan1 = { name: "Basic", price: 3.99, space: 100, transfer: 1000, pages: 10, discountMonths: [6, 7], calcAnnual: function (percentIfDisc) { var bestPrice = plan1.price; var currDate = new Date(); var thisMo = currDate.getMonth(); for (var i = 0; i < plan1.discountMonths.length; i++) { if (plan1.discountMonths[i] === thisMo) { bestPrice = plan1.price * percentIfDisc; break; } } return bestPrice * 12; } }; // function show(){}

show()

function submit(){
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    localStorage.setItem("Name",name.value)
    localStorage.setItem("Number",number.value)
    localStorage.setItem("Email",email.value)
    localStorage.setItem("Password",password.value)
    // var obj = {
    //            name: name.value,
    //            number: number.value,
    //            email: email.value,
    //            password: password.value

    // }
    // localStorage.setItem("Data",JSON.stringify(obj))

    window.location = "login.html";
}
function login(){
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var storageEmail = localStorage.getItem("Email");
    var storagePassword = localStorage.getItem("Password");
    if(userEmail.value === storageEmail && userPassword.value === storagePassword){
        alert("Login Succesfull")
        window.location = "start.html"
    }
    else{
        alert("Incorrect Details")
    }
}
// var plan1 = { name: "Basic", price: 3.99, space: 100, transfer: 1000, pages: 10, discountMonths: [2,6, 7], calcAnnual: function (percentIfDisc) { var bestPrice = plan1.price; var currDate = new Date(); var thisMo = currDate.getMonth(); for (var i = 0; i < plan1.discountMonths.length; i++) { if (plan1.discountMonths[i] === thisMo) { bestPrice = plan1.price * percentIfDisc; break; } } console.log(bestPrice * 12) } }; 

// plan1.calcAnnual(.8)

// function Plan(name, price, space, transfer, pages) {    this.doc = name;    this.grumpy = price;    this.sleepy = space;    this.bashful = transfer;    this.sneezy = pages;  }
 

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// var plan2 = new Plan("normal", 3, 10, 100000, 1000);

console.log(plan1)
console.log(plan2)


