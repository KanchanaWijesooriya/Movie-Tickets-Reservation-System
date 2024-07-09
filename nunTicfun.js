function save() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("timeSix").value;
    let name = document.getElementById("cusName").value;
    let email = document.getElementById("cusMail").value;
    let tell = document.getElementById("cusTel").value;

    // localStorage.setItem("dateOmovie", date);
    // localStorage.setItem("timeOmovie", time);
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // localStorage.setItem("telephone", tell);

    document.getElementById("datee").value = date;

    let x = "";

    if(time == "six") {
        x = "6.00 p.m";
    }else {
        x = "2.00 p.m";
    }



    document.getElementById("time").value = x;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = tell;
}