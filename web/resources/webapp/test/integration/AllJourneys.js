jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Connections in the list
// * All 3 Connections have at least one HisFlights

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
		"flightsystem/test/integration/MasterJourney",
		"flightsystem/test/integration/NavigationJourney",
		"flightsystem/test/integration/NotFoundJourney",
		"flightsystem/test/integration/BusyJourney",
		"flightsystem/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});