function() {    


  // base config
  var config = {
		  baseUrl: 'http://osb.int.esb.apmoller.net:9200/YieldManagementV3/ValidateShipmentOnYield',
		  dbConfig: { username: 'SDA241', password: 'Welcome@1', url: 'jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=utmtest-scan.crb.apmoller.net)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=UTMTEST)(INSTANCE_NAME=UTMTEST1)))', driverClassName: 'oracle.jdbc.xa.client.OracleXADataSource' }
}
  
 return config;
}
