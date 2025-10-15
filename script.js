function handleClick(){
    const mobile_Link = document.getElementById("mobile_Links");
    const hamburger_menu = document.getElementsByClassName("hamburger_menu");

    if(mobile_Link.style.display === "block"){
        mobile_Link.style.display = "none";
        hamburger_menu.textContent = "≡";
        console.log("current hamburger: " + hamburger_menu.textContent);
        console.log(" changed to none");
    }else{
        mobile_Link.style.display = "block";
        hamburger_menu.textContent = "X";
        console.log("current hamburger: " + hamburger_menu.textContent);
        console.log("changed to block");
    }
}