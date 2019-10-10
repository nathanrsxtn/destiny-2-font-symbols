var container = document.querySelector("#container");
var missingContainer = document.querySelector("#missingContainer");
var block = "[{7,15},{8,8},{8,10},{8,12},{8,14},{8,15},{9,8},{9,15},{10,8},{10,15},{11,8},{11,15},{12,8},{12,10},{12,12},{12,14},{12,15},{13,15}]";
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
// 0: requestAnimationFrame
// 1: setTimeout
// 2: while
var loopMode = parseInt(loop.value);
var lastTime = 0;
var padding = 6;
var fontSize = 12;
var currentCode = parseInt(start.value);
var heighestCode = parseInt(end.value);
var exists = [];
canvas.style.width = fontSize + padding + padding;
canvas.style.height = fontSize + padding + padding;
canvas.width = fontSize + padding + padding;
canvas.height = fontSize + padding + padding;
ctx.textBaseline = "hanging";
ctx.textAlign = "left";

function checkCharacter(speed) {
    while (currentCode <= heighestCode) {
        current.value = "0x" + currentCode.toString(16).toUpperCase();
        speedBox.value = Math.trunc((speed || performance.now()) - lastTime) + "ms";
        lastTime = speed || performance.now();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(String.fromCharCode(currentCode), padding, padding);
        var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        var pixels = [];
        var charExists = false;
        var textMetrics = ctx.measureText(String.fromCharCode(currentCode));
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.width; y++) {
                if (data[((x + y * canvas.width) * 4) + 3] > 0 && textMetrics.width != 9) {
                    pixels.push({
                        x,
                        y
                    });
                    charExists = true;
                };
            }
        };
        var element = document.createElement("span");
        element.title = "U+" + currentCode.toString(16).toUpperCase();
        element.onclick = function () {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
        }
        element.innerHTML = String.fromCharCode(currentCode) + "<br><small>&amp#" + currentCode + ";</small>" + "<small>U+" + currentCode.toString(16).toUpperCase() + "</small>";
        //element.innerHTML = String.fromCharCode(currentCode);
        if (!charExists) {
            missingContainer.appendChild(element);
        } else {
            container.appendChild(element);
            exists.push({
                string: String.fromCharCode(currentCode),
                codeBase10: currentCode,
                codeBase16: currentCode.toString(16).toUpperCase()
            });
        }
        currentCode++;
        if (loopMode != 2) {
            break;
        }
    }
    if (currentCode > heighestCode) {
        canvas.remove();
        speedBox.value = Math.trunc(performance.now() - startTime) + "ms";
        console.log(exists);
    } else {
        if (loopMode === 0) {
            window.requestAnimationFrame(checkCharacter);
        } else if (loopMode === 1) {
            setTimeout(checkCharacter, 0);
        }
    }
}
