function myFunction() {
    navigator.clipboard.writeText("LordImmaculate");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "LordImmaculate";
}