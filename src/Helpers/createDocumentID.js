function createDocumentID(name) {
    const date = new Date();
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const dayOfMonth = `${date.getDate()}`.padStart(2, 0);
    const year = date.getFullYear().toString();

    const initials = `${name.split(' ')[0][0].toUpperCase()}${name.split(' ')[1][0].toUpperCase()}`;
    const documentID = initials + month + dayOfMonth + year[2] + year[3]

    return documentID;
}

export default createDocumentID;