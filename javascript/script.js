function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

if (username=="namakurahman"&& password=="rahman"){
    alert("login berhasil");
    window.location = "login.html";
    return false;
}
else{
    alert("username atau password yang anda masukan salah");
}
}