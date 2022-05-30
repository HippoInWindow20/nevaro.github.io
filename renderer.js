const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


function openNavbar() {
    $("#navbar").animate({
        left: "0px",
    }, 300, function() {});
    $("#overlay").show().animate({
        opacity: "1",
    }, 300, function() {});
    document.body.style.overflow = "hidden";
}

function closeNavbar() {
    $("#navbar").animate({
        left: "-400px",
    }, 300, function() {});
    $("#overlay").animate({
        opacity: "0",
    }, 300, function() {});
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 300);
    document.body.style.overflow = "auto";
}

function switchPages(comp) {
    switch (comp) {
        case "Reminders":
            document.getElementById("frame").src = "component/reminders.html";
            break;
        case "Calendar":
            document.getElementById("frame").src = "component/calendar.html";
            break;
        default:
            document.getElementById("frame").src = "component/404.html";
    }
}

document.getElementById("menuicon").addEventListener("click", openNavbar);
document.getElementById("overlay").addEventListener("click", closeNavbar);
document.getElementById("closeBtn").addEventListener("click", closeNavbar);

var navbarButtons = document.getElementsByClassName("navbarButton");
for (var i = 0; i < navbarButtons.length; i++) {
    navbarButtons[i].onclick = switchPages(navbarButtons[i].innerHTML);
}