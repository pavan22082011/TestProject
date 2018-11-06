$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo/yvdDemoResponse.feature");
formatter.feature({
  "line": 1,
  "name": "YVD FC service response validation using Karate",
  "description": "",
  "id": "yvd-fc-service-response-validation-using-karate",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Validate the YVD response for FC scenario",
  "description": "",
  "id": "yvd-fc-service-response-validation-using-karate;validate-the-yvd-response-for-fc-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "match resp \u003d\u003d  \u0027\u003cShipmentId\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 15,
  "name": "def respValidation \u003d response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription",
  "keyword": "* "
});
formatter.step({
  "line": 16,
  "name": "match respValidation \u003d\u003d \u0027\u003cValidationOutcome\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# use jdbc to validate"
    }
  ],
  "line": 19,
  "name": "def config \u003d { username: \u0027SDA241\u0027, password: \u0027Welcome@1\u0027, url: \u0027jdbc:oracle:thin:@(DESCRIPTION\u003d(ADDRESS_LIST\u003d(ADDRESS\u003d(PROTOCOL\u003dTCP)(HOST\u003dutmtest-scan.crb.apmoller.net)(PORT\u003d1521)))(CONNECT_DATA\u003d(SERVICE_NAME\u003dUTMTEST)(INSTANCE_NAME\u003dUTMTEST1)))\u0027, driverClassName: \u0027oracle.jdbc.xa.client.OracleXADataSource\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 20,
  "name": "def DbUtils \u003d Java.type(\u0027resources.DbUtils\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "def db \u003d new DbUtils(config)",
  "keyword": "* "
});
formatter.step({
  "line": 22,
  "name": "print db",
  "keyword": "* "
});
formatter.step({
  "line": 23,
  "name": "def SHIPMENTS1 \u003d db.readValue(\"SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "match SHIPMENTS1 \u003d\u003d resp",
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "def SHIPMENTS2 \u003d db.readRow(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "match SHIPMENTS2.SHIPMENT_ID \u003d\u003d resp",
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "def SHIPMENTS3 \u003d db.readRows(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION\")",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "match SHIPMENTS3.SHIPMENT_ID { SHIPMENT_ID: \u0027#(resp)\u0027}",
  "keyword": "* "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "yvd-fc-service-response-validation-using-karate;validate-the-yvd-response-for-fc-scenario;",
  "rows": [
    {
      "cells": [
        "ShipmentId",
        "ValidationOutcome"
      ],
      "line": 31,
      "id": "yvd-fc-service-response-validation-using-karate;validate-the-yvd-response-for-fc-scenario;;1"
    },
    {
      "cells": [
        "BALCC0303",
        "Fully Committed"
      ],
      "line": 32,
      "id": "yvd-fc-service-response-validation-using-karate;validate-the-yvd-response-for-fc-scenario;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 835890866,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the YVD response for FC scenario",
  "description": "",
  "id": "yvd-fc-service-response-validation-using-karate;validate-the-yvd-response-for-fc-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "match resp \u003d\u003d  \u0027BALCC0303\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 15,
  "name": "def respValidation \u003d response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription",
  "keyword": "* "
});
formatter.step({
  "line": 16,
  "name": "match respValidation \u003d\u003d \u0027Fully Committed\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "# use jdbc to validate"
    }
  ],
  "line": 19,
  "name": "def config \u003d { username: \u0027SDA241\u0027, password: \u0027Welcome@1\u0027, url: \u0027jdbc:oracle:thin:@(DESCRIPTION\u003d(ADDRESS_LIST\u003d(ADDRESS\u003d(PROTOCOL\u003dTCP)(HOST\u003dutmtest-scan.crb.apmoller.net)(PORT\u003d1521)))(CONNECT_DATA\u003d(SERVICE_NAME\u003dUTMTEST)(INSTANCE_NAME\u003dUTMTEST1)))\u0027, driverClassName: \u0027oracle.jdbc.xa.client.OracleXADataSource\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 20,
  "name": "def DbUtils \u003d Java.type(\u0027resources.DbUtils\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "def db \u003d new DbUtils(config)",
  "keyword": "* "
});
formatter.step({
  "line": 22,
  "name": "print db",
  "keyword": "* "
});
formatter.step({
  "line": 23,
  "name": "def SHIPMENTS1 \u003d db.readValue(\"SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "match SHIPMENTS1 \u003d\u003d resp",
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "def SHIPMENTS2 \u003d db.readRow(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "match SHIPMENTS2.SHIPMENT_ID \u003d\u003d resp",
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "def SHIPMENTS3 \u003d db.readRows(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION\")",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "match SHIPMENTS3.SHIPMENT_ID { SHIPMENT_ID: \u0027#(resp)\u0027}",
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
  "duration": 57872956,
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
  "duration": 7441763143,
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
  "duration": 541268,
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
  "duration": 8921922,
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
  "duration": 15046884,
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
  "duration": 7093249,
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
      "val": " \u0027BALCC0303\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 6287871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "respValidation",
      "offset": 4
    },
    {
      "val": "response/Envelope/Body/ValidateShipmentOnYieldResponse/ValidationDetails/ValidationPerEquipment/EquipmentTypeValidationOutcomeDescription",
      "offset": 21
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 3885842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "respValidation",
      "offset": 6
    },
    {},
    {
      "val": "\u0027Fully Committed\u0027",
      "offset": 24
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 10210033,
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
  "duration": 43787307,
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
  "duration": 9332721,
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
  "duration": 164516054,
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
  "duration": 5643287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHIPMENTS1",
      "offset": 4
    },
    {
      "val": "db.readValue(\"SELECT SHIPMENT_ID FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
      "offset": 17
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 540576374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "SHIPMENTS1",
      "offset": 6
    },
    {},
    {
      "val": "resp",
      "offset": 20
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 5760708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHIPMENTS2",
      "offset": 4
    },
    {
      "val": "db.readRow(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION C WHERE C.SHIPMENT_ID \u003d\u0027\"+resp+\"\u0027 \")",
      "offset": 17
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 265277143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "SHIPMENTS2.SHIPMENT_ID",
      "offset": 6
    },
    {},
    {
      "val": "resp",
      "offset": 32
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String)"
});
formatter.result({
  "duration": 9522782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHIPMENTS3",
      "offset": 4
    },
    {
      "val": "db.readRows(\"SELECT * FROM INT_BOOK_COMM.COMMITMENT_CONSUMPTION\")",
      "offset": 17
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 753495495,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});