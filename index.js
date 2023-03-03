function getPercent(percent, num) {
	const error = false;
	if(typeof(percent)==='number'&& typeof(num)==='number'){
		return num / 100 * percent;
	} else {
		return error;
	}
	
}

module.exports ={getPercent}