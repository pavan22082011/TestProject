Feature: YVD FC service response validation using Karate

Background:
* url baseUrl

Scenario Outline: Validate the YVD response for FC scenario

Given request read('/resources/YVDRequest40DRY1Equipment.xml')
 	  When soap action baseUrl
      Then status 200
  	  And print 'response: ', response
  	* def resp = response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId
  	  And print 'resp:',resp
  	* match resp ==  '<ShipmentId>' 	
  	* def respValidation = response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription
  	* match respValidation == '<ValidationOutcome>'	
  	
	  # use jdbc to validate
	* def config = { username: 'SDA241', password: 'Welcome@1', url: 'jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=utmtest-scan.crb.apmoller.net)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=UTMTEST)(INSTANCE_NAME=UTMTEST1)))', driverClassName: 'oracle.jdbc.xa.client.OracleXADataSource' }
	* def DbUtils = Java.type('resources.DbUtils')
	* def db = new DbUtils(config)
	* print db
	* def SHIPMENTS1 = db.readValue("SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS1 == resp
	* def SHIPMENTS2 = db.readRow("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
	* match SHIPMENTS2.SHIPMENT_ID == resp
	* def SHIPMENTS3 = db.readRows("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION")
	* match SHIPMENTS3.SHIPMENT_ID { SHIPMENT_ID: '#(resp)'}

	Examples:
	| ShipmentId | ValidationOutcome |
	| BALCC0303 | Fully Committed |
