var five = require("johnny-five");
var board = new five.Board({
  port: "COM4"
});
var toggelState = false;

board.on("ready", function() {
  console.log("Board ready!");

  var led = new five.Led(13);
  setInterval(toggleLED, 200);

  function toggleLED() {
    toggelState = !toggelState;
    if (toggelState) led.on();
    else led.off();
  }


//  this.pinMode(13, this.MODES.OUTPUT);
//  this.loop(500, function() {
    // Whatever the last value was, write the opposite
//    this.digitalWrite(13, this.pins[13].value ? 0 : 1);
//  });
});
