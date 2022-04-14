export function convertStringDateToMilis (date) {
    const copyDate = new Date(date);
    const milis = copyDate.getTime();
    return date ? milis : null;
}

export const getFilteredArr = (arr, params) => {
    const {phrase, dateFrom, dateTo} = params;
    const filteredArr = arr.filter(({data}) => 
    data.title[0].text.toUpperCase().includes(phrase.toUpperCase())
    && (dateTo ? convertStringDateToMilis(data.date) <= convertStringDateToMilis(dateTo) : true)
    && (dateFrom ? convertStringDateToMilis(data.date) >= convertStringDateToMilis(dateFrom) : true));
    return filteredArr;
}