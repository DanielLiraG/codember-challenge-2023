/**
 *   function to check all the words in text
 *   @param {string} text Text with words to check
 *   @returns {string} Text with number of word
 */
function checkText(text) {
  const wordsArray = text.toLowerCase().split(" ");
  const wordsObject = {};

  wordsArray.forEach((word) => {
    if (Object.keys(wordsObject).includes(word))
      return (wordsObject[word] = wordsObject[word] + 1);

    wordsObject[word] = 1;
  });

  const textChecked = Object.keys(wordsObject).reduce((acc, curr) => {
    return acc + `${curr}${wordsObject[curr]}`;
  }, "");

  return textChecked;
}

module.exports = { checkText };
