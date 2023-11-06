const passwordbox = document.getElementById("Password");
const size = 13;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";
const specialchar = "yqteaAXNBJH7613bdq9$#56^%29JH{}_?>|}";


function createPassword() {

    let password = " ";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += specialchar[Math.floor(Math.random()*specialchar.length)];
    

    while(size > password.length)
    {
        password += specialchar[Math.floor(Math.random()*specialchar.length)];
    }
    passwordbox.value = password;
}
function copyPaaword (){
    passwordbox.select();
    document.execCommand("copy");
}