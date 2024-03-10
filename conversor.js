
function decimalToBinary(decimal) {
    if (decimal === '') {
        document.getElementById('binaryOutput').textContent = '';
        return;
    }

    const binary = Number(decimal).toString(2);
    document.getElementById('binaryOutput').textContent = binary;
}

function binaryToDecimal(binary) {
    if (binary === '') {
        document.getElementById('decimalOutput').textContent = '';
        return;
    }

    const decimal = parseInt(binary, 2);
    document.getElementById('decimalOutput').textContent = decimal;
}
