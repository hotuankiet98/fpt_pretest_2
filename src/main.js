var yearSelect = document.getElementById("year");
var monthSelect = document.getElementById("month");
var daySelect = document.getElementById("day");

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "January";
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === 'January' || month === 'March' || 
    month === 'May' || month === 'July' || month === 'August' 
    || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if(month === 'April' || month === 'June' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}
function submitInfo(){
    var username=$("#username").val();
    var password=$("#password").val();
    var repass=$("#repass").val();
    var name=$("#name").val();
    var address=$("#address").val();
    var email=$("#email").val();
    var sex=$(".gender:checked").val();
    var dayValue=$("#day").val();
    var monthValue=$("#month").val();
    var yearValue=$("#year").val();
    var country=$(".country option:selected").val();
    var phone=$("#phone").val();
    var hob=$(".hobbies:checked");
    var comment=$("#comment").val();
    var hobArr=[];
    if(hob.length>0){
        hob.each(function(){
            hobArr.push($(this).val());
        })
    }
    var today=new Date();
    var birthdayValue=new Date(yearValue+"-"+monthValue+"-"+dayValue);
    var age=(today-birthdayValue)/(1000*60*60*24*365.2);
    var checkYear;
    if(new Date(yearValue, 1, 29).getMonth() === 1){
            checkYear="Date of birth is the leap year!";
    }else{
        checkYear="Date of birth is not the leap year!";
    }
    if(password!=repass){
        alert("Password don't same repassword.Register fail!")
    }else{
        alert("Name:"+username+
                "\nPassword:"+password+
                "\nRepassword:"+repass+
                "\nAddress:"+address+
                "\nName:"+name+
                "\nEmail:"+email+
                "\nSex:"+sex+
                "\nDay:"+dayValue+
                "\nMonth:"+monthValue+
                "\nYear:"+yearValue+
                "\nCountry:"+country+
                "\nPhone number:"+phone+
                "\nHobbies:"+hobArr+
                "\nComment:"+comment+
                "\nAge:"+Math.floor(age)+
                "\n"+checkYear
        );
    }
    return false;
}
var isValidUsername=document.getElementById("username");
var isValidPassword=document.getElementById("password");
var isValidRepass = document.getElementById("repass");
var isValidName = document.getElementById("name");
var isValidAddress = document.getElementById("address");
var isValidEmail=document.getElementById("email");
var isValidPhone=document.getElementById("phone");
isValidUsername.addEventListener("keyup", checkUsername);
isValidPassword.addEventListener("keyup", checkPassword);
isValidRepass.addEventListener("keyup", checkRepass);
isValidName.addEventListener("keyup", checkName);
isValidAddress.addEventListener("keyup", checkAddress);
isValidEmail.addEventListener("keyup", checkEmail);
isValidPhone.addEventListener("keyup", checkPhone);
function checkUsername(){ 
    if(isValidUsername.checkValidity())
    {
        document.getElementById("valid-username").style.display = "none";
       
    }else{
        document.getElementById("valid-username").style.display = "block";
    }
}
function checkPassword(){ 
    if(isValidPassword.checkValidity())
    {
        document.getElementById("valid-password").style.display = "none";
    }else{
        document.getElementById("valid-password").style.display = "block";
    }
}
function checkRepass(){ 
    if(isValidPassword.value==isValidRepass.value)
    {
        document.getElementById("valid-repass").style.display = "none";
    }else{
        document.getElementById("valid-repass").style.display = "block";
    }
}
function checkName(){ 
    if(isValidName.checkValidity())
    {
        document.getElementById("valid-name").style.display = "none";
    }else{
        document.getElementById("valid-name").style.display = "block";
    }
}
function checkAddress(){ 
    if(isValidAddress.checkValidity())
    {
        document.getElementById("valid-address").style.display = "none";
    }else{
        document.getElementById("valid-address").style.display = "block";
    }
}
function checkEmail(){ 
    if(isValidEmail.checkValidity())
    {
        document.getElementById("valid-email").style.display = "none";
    }else{
        document.getElementById("valid-email").style.display = "block";
    }
}
function checkPhone(){ 
    if(isValidPhone.checkValidity())
    {
        document.getElementById("valid-phone").style.display = "none";
    }else{
        document.getElementById("valid-phone").style.display = "block";
    }
}
