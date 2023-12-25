var i = 0;
var txt = "Hi"
var txt2 =  "I am Khizar"
var speed = 100; /* The speed/duration of the effect in milliseconds */
var speed2 = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if(i == txt.length)
    {
      setTimeout(middle, 1000)
    }
  }
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("heading").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed2);
  }
}

function middle()
{
  i = 0;
  document.getElementById("heading").innerHTML = " ";
  typeWriter2()
}

typeWriter()
