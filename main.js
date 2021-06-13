Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality:90,

    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src="+data_uri+">"
        
});
}
console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("MobileNet",model_done);

function model_done(){
    console.log("Model Loaded");
}
function check(){
    img= document.getElementById("captured_img");
    classifier.classify(img, get_result);
}

function get_result(error, results){
    if (error){
        console.log(error);
    }else{
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}