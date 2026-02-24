function calculateElapsed() {

    let rate = parseFloat(document.getElementById("rate").value);
    let startTimeInput = document.getElementById("startTime").value;

    if (!rate || !startTimeInput) {
        alert("Please enter both rate and start time.");
        return;
    }

    let startTime = new Date(startTimeInput);
    let now = new Date();

    let diffMilliseconds = now - startTime;

    if (diffMilliseconds < 0) {
        alert("Start time cannot be in the future.");
        return;
    }

    let diffSeconds = Math.floor(diffMilliseconds / 1000);
    let diffMinutes = Math.floor(diffSeconds / 60);
    let diffHoursDecimal = diffMinutes / 60;

    let hours = Math.floor(diffMinutes / 60);
    let minutes = diffMinutes % 60;

    let totalPay = rate * diffHoursDecimal;

    document.getElementById("timeElapsed").innerText =
        "Time Elapsed: " + hours + "h " + minutes + "m";

    document.getElementById("hoursWorked").innerText =
        "Hours (decimal): " + diffHoursDecimal.toFixed(2);

    document.getElementById("result").innerText =
        "Total Earned: $" + totalPay.toFixed(2);
}
