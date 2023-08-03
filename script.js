async function getCoderData() {
    
    var response = await fetch("https://api.github.com/users/gesmirshyti");
    var coderData = await response.json();
    console.log(coderData);
} 
getCoderData();