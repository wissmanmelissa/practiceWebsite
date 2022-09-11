//color chosen by user
var colorChosen = null;
//image position
var pos = 0;
//interval for animation
var interval = null;
//image for animation
let image = null;

/*sets color of screen background based on user's
chosen color (defualt is white)*/
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

//captures color chosen by user
function setColor(colorString)
{
   colorChosen = colorString;
}

//displays x-coordinate of image
function xCheck()
{
   alert(image.offsetTop);
}

/*sets pointer to image and set image position
 to relative*/
function setImage()
{
   image = document.getElementById("image");
   image.style.position = "relative";
}

/*sets movement of image to occur
every 5 millisecs*/
function setAnime()
{
   setInterval(moveAnime, 5);
}

/*moves image 1px down until image
top at 350px*/
function moveAnime()
{
   if(pos == 350)
   {
      clearInterval(interval);
   }
   else
   {
      pos++;
      image.style.top = pos + 'px';
   }
}