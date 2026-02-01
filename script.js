function calculate() {
    let area = document.getElementById("area").value;
    let lux = document.getElementById("lux").value;
    let power = area * lux * 0.01;

    document.getElementById("result").innerText =
        "Estimated lighting power: " + power.toFixed(1) + " W";
}