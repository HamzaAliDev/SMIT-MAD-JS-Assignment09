// popover code.


const users = []
const getInputFieldValue = id => document.getElementById(id).value
const clearInputField = (id , value) => document.getElementById(id).value = value
const getRandomId = () => Math.random().toString(36).slice(2)
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const getAge = (userTime) => {
    let inputTime = new Date(userTime)
    let currentTime = new Date
    
    let result = currentTime - inputTime
     result = Math.floor(result/(1000 * 60 * 60 *24 * 365 ))
    // console.log(result);

    return result
    
  }
  
  
  const handleRegistor = () => {
    event.preventDefault();
    
    let firstName = getInputFieldValue("first-name")
    let lastName = getInputFieldValue("last-name")
    let email = getInputFieldValue("email")
    let userTime = getInputFieldValue("time-date")
    
    firstName = firstName.trim()
    lastName = lastName.trim()
    let fullName = firstName + " " + lastName;
    
    if(firstName == "" || lastName == "" || email == "" || userTime == ""){ return alert("All fields are required")}
    if(firstName.length <3 || lastName.length <3){ return alert("Please enter your Name Correct")}
    if(!validateEmail(email)){ return alert("Please enter Correct email")}
    if(users.find(user => user.fullName === fullName && user.email === email)){return alert("User Already Exist!")}
    const user ={
        fullName,
        email,
        id: getRandomId(),
        rollNumber: users.length + 1, 
        age: getAge(userTime)
    }
    users.push(user)

    clearInputField("first-name","")
    clearInputField("last-name","")
    clearInputField("email","")
    clearInputField("time-date","")
    
    // console.log(users);
}


const handleConsolePrint = () =>{
  console.log(users)
} 

const handlePrintTable = () =>{
  document.getElementById('table-data').innerHTML = "";
  if(users.length === 0){return alert("Table is empty")}
  
  let tableHeader = "<tr><th scope='col'>Roll No.</th><th scope='col'>Full Name</th><th scope='col'>Email</th><th scope='col'>Age</th><th scope='col'>ID</th></tr>"
  document.getElementById('table-header').innerHTML = tableHeader;

  for(let i=0; i<users.length; i++){
    let html = "<tr style='border-bottom:1px solid #ddd;'><td>" + users[i].rollNumber + "</td><td>" + users[i].fullName + "</td><td>" + users[i].email + "</td><td>" + users[i].age + "</td><td>" + users[i].id + "</td></tr>"
    document.getElementById('table-data').innerHTML += html
  }
} 


const handleClearBtn = () =>{
  // document.getElementById('table-output').innerHTML = ""
  document.getElementById('table-header').innerHTML = "";
  document.getElementById('table-data').innerHTML = "";
}