// magnetism measured when nothing around
var zeroMag = Puck.mag();

// Called when new magnetic field information is found
function onMag(xyz) {
  // work out the distance from zero
  var x = xyz.x - zeroMag.x;
  var y = xyz.y - zeroMag.y;
  var z = xyz.z - zeroMag.z;
  // Work out the magnitude of the field
  var d = Math.sqrt(x * x + y * y + z * z);
  // print it and light the light if the door is closed
  console.log(d);
  LED2.write(d>500);
}

// Set callback when magnetic field info is found
Puck.on('mag', onMag);
// Turn on magnetometer
Puck.magOn();



  var isDoorOpen = d<500;
  if (isDoorOpen != wasDoorOpen) {
    if (isDoorOpen) {
      doorOpened();
      // flash green LED for open
      digitalPulse(LED2,1,100);
    } else {
      // flash red LED for close
      digitalPulse(LED1,1,100);
    }
    wasDoorOpen = isDoorOpen;
  }
}

// Set callback when magnetic field info is found
Puck.on('mag', onMag);
// Turn on magnetometer
Puck.magOn();





// magnetism measured when nothing around
var zeroMag = Puck.mag();
var wasDoorOpen = false;
var doorOpenings = 0;

function doorOpened() {
  doorOpenings++;
}

// Called when new magnetic field information is found
function onMag(xyz) {
  // work out the distance from zero
  var x = xyz.x - zeroMag.x;
  var y = xyz.y - zeroMag.y;
  var z = xyz.z - zeroMag.z;
  // Work out the magnitude of the field
  var d = Math.sqrt(x*x + y*y + z*z);
  // check door open state
  var isDoorOpen = d<500;
  if (isDoorOpen != wasDoorOpen) {
    if (isDoorOpen) {
      doorOpened();
      // flash green LED for open
      digitalPulse(LED2,1,100);
    } else {
      // flash red LED for close
      digitalPulse(LED1,1,100);
    }
    wasDoorOpen = isDoorOpen;
  }
}

// Set callback when magnetic field info is found
Puck.on('mag', onMag);
// Turn on magnetometer
Puck.magOn();