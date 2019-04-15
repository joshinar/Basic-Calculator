//variable declaration
const displayNum = document.querySelector('.displayNum');
const clickNum = document.querySelectorAll('input[type=button]');
const clearBtn = document.querySelector('button');
// Setting displayNum value to ''
document.addEventListener('keyup', function(e) {
	if (e.key == 'Escape') {
		displayNum.value = '';
	}
});
// working with calcaulator
clickNum.forEach((num) => {
	num.className = 'number';
	num.addEventListener('click', function(e) {
		if (e.target.value == '=') {
			displayNum.value = eval(displayNum.value);
		} else if (e.target.value == '>') {
			displayNum.value = displayNum.value.substring(0, displayNum.value.length - 1);
		} else {
			displayNum.value += e.target.value;
		}
	});
});

clearBtn.addEventListener('click', (e) => {
	displayNum.value = '';
	e.preventDefault();
});
