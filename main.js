


document.addEventListener("DOMContentLoaded", function () {
    var emailBtn = document.getElementById("user_email");
    var emails = document.getElementsByClassName("show-email");

    emailBtn.onclick = function () {
        for (var i = 0; i < emails.length; i++) {
            emails[i].style.display = "block";
        }
    };
});
