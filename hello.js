//color chosen by user
var colorChosen = null;
//image top position
var topPos = 0;
//image left position
var leftPos = 0;
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
   leftPos = image.style.left;
   topPos = image.style.top;
}

/*sets movement of image to occur
every 5 millisecs*/
function setAnime(event)
{
   key = event.key;
   clearInterval(interval);
   interval = setInterval(moveAnime, 10);
}

/*moves image 1px down until image
top at 350px*/
function moveAnime()
{
   if(key == "ArrowDown")
   {
      if(topPos < 380)
      {
         topPos = topPos + 1;
         image.style.top = topPos + 'px';
      }
   }
   else if(key == "ArrowRight")
   {
      if(leftPos < 380)
      {
         leftPos  = leftPos + 1;
         image.style.left = leftPos + 'px';
         //console.log("right");
      }
   }
   else if(key == "ArrowUp")
   {
      if(topPos > 200)
      {
         console.log(topPos + "before");
         topPos = topPos - 1;
         console.log(topPos + "after");
         image.style.top = topPos + 'px';
      }
   }
   else if(key == "ArrowLeft")
   {
      if(leftPos > 200)
      {
         leftPos  = leftPos - 1;
         image.style.left = leftPos + 'px';
         //console.log("left");
      }
   }
}