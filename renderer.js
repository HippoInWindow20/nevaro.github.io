// const NOTIFICATION_TITLE = 'Title'
// const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
// const CLICK_MESSAGE = 'Notification clicked!'

// new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//     .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


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

function switchPages(comp, compitself) {
    if (comp.includes("Reminders"))
        document.getElementById("frame").src = "component/reminders.html";
    else if (comp.includes("Calendar"))
        document.getElementById("frame").src = "component/calendar.html";
    else
        document.getElementById("frame").src = "component/404.html";

    var navbarButtons1 = document.getElementsByClassName("navbarButton");
    for (var j = 0; j < navbarButtons.length; j++) {
        navbarButtons1[j].classList = "navbarButton";
    }
    compitself.classList.add("active");
    console.log(comp);
    closeNavbar();
    document.getElementById("title").innerText = comp;
}

document.getElementById("menuicon").addEventListener("click", openNavbar);
document.getElementById("overlay").addEventListener("click", closeNavbar);
document.getElementById("closeBtn").addEventListener("click", closeNavbar);

var navbarButtons = document.getElementsByClassName("navbarButton");
for (var i = 0; i < navbarButtons.length; i++) {
    navbarButtons[i].addEventListener("click", function() {
        switchPages(this.innerText, this);
    });
}

var y = document.getElementsByTagName("img");
for (var i = 0; i < y.length; i++) {
    y[i].draggable = false;
}