jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"flightsystem/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"flightsystem/test/integration/pages/App",
	"flightsystem/test/integration/pages/Browser",
	"flightsystem/test/integration/pages/Master",
	"flightsystem/test/integration/pages/Detail",
	"flightsystem/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "flightsystem.view."
	});

	sap.ui.require([
		"flightsystem/test/integration/NavigationJourneyPhone",
		"flightsystem/test/integration/NotFoundJourneyPhone",
		"flightsystem/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});