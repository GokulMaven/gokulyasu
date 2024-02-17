/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/zdm/action/Component-preload",
	"modules": {
		"com/zdm/action/Component.js": "sap.ui.define([\r\n\t\"sap/ui/core/UIComponent\",\r\n\t\"sap/ui/Device\",\r\n\t\"com/zdm/action/model/models\",\r\n\t\"sap/ui/model/json/JSONModel\"\r\n], function(UIComponent, Device, models,JSONModel) {\r\n\t\"use strict\";\r\n\r\n\treturn UIComponent.extend(\"com.zdm.action.Component\", {\r\n\r\n\t\tmetadata: {\r\n\t\t\tmanifest: \"json\"\r\n\t\t},\r\n\r\n\t\t/**\r\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\r\n\t\t * @public\r\n\t\t * @override\r\n\t\t */\r\n\t\tinit: function() {\r\n\t\t\t// call the base component's init function\r\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\r\n\r\n\t\t\t// set the device model\r\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\r\n\t\t\tthis.getRouter().initialize();\r\n\t\t\tvar oModel = new JSONModel();\r\n\t\t\tthis.setModel(oModel);\r\n\t\t\tthis.setModel(oModel, \"mMainModel\");\r\n\t\t}\r\n\t});\r\n});",
		"com/zdm/action/model/models.js": "sap.ui.define([\r\n\t\"sap/ui/model/json/JSONModel\",\r\n\t\"sap/ui/Device\"\r\n], function(JSONModel, Device) {\r\n\t\"use strict\";\r\n\r\n\treturn {\r\n\r\n\t\tcreateDeviceModel: function() {\r\n\t\t\tvar oModel = new JSONModel(Device);\r\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\r\n\t\t\treturn oModel;\r\n\t\t}\r\n\r\n\t};\r\n});",
		"com/zdm/action/controller/Main.controller.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\",\r\n\t\"com/zdm/action/utility/Common\",\r\n\t\"sap/base/Log\",\r\n\t\"sap/ui/core/Fragment\",\r\n\t\"sap/m/MessageBox\",\r\n\t\"sap/ui/core/BusyIndicator\",\r\n\t\"com/zdm/action/utility/Formatter\"\r\n], function(Controller, Common, Log, Fragment, MessageBox, BusyIndicator, Formatter) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.zdm.action.controller.Main\", {\r\n\t\tonInit: function() {\r\n\t\t\tvar oRouter = sap.ui.core.UIComponent.getRouterFor(this);\r\n\t\t\tthis.getOwnerComponent().getRouter().getRoute(\"home\").attachPatternMatched(this.onRouteMatchedHome, this);\r\n\t\t},\r\n\t\tonRouteMatchedHome: function() {\r\n\r\n\t\t\tthis.clearData();\r\n\t\t\t// this.getPageDetailsProductScan();\r\n\r\n\t\t},\r\n\t\tclearData: function() {\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\t// var oData = oModel.getProperty(\"/FinalPage\");\r\n\r\n\t\t\tvar oData = {\r\n\t\t\t\tinitData: {\r\n\t\t\t\t\tImageVisible: false,\r\n\t\t\t\t\tDeletButton: false\r\n\t\t\t\t},\r\n\t\t\t\tinput: {\r\n\t\t\t\t\t\"DriverID\": \"\",\r\n\t\t\t\t\t\"lastDriverID\": \"\",\r\n\t\t\t\t\t\"BillDocList\": \"\",\r\n\t\t\t\t\t\"ChBillDocList\": \"\",\r\n\t\t\t\t\t\"ChNewDriverID\": \"\",\r\n\t\t\t\t\t\"ChOldDriverID\": \"\",\r\n\t\t\t\t\t\"MultipleBilDoc\": false,\r\n\t\t\t\t\t\"CreateOn\": \"\",\r\n\t\t\t\t\t\"Site\": \"\"\r\n\t\t\t\t},\r\n\t\t\t\tTable: {\r\n\t\t\t\t\tBillingDocDet: []\r\n\t\t\t\t},\r\n\t\t\t\tDD: {\r\n\t\t\t\t\tDriver: []\r\n\t\t\t\t},\r\n\t\t\t\tKey: {\r\n\t\t\t\t\tDriverID: \"\",\r\n\t\t\t\t\tlastDriverID: \"\",\r\n\t\t\t\t\tChDriverID: \"\",\r\n\t\t\t\t\tSite: [],\r\n\t\t\t\t\tBillDocList: []\r\n\t\t\t\t},\r\n\t\t\t\tValueState: {\r\n\t\t\t\t\tDriverID: \"None\",\r\n\t\t\t\t\tBilDoc: \"None\",\r\n\t\t\t\t\tChDriverID: \"None\"\r\n\r\n\t\t\t\t},\r\n\t\t\t\tVisible: {\r\n\t\t\t\t\tDeleteIcon: false,\r\n\t\t\t\t\tUpdate: true\r\n\t\t\t\t},\r\n\t\t\t\tEnable: {\r\n\t\t\t\t\tUpdateDriverBt: false\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\tthis.getView().getModel(\"mMainModel\").setData(oData);\r\n\t\t\t// this.getView().byId(\"idInputSbin\").focus();\r\n\t\t\tthis.getSite();\r\n\t\t},\r\n\t\tgetSite: function() {\r\n\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\tvar url = \"/sap/opu/odata/sap/ZDM_ODATA_SRV/GetSite\";\r\n\t\t\tCommon.getAjax(url, true).then(function(success) {\r\n\t\t\t\toModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t\tvar res = success.d.results;\r\n\t\t\t\toModel.setProperty(\"/DD/Site\", res);\r\n\r\n\t\t\t}).catch(function(error) {\r\n\t\t\t\tLog.error(error);\r\n\r\n\t\t\t});\r\n\t\t},\r\n\t\tonScanInvoiceChange: function(oEvent) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\tvar tagNum = oEvent.getParameter(\"text\");\r\n\t\t\tif (oModel.getProperty(\"/Key/ChDriverID\")) {\r\n\r\n\t\t\t\toModel.setProperty(\"/input/ChBillDocList\", tagNum);\r\n\r\n\t\t\t\tthis.onChangeInvoiceChange();\r\n\t\t\t} else {\r\n\t\t\t\toModel.setProperty(\"/ValueState/ChDriverID\", \"Error\");\r\n\t\t\t}\r\n\t\t},\r\n\t\tonScanInvoice: function(oEvent) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\tvar tagNum = oEvent.getParameter(\"text\");\r\n\t\t\t// var multipleBillDoc = oModel.getProperty(\"/input/BillDocList\");\r\n\t\t\t// oModel.setProperty(\"/input/BillDocList\", tagNum);\r\n\t\t\tvar fiel = that.getView().byId(\"idBillDoc\");\r\n\t\t\tvar billDocList = oModel.getProperty(\"/Key/BillDocList\");\r\n\t\t\tvar existInput = fiel.getTokens() || [];\r\n\r\n\t\t\texistInput.push(new sap.m.Token({\r\n\t\t\t\ttext: tagNum,\r\n\t\t\t\tkey: tagNum\r\n\t\t\t}));\r\n\t\t\tfiel.setTokens(existInput);\r\n\t\t\tfiel.setValue(\"\");\r\n\t\t\tvar billDocList = oModel.getProperty(\"/Key/BillDocList\");\r\n\t\t\tbillDocList.push(tagNum);\r\n\t\t\toModel.setProperty(\"/Key/BillDocList\", billDocList);\r\n\r\n\t\t},\r\n\t\tonChangeInvoice: function(oEvent) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t// var tagNum = oEvent.getParameter(\"text\");\r\n\t\t\tvar tagNum = oModel.getProperty(\"/input/BillDocList\");\r\n\r\n\t\t},\r\n\r\n\t\tonUpdateDriver: function(oEvent) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\tvar driverID = oModel.getProperty(\"/input/DriverID\");\r\n\t\t\tvar BillDocList = oModel.getProperty(\"/Table/BillingDocDet\");\r\n\t\t\tvar BillDoc = \"\";\r\n\t\t\tBillDocList.forEach(function(item) {\r\n\t\t\t\tif (BillDoc === \"\") {\r\n\t\t\t\t\tBillDoc = BillDoc + item.Vbeln;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tBillDoc = BillDoc + \",\" + item.Vbeln;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tvar url = \"/sap/opu/odata/sap/ZDM_ODATA_SRV/UpdateBillDoc?DriverID='\" + driverID + \"'&BillDoc='\" + BillDoc + \"'&$format=json\";\r\n\t\t\tCommon.getAjax(url, true).then(function(success) {\r\n\t\t\t\toModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t\tvar res = success.d.results;\r\n\t\t\t\tMessageBox.success(\"Driver assigned to invoices\");\r\n\t\t\t\toModel.setProperty(\"/input/BillDocList\", []);\r\n\t\t\t\t// that.onGetAssgined();\r\n\t\t\t\toModel.setProperty(\"/input/DriverID\", \"\");\r\n\t\t\t\tthat.clearData();\r\n\t\t\t}).catch(function(error) {\r\n\t\t\t\tLog.error(error);\r\n\t\t\t\t// var message = error.responseJSON.error.message.value;\r\n\r\n\t\t\t});\r\n\r\n\t\t},\r\n\t\tlvDriverID: function(oEvent) {\r\n\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\t// var driverID = oModel.getProperty(\"/input/DriverID\");\r\n\t\t\tvar driverID = oEvent.getParameter(\"value\");\r\n\t\t\tvar url = \"/sap/opu/odata/sap/ZDM_ODATA_SRV/GetDriverId?Sugges='\" + driverID + \"'&$format=json\";\r\n\t\t\tCommon.getAjax(url, true).then(function(success) {\r\n\t\t\t\toModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t\tvar res = success.d.results;\r\n\r\n\t\t\t\tres.forEach(function(item) {\r\n\t\t\t\t\titem.DdValue = Number(item.DdKey) + \" - \" + item.DdValue;\r\n\t\t\t\t});\r\n\t\t\t\toModel.setProperty(\"/DD/Driver\", res);\r\n\r\n\t\t\t}).catch(function(error) {\r\n\t\t\t\tLog.error(error);\r\n\t\t\t\t// var message = error.responseJSON.error.message.value;\r\n\r\n\t\t\t});\r\n\r\n\t\t},\r\n\t\tonSearch: function(oEvent) {\r\n\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\tvar driverID = oModel.getProperty(\"/Key/DriverID\");\r\n\t\t\tvar Site = oModel.getProperty(\"/input/Site\");\r\n\t\t\tvar SiteKeys = oModel.getProperty(\"/Key/Site\");\r\n\t\t\tvar InvoiceKeys = oModel.getProperty(\"/Key/BillDocList\");\r\n\t\t\tvar Invoice = oModel.getProperty(\"/input/BillDocList\");\r\n\t\t\tvar CrDate = oModel.getProperty(\"/input/CreateOn\");\r\n\t\t\tif (CrDate) {\r\n\t\t\t\tCrDate = CrDate.split('.');\r\n\t\t\t\tvar DateObj = new Date(CrDate);\r\n\t\t\t\t// var Day = DateObj.getDate() < 10 ? '0' + DateObj.getDate() : DateObj.getDate();\r\n\t\t\t\t// var month = Number(DateObj.getMonth()) + 1 < 10 ? '0' + (Number(DateObj.getMonth()) + 1) : Number(DateObj.getMonth()) + 1;\r\n\t\t\t\t// var year = DateObj.getFullYear();\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\tvar Day = CrDate[0];\r\nvar month =CrDate[1];\r\nvar year = CrDate[2];\r\n\t\t\t\tCrDate = year + month + Day;\r\n\t\t\t} else {\r\n\t\t\t\tCrDate = \"\";\r\n\t\t\t}\r\n\t\t\tvar site = \"\";\r\n\t\t\tif (SiteKeys.length > 0) {\r\n\r\n\t\t\t\tSiteKeys.forEach(function(item) {\r\n\t\t\t\t\tif (site === \"\") {\r\n\t\t\t\t\t\tsite = item;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tsite = site + ',' + item;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tvar inv = \"\";\r\n\t\t\tif (InvoiceKeys.length > 0) {\r\n\r\n\t\t\t\tInvoiceKeys.forEach(function(item) {\r\n\t\t\t\t\tif (inv === \"\") {\r\n\t\t\t\t\t\tinv = item;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tinv = inv + ',' + item;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tvar url = \"/sap/opu/odata/sap/ZDM_ODATA_SRV/GetInvoiceLog?Driver='\" + driverID + \"'&Site='\" + site + \"'&Invoice='\" + inv +\r\n\t\t\t\t\"'&CreatedOn='\" + CrDate + \"'&$format=json\";\r\n\t\t\tBusyIndicator.show();\r\n\r\n\t\t\tCommon.getAjax(url, true).then(function(success) {\r\n\t\t\t\toModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t\tvar res = success.d.results;\r\n\t\t\t\tres.forEach(function(item) {\r\n\t\t\t\t\titem.InvoiceStatusDD = [{\r\n\t\t\t\t\t\tDdValue: \"Cancelled\"\r\n\t\t\t\t\t}, {\r\n\t\t\t\t\t\tDdValue: \"Returned\"\r\n\t\t\t\t\t}];\r\n\t\t\t\t\titem.InvoiceStatus = item.InvoiceStatus ? item.InvoiceStatus : \"Returned\";\r\n\t\t\t\t\titem.enabled = item.Zdriverid ? true : false;\r\n\t\t\t\t\titem.ReturnDate = Formatter.ConvDateforComments(item.ReturnDate);\r\n\t\t\t\t\titem.Selected = false;\r\n\r\n\t\t\t\t});\r\n\t\t\t\toModel.setProperty(\"/Table/BillingDocDet\", res);\r\n\t\t\t\tBusyIndicator.hide();\r\n\r\n\t\t\t}).catch(function(error) {\r\n\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\tLog.error(error);\r\n\r\n\t\t\t});\r\n\r\n\t\t},\r\n\t\tonDriverID: function(oEvent) {\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\r\n\t\t\tvar currentKey = oModel.getProperty(\"/Key/DriverID\");\r\n\t\t\tvar currentValue = oModel.getProperty(\"/input/DriverID\");\r\n\r\n\t\t\tif (!oEvent.getSource().getSelectedKey()) {\r\n\t\t\t\toModel.setProperty(\"/input/DriverID\", \"\");\r\n\t\t\t\toModel.setProperty(\"/Key/DriverID\", \"\");\r\n\t\t\t\toModel.setProperty(\"/ValueState/DriverID\", \"Error\");\r\n\r\n\t\t\t} else {\r\n\t\t\t\toModel.setProperty(\"/ValueState/DriverID\", \"None\");\r\n\t\t\t\toModel.setProperty(\"/Key/lastDriverID\", currentKey);\r\n\t\t\t\toModel.setProperty(\"/input/lastDriverID\", currentValue);\r\n\r\n\t\t\t}\r\n\r\n\t\t},\r\n\t\tonUpdateInvoice: function(ovent) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\tvar payloadTable = [];\r\n\t\t\tvar selectedPath = oModel.getProperty(\"/Table/BillingDocDet\");\r\n\t\t\tselectedPath.forEach(function(item) {\r\n\t\t\t\tvar mItem = item;\r\n\t\t\t\tif (item.Selected) {\r\n\t\t\t\t\tvar payLoadItem = {\r\n\t\t\t\t\t\tReqNo: mItem.ReqNo,\r\n\t\t\t\t\t\tInvoiceStatus: mItem.InvoiceStatus,\r\n\t\t\t\t\t\tVbeln: mItem.Vbeln\r\n\t\t\t\t\t};\r\n\t\t\t\t\tpayloadTable.push(payLoadItem);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tif (payloadTable.length === 0) {\r\n\t\t\t\tMessageBox.error(\"Select the data\");\r\n\t\t\t} else {\r\n\r\n\t\t\t\tvar payload = {\r\n\t\t\t\t\t\"Dummy\": \"12\",\r\n\t\t\t\t\t\"InvoiceLogSet\": payloadTable\r\n\t\t\t\t};\r\n\t\t\t\tvar url = \"/sap/opu/odata/sap/ZDM_ODATA_SRV/ReturnInvLogSet\";\r\n\r\n\t\t\t\tCommon.postAjax(url, payload, true).then(function(success) {\r\n\t\t\t\t\toModel = that.getView().getModel(\"mMainModel\");\r\n\t\t\t\t\tvar res = success.d.results;\r\n\t\t\t\t\toModel.setProperty(\"/Table/BillingDocDet\", res);\r\n\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\tthat.onSearch();\r\n\t\t\t\t\tMessageBox.success(\"Invoice updated successfully\");\r\n\r\n\t\t\t\t}).catch(function(error) {\r\n\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\tLog.error(error);\r\n\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t},\r\n\t\tonSelectRow: function(oEvent) {\r\n\r\n\t\t\t// var ttemp = oEvent;\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\r\n\t\t\tvar selectedPath = oEvent.getSource().getParent().getBindingContextPath();\r\n\t\t\tvar selRow = oModel.getProperty(selectedPath);\r\n\t\t\tif (oEvent.getParameter(\"selected\")) {\r\n\t\t\t\tif (Number(selRow.ReqNo)) {\r\n\t\t\t\t\tselRow.Selected = true;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tselRow.Selected = false;\r\n\t\t\t\t\tMessageBox.error(\"Driver not assigned\");\r\n\t\t\t\t}\r\n\t\t\t\toModel.setProperty(selectedPath, selRow);\r\n\t\t\t}\r\n\t\t},\r\n\t\tonSelectSite: function(oEvent) {\r\n\r\n\t\t},\r\n\t\tonBilldocInput: function(oEvent) {\r\n\r\n\t\t\tvar oModel = this.getView().getModel(\"mMainModel\");\r\n\t\t\tvar value = oEvent.getParameter(\"value\");\r\n\t\t\tvar billDocList = oModel.getProperty(\"/Key/BillDocList\");\r\n\t\t\tvar existInput = oEvent.getSource().getTokens() || [];\r\n\t\t\tif (oEvent.getParameter(\"type\") !== 'removed') {\r\n\t\t\t\texistInput.push(new sap.m.Token({\r\n\t\t\t\t\ttext: value,\r\n\t\t\t\t\tkey: value\r\n\t\t\t\t}));\r\n\t\t\t\toEvent.getSource().setTokens(existInput);\r\n\t\t\t\toEvent.getSource().setValue(\"\");\r\n\t\t\t\tvar billDocList = oModel.getProperty(\"/Key/BillDocList\");\r\n\t\t\t\tbillDocList.push(value);\r\n\r\n\t\t\t} else {\r\n\t\t\t\tvar curValue = oEvent.getParameter(\"removedTokens\")[0].getProperty(\"text\");\r\n\t\t\t\tbillDocList = billDocList.filter(function(item) {\r\n\t\t\t\t\treturn item !== curValue;\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\toModel.setProperty(\"/Key/BillDocList\", billDocList);\r\n\t\t}\r\n\r\n\t});\r\n});",
		"com/zdm/action/controller/App.controller.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\"\r\n], function(Controller) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.zdm.action.controller.App\", {\r\n\r\n\t});\r\n});",
		"com/zdm/action/view/App.view.xml": "<mvc:View controllerName=\"com.zdm.action.controller.App\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\r\n\txmlns:mvc=\"sap.ui.core.mvc\" displayBlock=\"true\" xmlns=\"sap.m\">\r\n\t<App id=\"app\"/>\r\n</mvc:View>",
		"com/zdm/action/view/fragment/MultipleBillDoc.fragment.xml": "<core:FragmentDefinition xmlns:core=\"sap.ui.core\" xmlns:f=\"sap.f\" xmlns:l=\"sap.ui.layout\" xmlns=\"sap.m\" xmlns:ndc=\"sap.ndc\">\r\n\t<Dialog id=\"MultipleFragment\" showHeader=\"false\"  class=\"sapUiSizeCompact\">\r\n\t\t<customHeader >\r\n\t\t\t<Bar class=\"blue\">\r\n\t\t\t\t<contentMiddle >\r\n\t\t\t\t\t<!--<core:Icon src=\"{mMainModel>/Dialog/icon}\" width=\"9%\" color=\"{mMainModel>/Dialog/colour}\"/>-->\r\n\t\t\t\t\t<Title text=\"Multiple Billing Document\" class=\"bold\"/>\r\n\t\t\t\t</contentMiddle>\r\n\t\t\t\t<contentRight>\r\n\t\t\t\t\t<core:Icon src=\"sap-icon://decline\" color=\"\" press=\"onCloseMsg\"/>\r\n\t\t\t\t</contentRight>\r\n\t\t\t</Bar>\r\n\t\t</customHeader>\r\n\t\t<content>\r\n\t\t\t<f:GridList items=\"{mMainModel>/input/BillDocList}\">\r\n\t\t\t\t<f:GridListItem>\r\n\t\t\t\t\t<HBox width=\"100%\" alignContent=\"SpaceBetween\">\r\n\t\t\t\t\t\t<VBox width=\"75%\">\r\n\t\t\t\t\t\t<Input value=\"{mMainModel>BillDoc}\" editable=\"false\" width=\"100%\"></Input>\r\n\t\t\t\t\t\t</VBox>\r\n\t\t\t\t\t\t<HBox width=\"5%\">\r\n\t\t\t\t\t\t\t<ndc:BarcodeScannerButton width=\"100%\"   scanSuccess=\"onScanInvoice\"\r\n\t\t\t\t\t\t\t\tinputLiveUpdate=\"onScanLiveUpdate\"  keepCameraScan=\"{/keepCameraScanOne}\"\r\n\t\t\t\t\t\t\t\tclass=\"sampleBarcodeScannerButtonWithZebraEB\"/>\r\n\t\t\t\t\t\t\t\t<Button icon=\"sap-icon://delete\" press=\"onDeleteMultipleBillDocRow\"></Button>\r\n\t\t\t\t\t\t</HBox>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</HBox>\r\n\t\t\t\t</f:GridListItem>\r\n\t\t\t</f:GridList>\r\n\t\t\t<Bar>\r\n\t\t\t\t<contentRight>\r\n\t\t\t\t\t<!--<Button text=\"Add\" type=\"Emphasized\" press=\"onAddMultipleBillDoc\"></Button>-->\r\n\t\t\t\t\t<Button text=\"Close\" press=\"onCloseMsg\"></Button>\r\n\t\t\t\t</contentRight>\r\n\t\t\t</Bar>\r\n\t\t</content>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/zdm/action/view/Home.view.xml": "<mvc:View controllerName=\"com.zdm.action.controller.Main\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\tdisplayBlock=\"true\" xmlns:smartMultiInput=\"sap.ui.comp.smartmultiinput\" xmlns=\"sap.m\" xmlns:smartForm=\"sap.ui.comp.smartform\"\n\txmlns:m=\"sap.m\" xmlns:ndc=\"sap.ndc\" xmlns:core=\"sap.ui.core\" xmlns:f=\"sap.ui.layout.form\" height=\"100%\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"Driver Update\" showHeader=\"false\">\n\t\t\t\t<m:Panel >\n\t\t\t\t\t<VBox >\n\t\t\t\t\t\t<f:SimpleForm id=\"BasicDetails\" editable=\"false\" columnsM=\"2\" columnsL=\"3\" columnsXL=\"4\">\n\t\t\t\t\t\t\t<f:content class=\"MarginTop MarginBottom\">\n\t\t\t\t\t\t\t\t<core:Title text=\"\"/>\n\t\t\t\t\t\t\t\t<VBox>\n\t\t\t\t\t\t\t\t\t<HBox >\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text=\"Driver ID\" class=\"sapUiTinyMarginTop sapUiNoMarginBottom\" width=\"100%\" labelFor=\"idDriverID\"/>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t<HBox width=\"80%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:Input value=\"{mMainModel>/input/DriverID}\" id=\"idDriverID\" class=\"sapUiSmallMarginBegin\" liveChange=\"lvDriverID\" width=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\tchange=\"onDriverID\" type=\"Text\" showSuggestion=\"true\" suggestionItems=\"{mMainModel>/DD/Driver}\" selectedKey=\"{mMainModel>/Key/DriverID}\"\n\t\t\t\t\t\t\t\t\t\t\t\tvalueState=\"{mMainModel>/ValueState/DriverID}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<suggestionItems>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<core:ListItem key=\"{mMainModel>DdKey}\" text=\"{mMainModel>DdValue}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</suggestionItems>\n\t\t\t\t\t\t\t\t\t\t\t</m:Input>\n\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t<HBox >\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text=\"Billing Doc.\" class=\"sapUiTinyMarginTop sapUiNoMarginBottom\" width=\"100%\" labelFor=\"idBillDoc\"/>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t<HBox width=\"80%\">\n\t\t\t\t\t\t\t\t\t\t\t<HBox width=\"100%\" alignItems=\"Start\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<m:Input value=\"{mMainModel>/input/BillDocList}\" change=\"onChangeInvoice\" id=\"idBillDoc\" class=\"sapUiSmallMarginBegin\" width=\"90%\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t<!--\tvalueState=\"{mMainModel>/ValueState/BilDoc}\" maxLength=\"10\"></m:Input>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<MultiInput  tokenUpdate=\"onBilldocInput\" change=\"onBilldocInput\"  id=\"idBillDoc\" value=\"{mMainModel>/input/BillDocList}\" showSuggestion=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmaxLength=\"10\" class=\"sapUiSmallMarginBegin\" width=\"90%\" showValueHelp=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</MultiInput>\n\t\t\t\t\t\t\t\t\t\t\t\t<ndc:BarcodeScannerButton dependents=\"idBillDoc\" id=\"sampleBarcodeScannerButtonZebraOne\" scanSuccess=\"onScanInvoice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tinputLiveUpdate=\"onScanLiveUpdate\" dialogTitle=\"Billing Document\" keepCameraScan=\"{/keepCameraScanOne}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"sampleBarcodeScannerButtonWithZebraEB sapUiNoMarginBegin\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--class=\"sampleBarcodeScannerButtonWithZebraEB sapUiSmallMarginBegin\"-->\n\t\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t<core:Title text=\"\"/>\n\t\t\t\t\t\t\t\t<VBox>\n\t\t\t\t\t\t\t\t\t<HBox >\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text=\"Site\" class=\"sapUiTinyMarginTop sapUiNoMarginBottom\" width=\"100%\" labelFor=\"idSite\"/>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t<HBox width=\"80%\">\n\t\t\t\t\t\t\t\t\t\t\t<!--<m:Input value=\"{mMainModel>/input/Site}\" id=\"idSite\" class=\"sapUiSmallMarginBegin\" liveChange=\"lvSite\" width=\"100%\"-->\n\t\t\t\t\t\t\t\t\t\t\t<!--\tchange=\"onSite\" type=\"Text\" showSuggestion=\"true\" suggestionItems=\"{mMainModel>/DD/Site}\" selectedKey=\"{mMainModel>/Key/Site}\"-->\n\t\t\t\t\t\t\t\t\t\t\t<!--\tvalueState=\"{mMainModel>/ValueState/Site}\">-->\n\t\t\t\t\t\t\t\t\t\t\t<!--\t<suggestionItems>-->\n\t\t\t\t\t\t\t\t\t\t\t<!--\t\t<core:ListItem key=\"{mMainModel>DdKey}\" text=\"{mMainModel>DdValue}\"/>-->\n\t\t\t\t\t\t\t\t\t\t\t<!--\t</suggestionItems>-->\n\t\t\t\t\t\t\t\t\t\t\t<!--</m:Input>-->\n\t\t\t\t\t\t\t\t\t\t\t<MultiComboBox value=\"{mMainModel>/input/Site}\" class=\"sapUiSmallMarginBegin\" selectionChange=\"onSelectSite\"\n\t\t\t\t\t\t\t\t\t\t\t\tselectionFinish=\"handleSelectionFinish\" items=\"{mMainModel>/DD/Site}\" width=\"85%\" selectedKeys=\"{mMainModel>/Key/Site}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<core:Item key=\"{mMainModel>DdKey}\" text=\"{mMainModel>DdValue}\"/>\n\t\t\t\t\t\t\t\t\t\t\t</MultiComboBox>\n\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t<HBox >\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text=\"Created On\" class=\"sapUiTinyMarginTop sapUiNoMarginBottom\" width=\"100%\" labelFor=\"idCreateOn\"/>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t<HBox width=\"80%\">\n\t\t\t\t\t\t\t\t\t\t\t<m:DatePicker class=\"sapUiSmallMarginBegin\" width=\"85%\" id=\"idCreateOn\" value=\"{mMainModel>/input/CreateOn}\"></m:DatePicker>\n\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t<HBox width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t\t<Label text=\"\"/>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t<VBox width=\"80%\">\n\t\t\t\t\t\t\t\t\t\t\t<HBox width=\"100%\" alignItems=\"End\" alignContent=\"End\">\n\t\t\t\t\t\t\t\t\t\t\t\t<VBox width=\"35%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<Button icon=\"sap-icon://search\" type=\"Emphasized\" width=\"100%\" text=\"Search\" press=\"onSearch\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tenabled=\"{=${mMainModel>/Key/DriverID}!=='' || ${mMainModel>/Key/Site}.length > 0 || ${mMainModel>/Key/BillDocList}.length > 0 || ${mMainModel>/input/CreateOn}!==''}\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t\t\t<VBox width=\"35%\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<Button icon=\"sap-icon://sys-cancel\" type=\"Reject\" width=\"100%\" text=\"Clear\" press=\"clearData\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t</VBox>\n\t\t\t\t</m:Panel>\n\t\t\t\t<Panel >\n\t\t\t\t\t<OverflowToolbar visible=\"false\">\n\t\t\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t\t\t<Button tooltip=\"Export\" icon=\"sap-icon://excel-attachment\" press=\"onExport\" visible=\"true\"/>\n\t\t\t\t\t\t<Button tooltip=\"sort\" icon=\"sap-icon://sort\" press=\"onSort\" visible=\"true\"/>\n\t\t\t\t\t\t<Input width=\"15%\" visible=\"true\" liveChange=\"onSearchTable\" id=\"hideableInput\"/>\n\t\t\t\t\t\t<Button icon=\"sap-icon://search\" press=\"onToggleInput\" visible=\"false\"/>\n\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t\t<ScrollContainer height=\"30rem\" id=\"ScrollActivity\" horizontal='true' vertical='true' width=\"100%\" focusable=\"true\">\n\t\t\t\t\t\t<Table id=\"PO_GR\" busy=\"false\" alternateRowColors=\"true\" noDataText=\"\" width=\"100%\" growing=\"true\" growingScrollToLoad=\"true\"\n\t\t\t\t\t\t\tgrowingThreshold=\"10\" items=\"{ path:'mMainModel>/Table/BillingDocDet'}\">\n\t\t\t\t\t\t\t<headerToolbar></headerToolbar>\n\t\t\t\t\t\t\t<columns >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"6.5em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"\" design=\"Bold\" wrapping=\"true\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"6.5em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Billing Doc\" design=\"Bold\" wrapping=\"true\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Customer Code\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Customer Name\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Route Code\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Route Code Name\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\" visible=\"{mMainModel>/Visible/Update}\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Driver id\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\" visible=\"{=${mMainModel>/Visible/Update}===false}\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Old Driver id\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\" visible=\"{=${mMainModel>/Visible/Update}===false}\">\n\t\t\t\t\t\t\t\t\t<Label text=\"New Driver id\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Order Num\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Vehicle Num\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Invoice Value\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"10em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Invoice Remark\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t\t<Column hAlign=\"Center\" width=\"7em\">\n\t\t\t\t\t\t\t\t\t<Label text=\"Return Date\" wrapping=\"true\" design=\"Bold\"/>\n\t\t\t\t\t\t\t\t</Column >\n\t\t\t\t\t\t\t</columns>\n\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t<ColumnListItem >\n\t\t\t\t\t\t\t\t\t<customData>\n\t\t\t\t\t\t\t\t\t\t<core:CustomData key=\"mydata\" value=\"{mMainModel>GrandToalFlag}\" writeToDom=\"true\"></core:CustomData>\n\t\t\t\t\t\t\t\t\t</customData>\n\t\t\t\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t\t\t\t<CheckBox selected=\"{mMainModel>Selected}\" select=\"onSelectRow\"></CheckBox>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Vbeln}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Kunag}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>KunagText}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Zdelvarea}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Zdeldesc}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Zdriverid}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Zolddriverid}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Zdriverid}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Ordernum}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Ktext}\"/>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>Netwr}\"/>\n\t\t\t\t\t\t\t\t\t\t<!--<m:Input value=\"{mMainModel>InvoiceStatus}\" class=\"sapUiSmallMarginBegin\" width=\"8.5em\" enabled=\"{mMainModel>enabled}\"-->\n\t\t\t\t\t\t\t\t\t\t<!--\tchange=\"onInvoiceStatusChange\" type=\"Text\" showSuggestion=\"true\" suggestionItems=\"{mMainModel>InvoiceStatusDD}\"-->\n\t\t\t\t\t\t\t\t\t\t<!--\tselectedKey=\"{mMainModel>InvoiceStatus}\">-->\n\t\t\t\t\t\t\t\t\t\t<!--\t<suggestionItems>-->\n\t\t\t\t\t\t\t\t\t\t<!--\t\t<core:ListItem key=\"{mMainModel>DdValue}\" text=\"{mMainModel>DdValue}\"/>-->\n\t\t\t\t\t\t\t\t\t\t<!--\t</suggestionItems>-->\n\t\t\t\t\t\t\t\t\t\t<!--</m:Input>-->\n\t\t\t\t\t\t\t\t\t\t<ComboBox items=\"{mMainModel>InvoiceStatusDD}\" value=\"{mMainModel>InvoiceStatus}\" selectedKey=\"{mMainModel>InvoiceStatus}\">\n\t\t\t\t\t\t\t\t\t\t\t<core:Item key=\"{mMainModel>DdValue}\" text=\"{mMainModel>DdValue}\"/>\n\t\t\t\t\t\t\t\t\t\t</ComboBox>\n\t\t\t\t\t\t\t\t\t\t<Text text=\"{mMainModel>ReturnDate}\"/>\n\t\t\t\t\t\t\t\t\t\t<!--<Text text=\"{path :'mMainModel>ReturnDate', formatter:'com.zdm.action.utility.Formatter.ConvDateforComments'}\"/>-->\n\t\t\t\t\t\t\t\t\t</cells>\n\t\t\t\t\t\t\t\t</ColumnListItem>\n\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t</Table>\n\t\t\t\t\t</ScrollContainer>\n\t\t\t\t</Panel>\n\t\t\t\t<m:footer >\n\t\t\t\t\t<m:OverflowToolbar >\n\t\t\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t\t\t<Button text=\"Update Invoice\" press=\"onUpdateInvoice\"></Button>\n\t\t\t\t\t</m:OverflowToolbar>\n\t\t\t\t</m:footer>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/zdm/action/utility/Common.js": "sap.ui.define([], function () {\r\n    \"use strict\";\r\n    var BusyIndicator = sap.ui.core.BusyIndicator;\r\n   \tvar that = this;\r\n    var Common = function () {\r\n        // Do not use the constructor\r\n        throw new Error();\r\n    };\r\n    \r\n    \r\n    Common.fnGetURL = function (sPath) {\r\n    \t\r\n        var sDestination = \"\";\r\n        var sRetVal = \"\";\r\n        \r\n        \r\n        \r\n        if (sPath) {\r\n            if (sPath.charAt(0) !== \"/\") {\r\n                sPath = \"/\" + sPath;\r\n            }\r\n        }\r\n          if (window.location.href.indexOf(\"localhost\") > -1) {\r\n            sDestination = \"/red\";\r\n        }\r\n        \r\n        sRetVal = sDestination + sPath;\r\n        return sRetVal;\r\n    };\r\n   Common.getAjax =function(url, busyIndicatior) {\r\n\t\t\tif (busyIndicatior) {\r\n\t\t\t\tBusyIndicator.show();\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tvar domUrl = this.fnGetURL(url);\r\n\t\t\treturn new Promise(function(success, error) {\r\n\t\t\t\t$.ajax({\r\n\t\t\t\t\turl: domUrl,\r\n\t\t\t\t\tmethod: \"GET\",\r\n\t\t\t\t\tcontentType: \"application/json\",\r\n\t\t\t\t\tdataType: \"json\",\r\n\t\t\t\t\tsuccess: function(oDataReturn) {\r\n\t\t\t\t\t\tsuccess(oDataReturn);\r\n\t\t\t\t\t\tif (busyIndicatior) {\r\n\t\t\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\terror: function(oDataError) {\r\n\t\t\t\t\t\terror(oDataError);\r\n\t\t\t\t\t\tif (busyIndicatior) {\r\n\t\t\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t};\r\n   Common.postAjax= function(url, payload, busyIndicatior) {\r\n\t\t\tif (busyIndicatior) {\r\n\t\t\t\tBusyIndicator.show();\r\n\t\t\t}\r\n\t\t\tvar domUrl = this.fnGetURL(url);\r\n\t\t\treturn new Promise(function(success, error) {\r\n\t\t\t\t$.ajax({\r\n\t\t\t\t\turl: domUrl,\r\n\t\t\t\t\tmethod: \"POST\",\r\n\t\t\t\t\tcontentType: \"application/json\",\r\n\t\t\t\t\tdataType: \"json\",\r\n\t\t\t\t\tprocessData: false,\r\n\t\t\t\t\t\r\n\t\t\t\t\tdata: JSON.stringify(payload),\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"X-Requested-With\": \"XMLHttpsRequest\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tsuccess: function(oDataReturn) {\r\n\t\t\t\t\t\tsuccess(oDataReturn);\r\n\t\t\t\t\t\tif (busyIndicatior) {\r\n\t\t\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\terror: function(oDataError) {\r\n\t\t\t\t\t\terror(oDataError);\r\n\t\t\t\t\t\tBusyIndicator.hide();\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t};\r\n    return Common;\r\n}, true);",
		"com/zdm/action/utility/Formatter.js": "jQuery.sap.declare(\"com.zdm.action.utility.Formatter\");\r\n\r\ncom.zdm.action.utility.Formatter = {\r\n\tonInit: function(oResourceBundle) {\r\n\t\tthis._oResourceBundle = oResourceBundle;\r\n\t},\r\n\r\n\tfnRoundOff: function(sValue) {\r\n\t\treturn Math.round(sValue);\r\n\t},\r\n\tConvDate: function(sValue) {\r\n\t\tif (sValue !== null) {\r\n\t\t\t// var aMonthsList=[\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\r\n\t\t\t//    sValue = new Date(Number(sValue.replace(\"/Date(\", \"\").replace(\")/\", \"\")));\r\n\t\t\t// var sYear = sValue.getFullYear();\r\n\t\t\t// var sMonth = sValue.getMonth();\r\n\t\t\t// var sDate = ((sValue.getDate() < 10) ? (\"0\" + (sValue.getDate())) : sValue.getDate());\r\n\t\t\t// var sRet = aMonthsList[sMonth] + \" \" + sDate + \", \" + sYear;\r\n\t\t\t//           var date = new Date(sValue);\r\n\t\t\t// var formattedDate = sap.ui.core.format.DateFormat.getDateInstance().format(date); // format the date using default date format\r\n\r\n\t\t\tvar DateFrom = sValue;\r\n\t\t\tDateFrom = DateFrom + \"T00:00:00+0000\";\r\n\t\t\tDateFrom = new Date(DateFrom).getTime();\r\n\t\t\t// var sRet = \"Hello\";\r\n\t\t\treturn DateFrom;\r\n\t\t\t// return sValue.getDate() + \"/\" + (sValue.getMonth() + 1) + \"/\" + sValue.getFullYear();\r\n\t\t} else if ((sValue) === null || sValue === undefined) {\r\n\t\t\treturn null;\r\n\t\t} else {\r\n\t\t\treturn \"Jan 01,0000\";\r\n\t\t}\r\n\t},\r\n\tConvDateforComments: function(sValue) {\r\n\t\tif (sValue !== null && sValue !== undefined && sValue[0] === \"/\") {\r\n\t\t\tvar substr = sValue.match(/\\(([^)]+)\\)/)[1];\r\n\t\t\tsValue = new Date(Number(substr));\r\n\t\t\tvar aMonthsList = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\r\n\t\t\t//    sValue = new Date(Number(sValue.replace(\"/Date(\", \"\").replace(\")/\", \"\")));\r\n\t\t\tvar sYear = sValue.getFullYear();\r\n\t\t\tvar sMonth = sValue.getMonth();\r\n\t\t\tvar sDate = ((sValue.getDate() < 10) ? (\"0\" + (sValue.getDate())) : sValue.getDate());\r\n\t\t\tvar sRet = aMonthsList[sMonth] + \" \" + sDate + \" \" + sYear;\r\n\t\t\treturn sRet; //+ \" \"+sValue.toLocaleTimeString();\r\n\t\t\t// return sValue.getDate() + \"/\" + (sValue.getMonth() + 1) + \"/\" + sValue.getFullYear();\r\n\t\t} else {\r\n\t\t\treturn null;\r\n\t\t}\r\n\t},\r\n\tConvDateNumber: function(sValue) {\r\n\t\tif (sValue !== null) {\r\n\r\n\t\t\tvar sYear = sValue.getFullYear();\r\n\t\t\tvar sMonth = sValue.getMonth() + 1;\r\n\t\t\tvar sDate = ((sValue.getDate() < 10) ? (\"0\" + (sValue.getDate())) : sValue.getDate());\r\n\t\t\tvar sRet = sDate + \".\" + sMonth + \".\" + sYear;\r\n\t\t\treturn sRet;\r\n\t\t\t// return sValue.getDate() + \"/\" + (sValue.getMonth() + 1) + \"/\" + sValue.getFullYear();\r\n\t\t} else {\r\n\t\t\treturn \"01.01.0000\";\r\n\t\t}\r\n\t},\r\n\tConvEpoch: function(changeDate) {\r\n\t\tif (!(changeDate === null ||\r\n\t\t\t\t// isNaN(changeDate) || \r\n\t\t\t\tchangeDate === undefined || changeDate === \"\")) {\r\n\t\t\tvar DateFrom = changeDate;\r\n\t\t\tDateFrom = DateFrom + \"T00:00:00+0000\";\r\n\t\t\tDateFrom = new Date(DateFrom).getTime();\r\n\t\t\treturn \"/Date(\" + DateFrom + \")/\";\r\n\t\t} else {\r\n\t\t\treturn null;\r\n\t\t}\r\n\t},\r\n\tBrackValue: function(val) {\r\n\t\tvar res = val.match(/\\(([^)]+)\\)/)[1];\r\n\t\treturn res;\r\n\t}\r\n};"
	}
});