function createHumanDate() {
    const date = new Date();
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const dayOfMonth = `${date.getDate()}`.padStart(2, 0);
    const year = date.getFullYear().toString();
    const dateString = `${month}/${dayOfMonth}/${year}`;

    return dateString;
}

export default createHumanDate;