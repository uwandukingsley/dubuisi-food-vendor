var showLogin = document.getElementById("showLogin");
var text = document.getElementById("about");

function openLogin(){
    // showLogin.classList.add("open-showLogin");
    showLogin.style.visibility = "visible";
    text.style.color = "green";
}

function closeLogin(){
    // showLogin.classList.remove("close-showLogin");
    showLogin.style.visibility ="hidden";

}