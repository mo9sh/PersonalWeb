let AutoText = document.getElementById('AutoText');

const SelectName = "Mohammad Nori";

let Current = 1;

setInterval(writetext, 200);

function writetext() {
    AutoText.innerText = SelectName.slice(0, Current);

    Current++;
    if (Current > SelectName.length) {
        Current = 1;
    }
}