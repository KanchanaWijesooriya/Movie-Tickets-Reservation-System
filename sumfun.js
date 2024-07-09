window.onload = function() {
    document.getElementById("date").value = localStorage.getItem("dateOmovie");

    let x = "";

    if(localStorage.getItem("timeOmovie") == "six") {
        x = "6.00 p.m";
    }else {
        x = "2.00 p.m";
    }



    document.getElementById("time").value = x;
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("phone").value = localStorage.getItem("telephone");
 }