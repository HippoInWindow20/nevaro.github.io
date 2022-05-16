const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE


function openNavbar () {
  $( "#navbar" ).animate({
    left: "0px",
  }, 300, function() {
  });
  $( "#overlay" ).show().animate({
    opacity: "1",
  }, 300, function() {
  });
}

function closeNavbar () {
  $( "#navbar" ).animate({
    left: "-400px",
  }, 300, function() {
  });
  $( "#overlay" ).animate({
    opacity: "0",
  }, 300, function() {
  });
  setTimeout(function() {
    document.getElementById("overlay").style.display = "none";
  },300);
}

document.getElementById("menuicon").addEventListener("click",openNavbar);
document.getElementById("overlay").addEventListener("click",closeNavbar);