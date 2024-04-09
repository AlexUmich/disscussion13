document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('h1').classList.add("heading");

    document.addEventListener("dblclick", function() {
        var dt = new Date();
        alert("Current Time: " + dt);
    });

    document.getElementById("emailBox").addEventListener("change", function() {
        var checkbox = document.getElementById("emailBox");
        if (checkbox.checked) {
            checkbox.style.display = "flex";
        }
        else {
            checkbox.style.display = "none";
        }
    });

});
