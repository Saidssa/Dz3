//№1
function myReverse(string) {
  let newString = "";
  const letters = string.split("");
  for (let i = letters.length - 1; i >= 0; i--) {
    newString += letters[i];
  }
  console.log(newString);
}
myReverse("123456789");

//№2
const capitalizeString = (string) => {
  const upperLetter = string.charAt(0).toUpperCase();
  const lowerLetter = string.substr(1).toLowerCase();
  console.log(upperLetter + lowerLetter);
};
capitalizeString("ЕВГЕНИЙ");

//№3
function depersonalize(strings) {
  const words = strings.split(" ");
  const newWords = words
    .map((letters) =>
      letters
        .split("")
        .fill("_", 1, letters.length - 1)
        .join("")
    )
    .join(" ");
  console.log(newWords);
}
depersonalize("Киселев Евгений Дмитриевич");
