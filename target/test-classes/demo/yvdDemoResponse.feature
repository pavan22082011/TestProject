Feature: YVD service response validation using Karate

Background:
* url baseUrl

Scenario: soap 1.1

Given request read('/resources/YVDRequest40DRY1Equipment.xml')
 	When soap action baseUrl
    Then status 200
  	And print 'response: ', response
  	* def resp = response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId
  	And print 'resp:',resp
  	* match resp == 'BALCC0303'
  	
  # use jdbc to validate
* def config = { username: 'SDA241', password: 'Welcome@1', url: 'jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=utmtest-scan.crb.apmoller.net)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=UTMTEST)(INSTANCE_NAME=UTMTEST1)))', driverClassName: 'oracle.jdbc.xa.client.OracleXADataSource' }
* def DbUtils = Java.type('resources.DbUtils')
* def db = new DbUtils(config)
* print db
* def SHIPMENTS = db.readValue("SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
* match SHIPMENTS == resp
* def SHIPMENTS = db.readRow("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID ='"+resp+"' ")
* match SHIPMENTS.SHIPMENT_ID == resp
* def SHIPMENTS = db.readRows("SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION")
* match contains { SHIPMENTS: '#(resp)' }

	
