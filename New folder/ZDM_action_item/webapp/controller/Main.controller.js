sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/zdm/action/utility/Common",
	"sap/base/Log",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox",
	"sap/ui/core/BusyIndicator",
	"com/zdm/action/utility/Formatter"
], function(Controller, Common, Log, Fragment, MessageBox, BusyIndicator, Formatter) {
	"use strict";

	return Controller.extend("com.zdm.action.controller.Main", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.getOwnerComponent().getRouter().getRoute("home").attachPatternMatched(this.onRouteMatchedHome, this);
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
					"MultipleBilDoc": false,
					"CreateOn": "",
					"Site": ""
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
					Site: [],
					BillDocList: []
				},
				ValueState: {
					DriverID: "None",
					BilDoc: "None",
					ChDriverID: "None"

				},
				Visible: {
					DeleteIcon: false,
					Update: true,
					searchBut:false
				},
				Enable: {
					UpdateDriverBt: false
				}
			};

			this.getView().getModel("mMainModel").setData(oData);
			// this.getView().byId("idInputSbin").focus();
			this.getSite();
		},
		getSite: function() {

			var that = this;
			var oModel = that.getView().getModel("mMainModel");
			var url = "/sap/opu/odata/sap/ZDM_ODATA_SRV/GetSite";
			Common.getAjax(url, true).then(function(success) {
				oModel = that.getView().getModel("mMainModel");
				var res = success.d.results;
				oModel.setProperty("/DD/Site", res);

			}).catch(function(error) {
				Log.error(error);

			});
		},
		onScanInvoiceChange: function(oEvent) {
			var that = this;
			var oModel = that.getView().getModel("mMainModel");
			var tagNum = oEvent.getParameter("text");
			if (oModel.getProperty("/Key/ChDriverID")) {

				oModel.setProperty("/input/ChBillDocList", tagNum);

				this.onChangeInvoiceChange();
			} else {
				oModel.setProperty("/ValueState/ChDriverID", "Error");
			}
		},
		onScanInvoice: function(oEvent) {
			var that = this;
			var oModel = that.getView().getModel("mMainModel");
			var tagNum = oEvent.getParameter("text");
			// var multipleBillDoc = oModel.getProperty("/input/BillDocList");
			// oModel.setProperty("/input/BillDocList", tagNum);
			var fiel = that.getView().byId("idBillDoc");
			var billDocList = oModel.getProperty("/Key/BillDocList");
			var existInput = fiel.getTokens() || [];

			existInput.push(new sap.m.Token({
				text: tagNum,
				key: tagNum
			}));
			fiel.setTokens(existInput);
			fiel.setValue("");
			var billDocList = oModel.getProperty("/Key/BillDocList");
			billDocList.push(tagNum);
			oModel.setProperty("/Key/BillDocList", billDocList);

		},
		onChangeInvoice: function(oEvent) {
			var that = this;
			var oModel = that.getView().getModel("mMainModel");
			// var tagNum = oEvent.getParameter("text");
			var tagNum = oModel.getProperty("/input/BillDocList");

		},

		onUpdateDriver: function(oEvent) {
			var that = this;
			var oModel = this.getView().getModel("mMainModel");
			var driverID = oModel.getProperty("/input/DriverID");
			var BillDocList = oModel.getProperty("/Table/BillingDocDet");
			var BillDoc = "";
			BillDocList.forEach(function(item) {
				if (BillDoc === "") {
					BillDoc = BillDoc + item.Vbeln;
				} else {
					BillDoc = BillDoc + "," + item.Vbeln;
				}
			});
			var url = "/sap/opu/odata/sap/ZDM_ODATA_SRV/UpdateBillDoc?DriverID='" + driverID + "'&BillDoc='" + BillDoc + "'&$format=json";
			Common.getAjax(url, true).then(function(success) {
				oModel = that.getView().getModel("mMainModel");
				var res = success.d.results;
				MessageBox.success("Driver assigned to invoices");
				oModel.setProperty("/input/BillDocList", []);
				// that.onGetAssgined();
				oModel.setProperty("/input/DriverID", "");
				that.clearData();
			}).catch(function(error) {
				Log.error(error);
				// var message = error.responseJSON.error.message.value;

			});

		},
		lvDriverID: function(oEvent) {

			var that = this;
			var oModel = this.getView().getModel("mMainModel");
			// var driverID = oModel.getProperty("/input/DriverID");
			var driverID = oEvent.getParameter("value");
			var url = "/sap/opu/odata/sap/ZDM_ODATA_SRV/GetDriverId?Sugges='" + driverID + "'&$format=json";
			Common.getAjax(url, true).then(function(success) {
				oModel = that.getView().getModel("mMainModel");
				var res = success.d.results;

				res.forEach(function(item) {
					item.DdValue = Number(item.DdKey) + " - " + item.DdValue;
				});
				oModel.setProperty("/DD/Driver", res);

			}).catch(function(error) {
				Log.error(error);
				// var message = error.responseJSON.error.message.value;

			});

		},
		onSearch: function(oEvent) {

			var that = this;
			var oModel = this.getView().getModel("mMainModel");
			var driverID = oModel.getProperty("/Key/DriverID");
			var Site = oModel.getProperty("/input/Site");
			var SiteKeys = oModel.getProperty("/Key/Site");
			var InvoiceKeys = oModel.getProperty("/Key/BillDocList");
			var Invoice = oModel.getProperty("/input/BillDocList");
			var CrDate = oModel.getProperty("/input/CreateOn");
			if (CrDate) {
				CrDate = CrDate.split('.');
				var DateObj = new Date(CrDate);
				// var Day = DateObj.getDate() < 10 ? '0' + DateObj.getDate() : DateObj.getDate();
				// var month = Number(DateObj.getMonth()) + 1 < 10 ? '0' + (Number(DateObj.getMonth()) + 1) : Number(DateObj.getMonth()) + 1;
				// var year = DateObj.getFullYear();
				
				
				var Day = CrDate[0];
var month =CrDate[1];
var year = CrDate[2];
				CrDate = year + month + Day;
			} else {
				CrDate = "";
			}
			var site = "";
			if (SiteKeys.length > 0) {

				SiteKeys.forEach(function(item) {
					if (site === "") {
						site = item;
					} else {
						site = site + ',' + item;
					}
				});
			}
			var inv = "";
			if (InvoiceKeys.length > 0) {

				InvoiceKeys.forEach(function(item) {
					if (inv === "") {
						inv = item;
					} else {
						inv = inv + ',' + item;
					}
				});
			}
			var url = "/sap/opu/odata/sap/ZDM_ODATA_SRV/GetInvoiceLog?Driver='" + driverID + "'&Site='" + site + "'&Invoice='" + inv +
				"'&CreatedOn='" + CrDate + "'&$format=json";
			BusyIndicator.show();

			Common.getAjax(url, true).then(function(success) {
				oModel = that.getView().getModel("mMainModel");
				var res = success.d.results;
				res.forEach(function(item) {
					item.InvoiceStatusDD = [{
						DdValue: "Cancelled"
					}, {
						DdValue: "Returned"
					}];
					item.InvoiceStatus = item.InvoiceStatus ? item.InvoiceStatus : "Returned";
					item.enabled = item.Zdriverid ? true : false;
					item.ReturnDate = Formatter.ConvDateforComments(item.ReturnDate);
					item.Selected = false;

				});
				oModel.setProperty("/Table/BillingDocDet", res);
				BusyIndicator.hide();

			}).catch(function(error) {
				BusyIndicator.hide();
				Log.error(error);

			});

		},
		onDriverID: function(oEvent) {
			var oModel = this.getView().getModel("mMainModel");

			var currentKey = oModel.getProperty("/Key/DriverID");
			var currentValue = oModel.getProperty("/input/DriverID");

			if (!oEvent.getSource().getSelectedKey()) {
				oModel.setProperty("/input/DriverID", "");
				oModel.setProperty("/Key/DriverID", "");
				oModel.setProperty("/ValueState/DriverID", "Error");

			} else {
				oModel.setProperty("/ValueState/DriverID", "None");
				oModel.setProperty("/Key/lastDriverID", currentKey);
				oModel.setProperty("/input/lastDriverID", currentValue);

			}

		},
		onUpdateInvoice: function(ovent) {
			var that = this;
			var oModel = this.getView().getModel("mMainModel");
			var payloadTable = [];
			var selectedPath = oModel.getProperty("/Table/BillingDocDet");
			selectedPath.forEach(function(item) {
				var mItem = item;
				if (item.Selected) {
					var payLoadItem = {
						ReqNo: mItem.ReqNo,
						InvoiceStatus: mItem.InvoiceStatus,
						Vbeln: mItem.Vbeln
					};
					payloadTable.push(payLoadItem);
				}
			});
			if (payloadTable.length === 0) {
				MessageBox.error("Select the data");
			} else {

				var payload = {
					"Dummy": "12",
					"InvoiceLogSet": payloadTable
				};
				var url = "/sap/opu/odata/sap/ZDM_ODATA_SRV/ReturnInvLogSet";

				Common.postAjax(url, payload, true).then(function(success) {
					oModel = that.getView().getModel("mMainModel");
					var res = success.d.results;
					oModel.setProperty("/Table/BillingDocDet", res);
					BusyIndicator.hide();
					that.onSearch();
					MessageBox.success("Invoice updated successfully");

				}).catch(function(error) {
					BusyIndicator.hide();
					Log.error(error);

				});
			}
		},
		onSelectRow: function(oEvent) {

			// var ttemp = oEvent;
			var oModel = this.getView().getModel("mMainModel");

			var selectedPath = oEvent.getSource().getParent().getBindingContextPath();
			var selRow = oModel.getProperty(selectedPath);
			if (oEvent.getParameter("selected")) {
				if (Number(selRow.ReqNo)) {
					selRow.Selected = true;
				} else {
					selRow.Selected = false;
					MessageBox.error("Driver not assigned");
				}
				oModel.setProperty(selectedPath, selRow);
			}
		},
		onSelectSite: function(oEvent) {

		},
		onBilldocInput: function(oEvent) {

			var oModel = this.getView().getModel("mMainModel");
			var value = oEvent.getParameter("value");
			var billDocList = oModel.getProperty("/Key/BillDocList");
			oModel.getProperty("/Visible/searchBut",false);
			var existInput = oEvent.getSource().getTokens() || [];
			if (oEvent.getParameter("type") !== 'removed') {
				existInput.push(new sap.m.Token({
					text: value,
					key: value
				}));
				oEvent.getSource().setTokens(existInput);
				oEvent.getSource().setValue("");
				var billDocList = oModel.getProperty("/Key/BillDocList");
				billDocList.push(value);
				

			} else {
				var curValue = oEvent.getParameter("removedTokens")[0].getProperty("text");
				billDocList = billDocList.filter(function(item) {
					return item !== curValue;
				});
			}
			oModel.setProperty("/Key/BillDocList", billDocList);
			if(billDocList.length>0){
					oModel.getProperty("/Visible/searchBut",true);
				}else{
					oModel.getProperty("/Visible/searchBut",false);
				}
		}

	});
});