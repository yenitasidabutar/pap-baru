
document.addEventListener("DOMContentLoaded", function () {
tampilkanTanggal();
});

function tampilkanTanggal() {
var currentDate = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById("currentDate").innerHTML = formattedDate;
}

