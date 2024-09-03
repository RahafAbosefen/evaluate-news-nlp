function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    let regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(inputText);
}

export { checkForURL };
