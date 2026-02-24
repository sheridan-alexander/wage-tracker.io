function calculateWage() {
    let rate = document.getElementById("rate").value;
    let hours = document.getElementById("hours").value;

    let total = rate * hours;

    document.getElementById("result").innerText = 
        "Total Pay: $" + total.toFixed(2);
}
