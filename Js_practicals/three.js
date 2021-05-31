val = prompt("Enter Integer/String")

type = isNaN(val)? "string":"int"

if(isNaN(val)){
	prompt("first vowel is present at index : " + vowel(val))
	console.log("first vowel is present at index : " + vowel(val))
}
else {
	console.log(reverse(val))
}



function reverse(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

function vowel(str){
	for(var i = 0; i < str.length ; i++){
		if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
			return i;
		}
	}
	return -1;
}