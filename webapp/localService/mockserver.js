sap.ui.define([
	"sap/ui/core/util/MockServer",
    'sap/ui/core/mvc/Controller'
	
	
], function(MockServer) {
	"use strict";

	return {
		init: function() {
			// mock the service call from manifest.json
			var oMockServer = new MockServer({
				rootUri: "http://services.odata.org/V3/Northwind/Northwind.svc/"
			});

			// configure
			// MockServer.config({
			// 	autoRespond: true,
			// 	autoRespondAfter: 500
			// });

			// simulate
			oMockServer.simulate("../localService/metadata.xml", "../localService/mockdata");


            // oMockServer.simulate("../localService/metadata.xml", {
            //     sMockdataBaseUrl: "../localService/Mockdata",
            //     bGenerateMissingMockData: true
            // });

			// start
			oMockServer.start();

            // var oModel = new ODataModel("http://services.odata.org/V3/Northwind/Northwind.svc/", {
			// 	defaultCountMode: "Inline"
			// });

			// var oView = this.getView();
			// oView.setModel(oModel);
		
		}
	};

});
