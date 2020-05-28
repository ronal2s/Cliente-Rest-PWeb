export function toCapitalize(text: string) {
    return text[0].toUpperCase() + text.substr(1);
}

export function isEmpty(text: string) {
    return text.length == 0;
}