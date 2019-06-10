function produceDrivingRange(blockRange) {
	return function inOrOutOfRange(firstRange, secondRange) {

		let firstRangeInteger = parseInt(firstRange.replace(/th/, ''))
		let secondRangeInteger = parseInt(secondRange.replace(/th/, ''))

		if (firstRangeInteger > secondRangeInteger) {
			if ((firstRangeInteger - secondRangeInteger) < blockRange) {
				return `within range by ${(firstRangeInteger - secondRangeInteger) - blockRange}`
			} else {
				return `${(firstRangeInteger - secondRange) - blockRange} blocks out of range`
			}
		} else {
			if ((secondRangeInteger - firstRangeInteger) > blockRange) {
				return `${(secondRangeInteger - firstRangeInteger) - blockRange} blocks out of range`
			} else {
				return `within range by ${Math.abs((secondRangeInteger - firstRangeInteger) - blockRange)}`
			}
		}

	}
}

function produceTipCalculator(tipPercent) {
	return function calculatesTip(fare) {
		return tipPercent * fare;
	}
}

function createDriver() {
	let driverId = 0;

	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}

		
	}
}

 // is a function that returns a Driver class. The class has reference to a driverId that is 
 // incremented each time a new driver is created. The rest of the code base does not have 
 // access driverId