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
}