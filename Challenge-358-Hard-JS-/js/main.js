



var resultOne = null;
var fileInputOne = document.getElementById('input');
var rawBtn = document.getElementById('DisplayRaw');
var processedBtn = document.getElementById('DisplayProcessed');


function processFunction(r) {

    return "Not completed"
}



window.onload = function () {
    fileInputOne.addEventListener('change', function (e) {
        var file = fileInputOne.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();


            reader.onload = function (e) {
                resultOne = reader.result;
                console.log("resultOne loaded");
            }
            reader.readAsText(file);
        }
        else {
            fileDisplayArea.innerText = "File not supported!"
        }



    });

}

processedBtn.onclick = function () {
    let display_p = document.getElementById('processedInput');

    if ((resultOne === null)) {
        display_p.innerText = "no input";
    }
    else {
        display_p.innerText = processFunction(resultOne);
    }
};
rawBtn.onclick = function () {
    let display_p = document.getElementById('unprocessedInput');

    if (resultOne !== null) {
        display_p.innerText = resultOne;
    }
    else {
        display_p.innerText = "no input";
    }
}

