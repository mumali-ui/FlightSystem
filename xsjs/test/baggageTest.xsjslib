$.import("xsjs", "baggage");

describe("baggage test suite", function () {
	var baggage = $.xsjs.baggage,
		newBaggage;

	it("starts empty", function () {
		expect(baggage.isEmpty()).toBeTruthy();
	});

	it("add a new baggage", function () {
		newBaggage = baggage.add("20kg");
		expect(newBaggage).toBeDefined();
		expect(baggage.isEmpty()).toBeFalsy();
	});

	it("remove the baggage", function () {
		baggage.remove(newBaggage);
		expect(baggage.isEmpty()).toBeTruthy();
	});
});