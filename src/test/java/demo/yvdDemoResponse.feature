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
  	
    
    
  