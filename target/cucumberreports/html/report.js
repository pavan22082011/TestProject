$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo/yvdDemoResponse.feature");
formatter.feature({
  "line": 1,
  "name": "YVD service response validation using Karate",
  "description": "",
  "id": "yvd-service-response-validation-using-karate",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url baseUrl",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "baseUrl",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 845898145,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "soap 1.1",
  "description": "",
  "id": "yvd-service-response-validation-using-karate;soap-1.1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "request read(\u0027/resources/YVDRequest40DRY1Equipment.xml\u0027)",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "soap action baseUrl",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "print \u0027response: \u0027, response",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "def resp \u003d response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "print \u0027resp:\u0027,resp",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "match resp \u003d\u003d \u0027BALCC0303\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "# use jdbc to validate"
    }
  ],
  "line": 17,
  "name": "def config \u003d { username: \u0027SDA241\u0027, password: \u0027Welcome@1\u0027, url: \u0027jdbc:oracle:thin:@(DESCRIPTION\u003d(ADDRESS_LIST\u003d(ADDRESS\u003d(PROTOCOL\u003dTCP)(HOST\u003dutmtest-scan.crb.apmoller.net)(PORT\u003d1521)))(CONNECT_DATA\u003d(SERVICE_NAME\u003dUTMTEST)(INSTANCE_NAME\u003dUTMTEST1)))\u0027, driverClassName: \u0027oracle.jdbc.xa.client.OracleXADataSource\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 18,
  "name": "def DbUtils \u003d Java.type(\u0027resources.DbUtils\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 19,
  "name": "def db \u003d new DbUtils(config)",
  "keyword": "* "
});
formatter.step({
  "line": 20,
  "name": "print db",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "def SHIPMENTS \u003d db.readValue(\"SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
  "keyword": "* "
});
formatter.step({
  "line": 22,
  "name": "match SHIPMENTS \u003d\u003d \u0027BALCC0303\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "read(\u0027/resources/YVDRequest40DRY1Equipment.xml\u0027)",
      "offset": 8
    }
  ],
  "location": "StepDefs.request(String)"
});
formatter.result({
  "duration": 50942969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " baseUrl",
      "offset": 11
    }
  ],
  "location": "StepDefs.soapAction(String)"
});
formatter.result({
  "duration": 7334551979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 540210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027response: \u0027, response",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 10857085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "resp",
      "offset": 4
    },
    {
      "val": "response/Envelope/Body/ValidateShipmentOnYieldResponse/Shipment/ShipmentId",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 16477099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027resp:\u0027,resp",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 8385944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "resp",
      "offset": 6
    },
    {},
    {
      "val": "\u0027BALCC0303\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 6217700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "config",
      "offset": 4
    },
    {
      "val": "{ username: \u0027SDA241\u0027, password: \u0027Welcome@1\u0027, url: \u0027jdbc:oracle:thin:@(DESCRIPTION\u003d(ADDRESS_LIST\u003d(ADDRESS\u003d(PROTOCOL\u003dTCP)(HOST\u003dutmtest-scan.crb.apmoller.net)(PORT\u003d1521)))(CONNECT_DATA\u003d(SERVICE_NAME\u003dUTMTEST)(INSTANCE_NAME\u003dUTMTEST1)))\u0027, driverClassName: \u0027oracle.jdbc.xa.client.OracleXADataSource\u0027 }",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 53501208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DbUtils",
      "offset": 4
    },
    {
      "val": "Java.type(\u0027resources.DbUtils\u0027)",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17110047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "db",
      "offset": 4
    },
    {
      "val": "new DbUtils(config)",
      "offset": 9
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 132402847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "db",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 6587243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHIPMENTS",
      "offset": 4
    },
    {
      "val": "db.readValue(\"SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 855809863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "SHIPMENTS",
      "offset": 6
    },
    {},
    {
      "val": "\u0027BALCC0303\u0027",
      "offset": 19
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 5083683,
  "status": "passed"
});
});