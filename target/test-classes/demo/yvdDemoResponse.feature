Feature: YVD service response validation using Karate

Background:
* url 'http://osb.int.esb.apmoller.net:9200/YieldManagementV3/ValidateShipmentOnYield'

Scenario: soap 1.1

   Given request read('/sample/YVD Request- 40 DRY 1 Equipment.xml')
 
    When method post
    Then status 200
  	And print 'response: ', response
  	* def resp = response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId
  	And print 'resp:',resp
  	* match resp == 'BALCC0303'
  	
    
    
  