function firstChar(text) {
  // your code here
	if(!text){
		return '';
	}
	let extractLetter = text[0];
	return extractLetter;
	
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
