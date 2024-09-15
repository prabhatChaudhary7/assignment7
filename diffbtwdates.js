function convertToDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); 
}
function getDateDifference(date1Str, date2Str) {
    const date1 = convertToDate(date1Str);
    const date2 = convertToDate(date2Str);
    const timeDifference = date2 - date1;
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    return dayDifference;
}
const date1 = "20-07-2019";
const date2 = "05-01-2021";
const difference = getDateDifference(date1, date2);

console.log(`Difference = ${difference} days`);
