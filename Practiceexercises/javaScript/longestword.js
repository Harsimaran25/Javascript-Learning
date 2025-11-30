function Longest(sen) {
  // Replace all non-alphanumeric characters (excluding space) with space
  let cleaned = sen.replace(/[^a-zA-Z0-9 ]/g, " ");
  console.log(cleaned);
  /*[^a-zA-Z0-9 ]/g is a regex pattern that matches any character that is not:
[^...]: A negated character class, meaning it matches any character not in the brackets.
a lowercase letter (a-z)
g means global not just the first match
an uppercase letter (A-Z)

a digit (0-9)

a space ( )

.replace(..., " ") replaces those characters with a space, so words stay separated.
*/
  // Split the cleaned string into words
  let words = cleaned.split(" "); //split using space as separator
  console.log(words);
  // Find the longest word
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(Longest("time5 $%$ is long"));

//another program to replace duplicates in a string

function ReplaceDup(sent) {
  let result = "";
  let found = "";

  for (let c = 0; c < sent.length; c++) {
    let chara = sent[c];
    if (found.indexOf(chara) === -1) {
      result = result + chara;
      found = found + chara;
    }
  }
  return result;
}

const p = ReplaceDup("boo");
console.log(p);
console.log(ReplaceDup("aabcdboom"));
