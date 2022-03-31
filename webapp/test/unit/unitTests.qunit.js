/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"data/meta/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
