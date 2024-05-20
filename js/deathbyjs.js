//STEP 1
/*
  function stringabc(string) {
    let splitString = string.split('');
    let sortedString = splitString.sort();
    let newString = sortedString.join('');
    console.log(newString);
  };
  stringabc('webmaster');
*/
//STEP 2
/*
  function firstUpper(string) {
    let splitString = string.split(' ');
    let newString = splitString.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log(newString);
  };
  firstUpper('the quick brown fox')
*/
//STEP 3
/*
  function vowelCount(string) {
    let matches = string.match(/[aeiou]/gi);
    let count = matches ? matches.length : 0;
    console.log(count);
  };
  vowelCount('The quick brown fox');
*/
//STEP 4
/*
  function makeRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(randomString);
  };
  makeRandomString(8);
*/
//STEP 5
/*
  function longestCountryName(arr) {
    let longestCountry = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestCountry.length) {
        longestCountry = arr[i];
      }
    }
    console.log(longestCountry);
  };
  longestCountryName(["Australia", "Germany", "United States of America"]);
  */