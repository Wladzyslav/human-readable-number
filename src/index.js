module.exports = function toReadable (number) {
    let str = number.toString();

	let zero = ['zero'],
      units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
			ftentotwen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
			dozen = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
			hundred = ['hundred'];

	if(number == 0) return zero[0];
	else if (str.length == 1){
		return `${units[number - 1]}`;
	}
	else if (str.length == 2){
		if(number % 10 == 0){
			return `${dozen[(number / 10) - 1]}`;
		}
		else if(number >= 11 && number < 16){
			return `${ftentotwen[number % 10 - 1]}`;
		}	
		else if(number >= 16 && number < 20){
			return `${ftentotwen[number % 10]}`;
		}	
		return `${dozen[Math.trunc(number / 10) - 1]} ${units[number % 10 - 1]}`;
	}
	else if(str.length == 3){
		if(number % 100 == 0){
			return `${units[(number / 100) - 1]} ${hundred[0]}`;
		}
		else if(number % 100 != 0){
			let remainder = number % 100,
				strRemainder = remainder.toString();
			if(strRemainder.length == 2){
				if(remainder % 10 == 0){
					return  `${units[Math.trunc(number / 100) - 1]} ${hundred[0]} ${dozen[remainder / 10 - 1]}`
				}
				else if(remainder > 19){
					return `${units[Math.trunc(number / 100) - 1]} ${hundred[0]} ${dozen[Math.trunc(remainder / 10) - 1]} ${units[Math.trunc(remainder % 10) - 1]}`
				}
				else if(remainder >= 11 && remainder < 16){
					return `${units[Math.trunc(number / 100) - 1]} ${hundred[0]} ${ftentotwen[remainder % 10 - 1]}`
				}
				return `${units[Math.trunc(number / 100) - 1]} ${hundred[0]} ${ftentotwen[remainder % 10]}`
			}
			else if(strRemainder.length == 1){
				return `${units[Math.trunc(number / 100) - 1]} ${hundred[0]} ${units[remainder - 1]}`
			}
		}
	}
}