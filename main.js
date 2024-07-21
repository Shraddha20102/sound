function start(){
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-h_PNCC8D/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Teachable machine is linked")
    model.classify(showResult)
}

function showResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);

        // Random color for text
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        document.getElementById("result_label").style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
        
        // Reset all images first
        document.getElementById("animal_image").src = "";

        // Display appropriate image based on classification
        if (result[0].label === "Background Noise") {
            document.getElementById("animal_image").src = "listen.gif";
        } else if (result[0].label === "Barking") {
            document.getElementById("animal_image").src = "dog_image.gif";
        } else if (result[0].label === "Meowing") {
            document.getElementById("animal_image").src = "cat_image.gif";
        }

        document.getElementById("result_label").innerHTML = "Detected voice is of: " + result[0].label;
    }
}