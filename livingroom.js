status = ""; //empty var for value of status

function preload() {
    img = loadImage("living room.jpg"); //image loaded
}

function setup() {
    canvas = createCanvas(750, 500); //canvas created
    canvas.position(380, 150); //canvas position 
    obj_detector = ml5.objectDetector("cocossd", modelloaded); //cocossd model initialized
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; //html status changed
}

function modelloaded() {
    console.log("Model is loaded!"); //check for initialisation of model
    status = true; //status updated to model working(true)
    obj_detector.detect(img, gotResults); //image set to detection
}

function gotResults(error, results) {
    if (error) {
        console.log(error); //errors to be written on console
    } else {
        console.log(results); //results to be written on console
    }
}

function draw() {
    image(img, 0, 0, 750, 500);
}