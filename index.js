function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {

    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distanceToTravel = Math.abs( end - start );
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
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


// function produceDrivingRange(blockRange) {
// 	return function inOrOutOfRange(firstRange, secondRange) {

// 		let firstRangeInteger = parseInt(firstRange.replace(/th/, ''))
// 		let secondRangeInteger = parseInt(secondRange.replace(/th/, ''))

// 		if (firstRangeInteger > secondRangeInteger) {
// 			if ((firstRangeInteger - secondRangeInteger) < blockRange) {
// 				return `within range by ${(firstRangeInteger - secondRangeInteger) - blockRange}`
// 			} else {
// 				return `${(firstRangeInteger - secondRange) - blockRange} blocks out of range`
// 			}
// 		} else {
// 			if ((secondRangeInteger - firstRangeInteger) > blockRange) {
// 				return `${(secondRangeInteger - firstRangeInteger) - blockRange} blocks out of range`
// 			} else {
// 				return `within range by ${Math.abs((secondRangeInteger - firstRangeInteger) - blockRange)}`
// 			}
// 		}

// 	}
// }