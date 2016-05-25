sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("vizframetest.main", {

        onInit : function() {
        // 1.Get the id of the VizFrame
        //var oVizFrame = this.getView().byId("idcolumn");
        
        
        // 2.Create a JSON Model and set the data
        var oModel = new sap.ui.model.json.JSONModel();
        var data = {
        	'Number' :[
	        {"Month": "January", "10.9": "88", "10.10": "300", "10.11": "150"},
	        {"Month": "February", "10.9": "66", "10.10": "288", "10.11": "180"},
	        {"Month": "March", "10.9": "59", "10.10": "278", "10.11": "230"},
	        {"Month": "April", "10.9": "49", "10.10": "250", "10.11": "250"},
	        {"Month": "May", "10.9": "39", "10.10": "230", "10.11": "270"},
	        {"Month": "June", "10.9": "29", "10.10": "210", "10.11": "300"},
	        {"Month": "July", "10.9": "26", "10.10": "189", "10.11": "320"}
        	]
        };
        oModel.setData(data);
        
    
        // 3. Create Viz dataset to feed to the data to the graph
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
        dimensions : [
        	{
	        axis : 1,
	        name : 'Month',
	        value : "{Month}"
        	}],
        
        measures : [
        	{
	        name : '10.9',
	        value : '{10.9}'
        	},
        	
        	{
	        name : '10.10',
	        value : '{10.10}'
        	},
        	
        	{
	        name : '10.11',
	        value : '{10.11}'
        	}

	        ],
	        
        
        data : {
        	path : "/Number"
        	}
        });
        
        
        var oBarChart = new sap.viz.ui5.Bar({
			width : "80%",
			height : "700px",
			plotArea : {
				'colorPalette' : d3.scale.category20().range()
			},
			title : {
				visible : true,
				text : 'Auswertung der Mac OS Versionen'
			},
			dataset : oDataset
		});
		
		oBarChart.setModel(oModel);
		oBarChart.setBusyIndicatorDelay(0);
		oBarChart.placeAt("content");
        
        }


	});

});