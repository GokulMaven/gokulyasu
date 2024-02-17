sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/eam/tr/asset/utility/Common",
	"sap/base/Log",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox",
	"com/eam/tr/asset/utility/Formatter"
], function(Controller, Common, Log, Fragment, MessageBox, Formatter) {
	"use strict";

	return Controller.extend("com.eam.tr.asset.controller.Main", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// this.getOwnerComponent().getRouter().getRoute("home").attachPatternMatched(this.onRouteMatchedHome, this);
		},
		onRouteMatchedHome: function() {

			this.clearData();
			// this.getPageDetailsProductScan();

		},
		clearData: function() {
			var oModel = this.getView().getModel("mMainModel");
			// var oData = oModel.getProperty("/FinalPage");

			var oData = {
				initData: {
					ImageVisible: false,
					DeletButton: false
				},
				input: {
					"DriverID": "",
					"lastDriverID": "",
					"BillDocList": "",
					"ChBillDocList": "",
					"ChNewDriverID": "",
					"ChOldDriverID": "",
					"MultipleBilDoc": false
				},
				Table: {
					BillingDocDet: []
				},
				DD: {
					Driver: []
				},
				Key: {
					DriverID: "",
					lastDriverID: "",
					ChDriverID: "",
					InvType:"Invoiceout"
				},
				ValueState: {
					DriverID: "None",
					BilDoc: "None",
					ChDriverID: "None"

				},
				Visible: {
					DeleteIcon: false,
					Update: true
				},
				Enable: {
					UpdateDriverBt: false
				}
			};

			this.getView().getModel("mMainModel").setData(oData);
			// this.getView().byId("idInputSbin").focus();
		}	
	});
});