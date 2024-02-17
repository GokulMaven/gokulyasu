/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comeamtrasset/zeam_tr_asset/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
