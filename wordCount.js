const ignore = /[\.,]/g;
const seperator = ' ';
export function wordCount(sentence){
    return sentence
    .replace(ignore, '')
    .toLowerCase()
    .split(seperator)
    .reduce((prev, current) => {
        prev[current] = prev[curent] + 1 || 1;
        return prev;
    }, {});
}