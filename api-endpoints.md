Here is an incomplete list of available API endpoints and the data that is returned.


<details>
<summary>Status</summary>

URL: `https://iceportal.de/api1/rs/status`

Response 200:

``` json
{
    "connection": false,
    "serviceLevel": "SERVICE_ERROR",
    "gpsStatus": "VALID",
    "internet": "OFFLINE",
    "latitude": 51.188187,
    "longitude": 9.520819,
    "tileY": 132,
    "tileX": -6,
    "series": "412",
    "serverTime": 1757054606692,
    "speed": 236.9,
    "trainType": "ICE",
    "tzn": "ICE9021",
    "wagonClass": "FIRST",
    "connectivity": {
        "currentState": "NO_INTERNET",
        "nextState": null,
        "remainingTimeSeconds": null
    },
    "bapInstalled": true
}
```
</details>

<details>
<summary>Trip</summary>

URL: `https://iceportal.de/api1/rs/tripInfo/trip`

Response 200:

```json
{
    "trip": {
        "tripDate": "2025-09-05",
        "trainType": "ICE",
        "vzn": "270",
        "actualPosition": 216593,
        "distanceFromLastStop": 43337,
        "totalDistance": 660668,
        "stopInfo": {
            "scheduledNext": "8003200",
            "actualNext": "8003200",
            "actualLast": "8000115",
            "actualLastStarted": "8003200",
            "finalStationName": "Berlin Ostbahnhof",
            "finalStationEvaNr": "8010255"
        },
        "stops": [
            {
                "station": {
                    "evaNr": "8000191",
                    "name": "Karlsruhe Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 48.993515,
                        "longitude": 8.402181
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": null,
                    "actualArrivalTime": null,
                    "showActualArrivalTime": null,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757044620000,
                    "actualDepartureTime": 1757044696000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+1"
                },
                "track": {
                    "scheduled": "3",
                    "actual": "3"
                },
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 0,
                    "distanceFromStart": 0
                },
                "delayReasons": null
            },
            {
                "station": {
                    "evaNr": "8000244",
                    "name": "Mannheim Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 49.479354,
                        "longitude": 8.468921
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757046240000,
                    "actualArrivalTime": 1757046252000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757046720000,
                    "actualDepartureTime": 1757046768000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {
                    "scheduled": "2",
                    "actual": "2"
                },
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 54255,
                    "distanceFromStart": 54255
                },
                "delayReasons": null
            },
            {
                "station": {
                    "evaNr": "8000105",
                    "name": "Frankfurt(Main)Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 50.1066819,
                        "longitude": 8.66282825
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757048880000,
                    "actualArrivalTime": 1757049041000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+2",
                    "scheduledDepartureTime": 1757049240000,
                    "actualDepartureTime": 1757049302000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+1"
                },
                "track": {
                    "scheduled": "8",
                    "actual": "8"
                },
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 71151,
                    "distanceFromStart": 125406
                },
                "delayReasons": null
            },
            {
                "station": {
                    "evaNr": "8000150",
                    "name": "Hanau Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 50.120953,
                        "longitude": 8.929
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757050020000,
                    "actualArrivalTime": 1757050603000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+9",
                    "scheduledDepartureTime": 1757050140000,
                    "actualDepartureTime": 1757050680000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+9"
                },
                "track": {
                    "scheduled": "7",
                    "actual": "7"
                },
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "passed",
                    "distance": 19051,
                    "distanceFromStart": 144457
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8000115",
                    "name": "Fulda",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 50.5549058,
                        "longitude": 9.68416929
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757052720000,
                    "actualArrivalTime": 1757053289000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+9",
                    "scheduledDepartureTime": 1757052840000,
                    "actualDepartureTime": 1757053400000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+9"
                },
                "track": {
                    "scheduled": "6",
                    "actual": "6"
                },
                "info": {
                    "status": 0,
                    "passed": true,
                    "positionStatus": "departed",
                    "distance": 72136,
                    "distanceFromStart": 216593
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8003200",
                    "name": "Kassel-Wilhelmshöhe",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 51.3125585,
                        "longitude": 9.44711566
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757054580000,
                    "actualArrivalTime": 1757054940000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+6",
                    "scheduledDepartureTime": 1757054760000,
                    "actualDepartureTime": 1757055060000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+5"
                },
                "track": {
                    "scheduled": "3",
                    "actual": "3"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 85893,
                    "distanceFromStart": 302486
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8000128",
                    "name": "Göttingen",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 51.536815,
                        "longitude": 9.926072
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757055780000,
                    "actualArrivalTime": 1757056080000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+5",
                    "scheduledDepartureTime": 1757055960000,
                    "actualDepartureTime": 1757056200000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+4"
                },
                "track": {
                    "scheduled": "9",
                    "actual": "9"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 41540,
                    "distanceFromStart": 344026
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8000169",
                    "name": "Hildesheim Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.160626,
                        "longitude": 9.953497
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757057700000,
                    "actualArrivalTime": 1757057700000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757057760000,
                    "actualDepartureTime": 1757057820000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+1"
                },
                "track": {
                    "scheduled": "2",
                    "actual": "2"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 69410,
                    "distanceFromStart": 413436
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8000049",
                    "name": "Braunschweig Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.252218,
                        "longitude": 10.540295
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757059140000,
                    "actualArrivalTime": 1757059140000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757059260000,
                    "actualDepartureTime": 1757059260000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {
                    "scheduled": "7",
                    "actual": "7"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 41274,
                    "distanceFromStart": 454710
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8006552",
                    "name": "Wolfsburg Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.429498,
                        "longitude": 10.787784
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757060280000,
                    "actualArrivalTime": 1757060280000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757060340000,
                    "actualDepartureTime": 1757060340000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {
                    "scheduled": "5",
                    "actual": "5"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 25916,
                    "distanceFromStart": 480626
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8010404",
                    "name": "Berlin-Spandau",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.5346481,
                        "longitude": 13.1968975
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757063700000,
                    "actualArrivalTime": 1757063700000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": 1757063820000,
                    "actualDepartureTime": 1757063820000,
                    "showActualDepartureTime": true,
                    "departureDelay": ""
                },
                "track": {
                    "scheduled": "6",
                    "actual": "6"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 163599,
                    "distanceFromStart": 644225
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8011160",
                    "name": "Berlin Hbf",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.525592,
                        "longitude": 13.369545
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757064600000,
                    "actualArrivalTime": 1757064660000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "+1",
                    "scheduledDepartureTime": 1757064780000,
                    "actualDepartureTime": 1757064900000,
                    "showActualDepartureTime": true,
                    "departureDelay": "+2"
                },
                "track": {
                    "scheduled": "12",
                    "actual": "12"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 11725,
                    "distanceFromStart": 655950
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            },
            {
                "station": {
                    "evaNr": "8010255",
                    "name": "Berlin Ostbahnhof",
                    "code": null,
                    "geocoordinates": {
                        "latitude": 52.5104881,
                        "longitude": 13.4346807
                    }
                },
                "timetable": {
                    "scheduledArrivalTime": 1757065440000,
                    "actualArrivalTime": 1757065440000,
                    "showActualArrivalTime": true,
                    "arrivalDelay": "",
                    "scheduledDepartureTime": null,
                    "actualDepartureTime": null,
                    "showActualDepartureTime": null,
                    "departureDelay": ""
                },
                "track": {
                    "scheduled": "2",
                    "actual": "2"
                },
                "info": {
                    "status": 0,
                    "passed": false,
                    "positionStatus": "future",
                    "distance": 4718,
                    "distanceFromStart": 660668
                },
                "delayReasons": [
                    {
                        "code": "38",
                        "text": "Reparatur an der Strecke"
                    }
                ]
            }
        ]
    },
    "connection": {
        "trainType": null,
        "vzn": null,
        "trainNumber": null,
        "station": null,
        "timetable": null,
        "track": null,
        "info": null,
        "stops": null,
        "conflict": "NO_CONFLICT"
    },
    "active": null
}
```
</details>

<details>
<summary>BAP Service</summary>

URL: `https://iceportal.de/bap/api/bap-service-status`

Response 200:

``` json
{
    "bapServiceStatus": "ACTIVE"
}
```
</details>

<details>
<summary>Train Config</summary>

URL: `https://iceportal.de/bap/api/config`

Response 200:

``` json
{
    "coachList": {
        "coaches": [
            {
                "coachNumber": 1,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 2,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 3,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 4,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 5,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 6,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 7,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 8,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 9,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 10,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 11,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 12,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 14,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 21,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 22,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 23,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 24,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 25,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 26,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 27,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 28,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 29,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 31,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 32,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 33,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 34,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 35,
                "hasFirstClass": false,
                "hasSecondClass": true
            },
            {
                "coachNumber": 36,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 37,
                "hasFirstClass": true,
                "hasSecondClass": true
            },
            {
                "coachNumber": 38,
                "hasFirstClass": true,
                "hasSecondClass": false
            },
            {
                "coachNumber": 39,
                "hasFirstClass": true,
                "hasSecondClass": false
            }
        ],
        "errorMessage": {
            "text": "Der Bestellservice ist lediglich in der 1. Klasse verfügbar.",
            "messageType": "ERROR"
        },
        "hintMessage": {
            "text": "Hinweis: Der Bestellservice ist lediglich in der 1. Klasse verfügbar.",
            "messageType": "HINT"
        }
    }
}
```
</details>
