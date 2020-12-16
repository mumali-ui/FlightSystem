var baggageList = [];

function isEmpty() {
	return baggageList.length === 0;
}

function add(type) {
	baggageList.push(type);
	return baggageList.length;
}

function remove(id) {
	baggageList.splice(id - 1, 1);
}