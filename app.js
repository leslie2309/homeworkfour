function getSizeValue(valueWithUnit, unit) {
	return parseInt(valueWithUnit.split(unit)[0]);
}

function balloon(event) {
	switch (event.keyCode) {
		case 68:
			changeSize('.balloon', 10, 'down');
			break;
		case 73:
			changeSize('.balloon', 10,);
			break;
		default:
			return;
	}
}

function changeSize(element, amount, direction) {
	element = document.querySelector(element);
	let elementSize = window.getComputedStyle(element).fontSize;
	let elementSizeValue = getSizeValue(elementSize, 'px');

	if (direction === undefined) {
		elementSizeValue += amount;
	} else elementSizeValue -= amount;
	
	if (0 < elementSizeValue && elementSizeValue <= 60) {
		console.log(elementSize);
		elementSize = Math.ceil(elementSizeValue) + 'px';
		element.style.fontSize = elementSize; 
	} else if( elementSizeValue <= 0){ done(element)
		} else boom(element);
}
function done(element) {
	element.firstChild.nodeValue = 'Done';
	document.querySelector("p").style.cssText= "color:red; font-size:30px; font-family:'Sansita', sans-serif; font-family: 'Roboto Condensed', sans-serif;";
	document.removeEventListener('keydown', balloon, true);
}

function boom(element) {
	element.firstChild.nodeValue = '💥';
	document.removeEventListener('keyup', balloon, true);
}


document.addEventListener('keydown', balloon, true);

