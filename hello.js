var colorChosen = null;
var pos = 0;
var interval = null;
let image = null;

function changeBackgroundColor()
{

   if(colorChosen == null)
   {
    document.body.style.backgroundColor = "#FFFFFF"
   }
   {
    document.body.style.backgroundColor = colorChosen;
   }
}

function setColor(colorString)
{
   colorChosen = colorString;
}

function xCheck()
{
   alert(image.style.top);
}

function setImage()
{
   image = document.getElementById("image");
   image.style.position = "relative";
}

function setAnime()
{
   setInterval(moveAnime, 5);
}

function moveAnime()
{
   if(pos == 5000)
   {
      clearInterval(interval);
   }
   else
   {
      pos++;
      image.style.top = pos + 'px';
   }
}