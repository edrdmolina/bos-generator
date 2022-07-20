function formatPhoneNumber(input) {
    if (input.length === 3 || input.length === 7) {
        input += '-';
    }
    return input;
}

export default formatPhoneNumber;