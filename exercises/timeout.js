function echoText(){
  console.log("this prints something every 2000 msecs");
}

var t = setInterval(echoText, 2000);
setTimeout(function(){
  clearInterval(t);
}, 17000);
