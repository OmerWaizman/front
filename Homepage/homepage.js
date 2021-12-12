var images = ["model1.jpg", "model2.jpg", "model3.jpg","model4.jpg","model5.jpg","model6.jpg","model7.jpg","model8.jpg"];
var i = 0;
function play() {
    setTimeout(function () {
        document.getElementById("img").src = images[i];
        i++;
        if (i < images.length) {
            play();
        } else {
            i = 0;
        }

    }, 500)
};






