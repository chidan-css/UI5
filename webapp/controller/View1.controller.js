sap.ui.define([
	'sap/ui/core/mvc/Controller',
    "sap/ui/vbm/AnalyticMap",
    "sap/ui/model/json/JSONModel",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/core/util/MockServer',
    "sap/ui/Device",
    'sap/m/SearchField'
], function (Controller, AnalyticMap, JSONModel, Device,ODataModel,MockServer,SearchField) {
	"use strict";

	return Controller.extend("data.meta.controller.View1", {
        onInit: function() {
			var oModel = new JSONModel();
            oModel.loadData("../model/Data.json");
            this.getView().setModel(oModel,"device");
			// this.getView().setModel(oModel);

		// 	// set the device model
			// var oDeviceModel = new JSONModel(Device);
			// oDeviceModel.setDefaultBindingMode("OneWay");
			// this.getView().setModel(oDeviceModel, "device");
            this.mapLegend();
            this.mapSpot();
		},

        mapSpot:function()
        {
            var maps=this.getView().byId("vbi");
            var spt=new sap.ui.vbm.Spots({  
                items : {
                    path:"device>/Spots",
                    template:new sap.ui.vbm.Spot({
                        position:"{device>pos}",
                        tooltip: "{device>tooltip}",
                        type: "{device>type}",
                        text: "{device>text}"
                    })
                }
                })
                
                // labelPos:5,
                // icon:"sap-icon://arrow-bottom"35
          
                        //     new sap.ui.vbm.Spot({ type : "Success",
                        //                           text : "3232", 
                        //                           position : "130;-28;0" }) 
                        //   ]
               
            maps.addAggregation("vos",spt,false );
        // maps.addAggregation(Spotss);
        // debugger;
        },
        mapLegend:function()
        {
            var maps=this.getView().byId("vbi");
            var legend=new sap.ui.vbm.Legend({
                items:[
                    new sap.ui.vbm.LegendItem({
                        text: "Expired",
                        color:"#FF0000"
                            }),
                    new sap.ui.vbm.LegendItem({
                        text:"Active/Renewed",
                        color: "#00FF00"
                        }),
                    new sap.ui.vbm.LegendItem({
                       text:"Not renewed/Widthdrawn",
                       color: "#778899"
                        }),
                     new sap.ui.vbm.LegendItem({
                          text:"Not Available",
                          color: "#008080"
                        })
                ]
            });
            maps.setLegend(legend);
        },

        // onRegionClick:function(){
        //     debugger;
        //         // var mapSpot=this.getView().byId("vbi");
        //         var entitySet= new JSONModel();
        //         entitySet.loadData("../mockdata/Products.json");
        //         this.getView().setModel(entitySet);

        // },

        
        onPress: function(oEvent){
            // debugger;
            // this.getView().byID("vbi");
            this.getView().byId("smartTable_ResponsiveTable").setVisible(false);
            this.getView().byId("vbi").setVisible(true);
            // this.getView().byId("_IDGenTooldbar1").setVisible(false);
        },
        onClick: function(oEvent){
            // debugger;
            // this.getView().byID("vbi");
            this.getView().byId("vbi").setVisible(false);
            this.getView().byId("smartTable_ResponsiveTable").setVisible(true);
            // this.getView().byId("_IDGenTooldbar1").setVisible(true);
            

            
        },
        onPressLegend: function() {
			if (this.byId("vbi").getLegendVisible() == true) {
				this.byId("vbi").setLegendVisible(false);
				this.byId("btnLegend").setTooltip("Show legend");
			} else {
				this.byId("vbi").setLegendVisible(true);
				this.byId("btnLegend").setTooltip("Hide legend");
			}
		},
        // onPressResize: function() {
		// 	if (this.byId("btnResize").getTooltip() == "Minimize") {
		// 		if (sap.ui.Device.system.phone) {
		// 			this.byId("vbi").minimize(132, 56, 1320, 560);// Height: 3,5 rem; Width: 8,25 rem
		// 		} else {
		// 			this.byId("vbi").minimize(168, 72, 1680, 720);// Height: 4,5 rem; Width: 10,5 rem
		// 		}
		// 		this.byId("btnResize").setTooltip("Maximize");
		// 	} else {
		// 		this.byId("vbi").maximize();
		// 		this.byId("btnResize").setTooltip("Minimize");
		// 	}
		// },
        

    
		
	});
});


// sap.ui.define([
// 	"sap/ui/core/mvc/Controller",
//     'sap/ui/model/odata/v2/ODataModel',
// 	'sap/m/SearchField'
// ], function(Controller, ODataModel, SearchField) {
// 	"use strict";

// 	return Controller.extend("data.meta.controller.View1", {
//         _smartFilterBar: null,
// 		_oModel: null,

// 		onInit: function() {
// 			this._oModel = new ODataModel("/MockDataServiceExample1", true);
// 			this.getView().setModel(this._oModel);

// 			this._smartFilterBar = this.getView().byId("smartFilterBar");
// 		},

// 		toggleUpdateMode: function() {
// 			var oButton = this.getView().byId("toggleUpdateMode");

// 			if (!this._smartFilterBar || !oButton) {
// 				return;
// 			}

// 			var bLiveMode = this._smartFilterBar.getLiveMode();
// 			if (bLiveMode) {
// 				oButton.setText("Change to 'LiveMode'");
// 			} else {
// 				oButton.setText("Change to 'ManualMode'");
// 			}

// 			this._smartFilterBar.setLiveMode(!bLiveMode);
// 		},

// 		_setButtonText: function() {
// 			var oButton = this.getView().byId("toggleUpdateMode");

// 			if (!this._smartFilterBar || !oButton) {
// 				return;
// 			}

// 			var bLiveMode = this._smartFilterBar.getLiveMode();
// 			if (bLiveMode) {
// 				oButton.setText("Change to 'LiveMode'");
// 			} else {
// 				oButton.setText("Change to 'ManualMode'");
// 			}
// 		},

// 		onExit: function () {
// 			if (this._oModel) {
// 				this._oModel.destroy();
// 				this._oModel = null;
// 			}
// 		}

// 	});
// });
