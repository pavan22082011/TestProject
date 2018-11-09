Feature: YVD FC service response validation using Karate

Background:
* url baseUrl
* def configDb = dbConfig

Scenario Outline: Validate the YVD payload response with the database for FC scenario

	Given request read('/resources/YVDRequest40DRY1Equipment.xml')
 	  When soap action baseUrl
      Then status 200
  	  And print 'response: ', response
  	* def resp = response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId
  	  And print 'resp:',resp
  	* match resp ==  '<ShipmentId>' 	
  	* def respValidation = response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription
  	* match respValidation == '<ValidationOutcome>'	
  	
	  # Connect to database and validate YVD payload response with database response
	* def DbUtils = Java.type('resources.DbUtils')
	* def db = new DbUtils(configDb)
	* def SHIPMENTS1 = db.readValue("SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS1 == resp
	* def SHIPMENTS2 = db.readRow("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS2.SHIPMENT_ID == resp


	Examples:
	| ShipmentId | ValidationOutcome |
	| BALCC0303 | Fully Committed |
	
Scenario Outline: Validate the YVD payload response with the database for FC scenario

	Given request read('/resources/YVDRequest40DRY1Equipment.xml')
 	  When soap action baseUrl
      Then status 200
  	  And print 'response: ', response
  	* def resp = response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId
  	  And print 'resp:',resp
  	* match resp ==  '<ShipmentId>' 	
  	* def respValidation = response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription
  	* match respValidation == '<ValidationOutcome>'	
  	
	  # Connect to database and validate YVD payload response with database response
	* def DbUtils = Java.type('resources.DbUtils')
	* def db = new DbUtils(configDb)
	* def SHIPMENTS1 = db.readValue("SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS1 == resp
	* def SHIPMENTS2 = db.readRow("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS2.SHIPMENT_ID == resp

	Examples:
	| ShipmentId | ValidationOutcome |
	| BALCC0303 | Fully Committed |
