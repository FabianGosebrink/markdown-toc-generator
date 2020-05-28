function addToClipboard(value) {
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el)
}

function copyToClipboard() {
    var value = document.getElementById('result').innerHTML;
    addToClipboard(value)
    console.log("copied....")
    showSuccess();
}

function showSuccess() {
    var x = document.getElementById("alert");
    if (!x) {
        return;
    }

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}