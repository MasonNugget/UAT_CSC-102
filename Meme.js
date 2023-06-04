//Mason Nugent
function start()
{
    //Controls the start button and disables it once being pressed.
    //Also calls the animate funtion, which moves the image.
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    var memeImage = document.getElementById("memeImage");
    var position = 0;//Initial position of the meme

    //Define the animation function
    function animate(){
        position += 1; 

        memeImage.style.top = position + "px";
        memeImage.style.left = position + "px";


        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        if (position > windowWidth || position > windowHeight){
            position = 0;
    }
    //calls itself to create a continuous animation loop
    animationId = requestAnimationFrame(animate);
}
animate();//Calls the animation function to start the animation
}


function stop()
{
    
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    cancelAnimationFrame(animationId);//After clicking the stop button, the animation loop will be canceled.
}