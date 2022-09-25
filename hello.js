//color chosen by user
var colorChosen = null;
//image position
var pos = 0;
//interval for animation
var interval = null;
//image for animation
let image = null;
//set to keyboard key pressed
let key = null;

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
function setAnime(event)
{
   key = event.key;
   clearInterval(interval);
   interval = setInterval(moveAnime, 5);
}

/*moves image 1px down until image
top at 350px*/
function moveAnime()
{
   if(pos < 350)
   {
   
      if(key == "ArrowDown")
      {
         pos = image.offsetTop + 1;
         image.style.top = pos + 'px';
      }
      else if(key == "ArrowRight")
      {
         pos  = image.style.left + 1;
         image.style.left = pos + 'px';
      }
   }
   else if(pos > 200)
   {
      if(key == "ArrowUp")
      {
         pos = image.style.top - 1;
         image.style.top = pos + 'px';
      }
      else if(key == "ArrowLeft")
      {
         pos  = image.style.left - 1;
         image.style.left = pos + 'px';
      }
   }
}