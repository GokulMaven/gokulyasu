sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/zdm/Home/model/models",
	"sap/ui/model/json/JSONModel",

	"sap/ui/core/Component",
	"sap/ui/core/Manifest",
	"sap/ui/core/ComponentContainer"
], function(UIComponent, Device, models, JSONModel, Component, Manifest, ComponentContainer) {
	"use strict";

	return UIComponent.extend("com.zdm.Home.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			var oModel = new JSONModel();
			this.setModel(oModel);
			var oData = {
				Dd: {},
				Header: {

				},
				"cardI": {},
				"cardItemp": {
					"tile1": {
						"sap.app": {
							"id": "sample.CardsLayout.model.list2",
							"type": "card"
						},
						"sap.card": {
							"type": "List",
							"header": {
								"title": "Inwarding",
								"icon": {
									// "src": "sap-icon://idea-wall"
									"src": "sap-icon://sales-order-item"
								}
							},
							"content": {
								"data": {
									"json": [{
										"name": "Inward of Asset"
									}, {
										"name": "Inward of Accessory"
									}, {
										"name": "Update Accessories Details"
									}, {
										"name": "Add Software"
									}, {
										"name": "Mass Update of Asset"
									}, {
										"name": "Mass Update of Accessories"
									}]
								},
								"item": {
									"title": {
										"value": "{name}"
									},
									"description": {
										"value": "{description}"
									},

									"actions": [{
										"type": "Navigation",
										"parameters": {
											"SubHead": "PP{name}"
										}
									}]
								}
							}
						}
					},
					"tile2": {
						"sap.app": {
							"id": "sample.CardsLayout.model.list2",
							"type": "card"
						},
						"sap.card": {
							"type": "List",
							"header": {
								"title": "Internal Process",

								"icon": {
									// "src": "sap-icon://credit-card"
									"src": "sap-icon://learning-assistant"
								}
							},
							"content": {
								"data": {
									"json": [{
										"name": "Asset Common Dashboard"
									}, {
										"name": "Allocation Non-Assets/Accesories"
									}]
								},
								"item": {

									"title": {
										"value": "{name}"
									},
									"description": {
										"value": "{description}"
									},
									"actions": [{
										"type": "Navigation",
										"parameters": {

											"SubHead": "RA{name}"
										}
									}]
								}
							}
						}
					},
					"tile3": {
						"sap.app": {
							"id": "sample.CardsLayout.model.list2",
							"type": "card"
						},
						"sap.card": {
							"type": "List",
							"header": {
								"title": "Intra/Inter Transfer",

								"icon": {
									// "src": "sap-icon://monitor-payments"
									"src": "sap-icon://org-chart"
								}
							},
							"content": {
								"data": {
									"json": [{
										"name": "Action Item"
									}, {
										"name": "Download/Print Gatepass"
									}]
								},
								"item": {

									"title": {
										"value": "{name}"
									},
									"description": {
										"value": "{description}"
									},
									"actions": [{
										"type": "Navigation",
										"parameters": {

											"SubHead": "IIT{name}"
										}
									}]
								}
							}
						}
					},
					"tile4": {
						"sap.app": {
							"id": "sample.CardsLayout.model.list2",
							"type": "card"
						},
						"sap.card": {
							"type": "List",
							"header": {
								"title": "Physical Invetory",

								"icon": {
									"src": "sap-icon://add-coursebook"
								}
							},
							"content": {
								"data": {
									"json": [

										{
											"name": "Create PI Assets"
										}, {
											"name": "Display/Edit Physical Inventory"
										}, {
											"name": "Physical Inventory Report"
										}
									]
								},
								"item": {

									"title": {
										"value": "{name}"
									},
									"description": {
										"value": "{description}"
									},
									"actions": [{
										"type": "Navigation",
										"parameters": {

											"SubHead": "CC{name}"
										}
									}]
								}
							}
						}
					},
					"tile5": {
						"sap.app": {
							"id": "sample.CardsLayout.model.list2",
							"type": "card"
						},
						"sap.card": {
							"type": "List",
							"header": {
								"title": "Reports",

								"icon": {
									"src": "sap-icon://create-form"
								}
							},
							"content": {
								"data": {
									"json": [{
										"name": "Inwarding Reports"
									}, {
										"name": "Internal Process Reports"
									}, {
										"name": "Intra/Inter Transfer Reports"
									}, {
										"name": "Employee Sepration Report"
									}]
								},
								"item": {

									"title": {
										"value": "{name}"
									},
									"description": {
										"value": "{description}"
									},
									"actions": [{
										"type": "Navigation",
										"parameters": {

											"SubHead": "SO{name}"
										}
									}]
								}
							}
						}
					}

				},
				Key: {},
				VisibleFlag: {},
				ApprovePage: {}
			};
			this.setModel(oModel, "mMainModel");
			this.getModel("mMainModel").setData(oData);
			this.getRouter().initialize();

			

		
				
				window.mvn = {
				"asset": {
					"navigationConfig": this.getManifestEntry("/sap.ui5/config/navigationConfig")
				}
			};
		

		}
	});
});