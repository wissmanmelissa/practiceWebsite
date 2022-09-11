var colorChosen = null;
let pos = 0;
let interval = null;
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
   alert(image.style.left);
}

function setAnime()
{
   clearInterval(interval);
   interval = setInterval(moveAnime(), 10)
}

function setImage()
{
   image = document.getElementById("image");
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