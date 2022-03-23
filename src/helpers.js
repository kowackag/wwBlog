export function convertStringDateToMilis (date) {
    const copyDate = new Date(date);
    const milis = copyDate.getTime();
    return date ? milis : null;
}