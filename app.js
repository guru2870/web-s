// Smart Urban Parking System - JavaScript
class SmartParkingSystem {
    constructor() {
        this.parkingData = {
            "parkingZones": [
    {
        "id": "zone_001",
        "name": "St. Joseph's College Parking",
        "location": {
            "lat": 12.8716,
            "lng": 80.2144
        },
        "totalSpots": 150,
        "availableSpots": 45,
        "type": "surface_lot",
        "pricing": "Free for students",
        "timeLimit": "8 hours",
        "amenities": [
            "campus_access",
            "security",
            "bike_racks"
        ],
        "walkingDistance": "1 min",
        "address": "Semmancheri, OMR, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_002",
        "name": "St. Joseph's College Parking",
        "location": {
            "lat": 12.8716,
            "lng": 80.2144
        },
        "totalSpots": 150,
        "availableSpots": 45,
        "type": "surface_lot",
        "pricing": "Free for students",
        "timeLimit": "8 hours",
        "amenities": [
            "campus_access",
            "security",
            "bike_racks"
        ],
        "walkingDistance": "1 min",
        "address": "Semmancheri, OMR, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_003",
        "name": "Sathyabama University Lot",
        "location": {
            "lat": 12.8728,
            "lng": 80.2266
        },
        "totalSpots": 200,
        "availableSpots": 120,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "12 hours",
        "amenities": [
            "student_rates",
            "shuttle_service"
        ],
        "walkingDistance": "5 min",
        "address": "Jeppiaar Nagar, OMR, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_004",
        "name": "Sathyabama University Lot",
        "location": {
            "lat": 12.8728,
            "lng": 80.2266
        },
        "totalSpots": 200,
        "availableSpots": 120,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "12 hours",
        "amenities": [
            "student_rates",
            "shuttle_service"
        ],
        "walkingDistance": "5 min",
        "address": "Jeppiaar Nagar, OMR, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_005",
        "name": "Four Points by Sheraton Garage",
        "location": {
            "lat": 12.8756,
            "lng": 80.2272
        },
        "totalSpots": 180,
        "availableSpots": 50,
        "type": "parking_garage",
        "pricing": "₹50/hour",
        "timeLimit": "24 hours",
        "amenities": [
            "covered",
            "ev_charging",
            "disabled_accessible"
        ],
        "walkingDistance": "3 min",
        "address": "Rajiv Gandhi Salai, Semmancheri, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_006",
        "name": "Four Points by Sheraton Garage",
        "location": {
            "lat": 12.8756,
            "lng": 80.2272
        },
        "totalSpots": 180,
        "availableSpots": 50,
        "type": "parking_garage",
        "pricing": "₹50/hour",
        "timeLimit": "24 hours",
        "amenities": [
            "covered",
            "ev_charging",
            "disabled_accessible"
        ],
        "walkingDistance": "3 min",
        "address": "Rajiv Gandhi Salai, Semmancheri, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_007",
        "name": "Fairfield by Marriott Parking",
        "location": {
            "lat": 12.8756,
            "lng": 80.2272
        },
        "totalSpots": 120,
        "availableSpots": 80,
        "type": "parking_garage",
        "pricing": "₹40/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "covered",
            "security",
            "validation"
        ],
        "walkingDistance": "4 min",
        "address": "Rajiv Gandhi Salai, OMR, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_008",
        "name": "Fairfield by Marriott Parking",
        "location": {
            "lat": 12.8756,
            "lng": 80.2272
        },
        "totalSpots": 120,
        "availableSpots": 80,
        "type": "parking_garage",
        "pricing": "₹40/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "covered",
            "security",
            "validation"
        ],
        "walkingDistance": "4 min",
        "address": "Rajiv Gandhi Salai, OMR, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_009",
        "name": "Vivira Mall Parking",
        "location": {
            "lat": 12.85,
            "lng": 80.225
        },
        "totalSpots": 300,
        "availableSpots": 150,
        "type": "parking_garage",
        "pricing": "₹30/hour",
        "timeLimit": "6 hours",
        "amenities": [
            "covered",
            "shopping_access",
            "escalator_access"
        ],
        "walkingDistance": "10 min",
        "address": "Old Mahabalipuram Road, Navalur, Chennai 600130",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_010",
        "name": "Vivira Mall Parking",
        "location": {
            "lat": 12.85,
            "lng": 80.225
        },
        "totalSpots": 300,
        "availableSpots": 150,
        "type": "parking_garage",
        "pricing": "₹30/hour",
        "timeLimit": "6 hours",
        "amenities": [
            "covered",
            "shopping_access",
            "escalator_access"
        ],
        "walkingDistance": "10 min",
        "address": "Old Mahabalipuram Road, Navalur, Chennai 600130",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_011",
        "name": "SIPCOT IT Park Lot",
        "location": {
            "lat": 12.828,
            "lng": 80.222
        },
        "totalSpots": 250,
        "availableSpots": 100,
        "type": "surface_lot",
        "pricing": "₹25/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "IT_park_access",
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Siruseri, OMR, Chennai 603103",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_012",
        "name": "SIPCOT IT Park Lot",
        "location": {
            "lat": 12.828,
            "lng": 80.222
        },
        "totalSpots": 250,
        "availableSpots": 100,
        "type": "surface_lot",
        "pricing": "₹25/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "IT_park_access",
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Siruseri, OMR, Chennai 603103",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_013",
        "name": "Semmancheri Street Parking",
        "location": {
            "lat": 12.87,
            "lng": 80.22
        },
        "totalSpots": 50,
        "availableSpots": 20,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "meters",
            "near_colleges"
        ],
        "walkingDistance": "2 min",
        "address": "Kamaraj Nagar, Semmancheri, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_014",
        "name": "Semmancheri Street Parking",
        "location": {
            "lat": 12.87,
            "lng": 80.22
        },
        "totalSpots": 50,
        "availableSpots": 20,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "meters",
            "near_colleges"
        ],
        "walkingDistance": "2 min",
        "address": "Kamaraj Nagar, Semmancheri, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_015",
        "name": "Navalur Commercial Garage",
        "location": {
            "lat": 12.855,
            "lng": 80.225
        },
        "totalSpots": 180,
        "availableSpots": 90,
        "type": "parking_garage",
        "pricing": "₹35/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "shopping_validation",
            "security"
        ],
        "walkingDistance": "8 min",
        "address": "Navalur, OMR, Chennai 600130",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_016",
        "name": "Navalur Commercial Garage",
        "location": {
            "lat": 12.855,
            "lng": 80.225
        },
        "totalSpots": 180,
        "availableSpots": 90,
        "type": "parking_garage",
        "pricing": "₹35/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "shopping_validation",
            "security"
        ],
        "walkingDistance": "8 min",
        "address": "Navalur, OMR, Chennai 600130",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_017",
        "name": "Thalambur Open Lot",
        "location": {
            "lat": 12.8536,
            "lng": 80.2073
        },
        "totalSpots": 100,
        "availableSpots": 60,
        "type": "surface_lot",
        "pricing": "₹15/hour",
        "timeLimit": "6 hours",
        "amenities": [
            "open_air",
            "bike_racks"
        ],
        "walkingDistance": "12 min",
        "address": "Thalambur, OMR, Chennai 600130",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_018",
        "name": "Thalambur Open Lot",
        "location": {
            "lat": 12.8536,
            "lng": 80.2073
        },
        "totalSpots": 100,
        "availableSpots": 60,
        "type": "surface_lot",
        "pricing": "₹15/hour",
        "timeLimit": "6 hours",
        "amenities": [
            "open_air",
            "bike_racks"
        ],
        "walkingDistance": "12 min",
        "address": "Thalambur, OMR, Chennai 600130",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_019",
        "name": "ECR Beachside Parking",
        "location": {
            "lat": 12.85,
            "lng": 80.24
        },
        "totalSpots": 80,
        "availableSpots": 40,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "beach_access",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "East Coast Road, Near OMR, Chennai 600119",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_020",
        "name": "ECR Beachside Parking",
        "location": {
            "lat": 12.85,
            "lng": 80.24
        },
        "totalSpots": 80,
        "availableSpots": 40,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "beach_access",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "East Coast Road, Near OMR, Chennai 600119",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_021",
        "name": "T. Nagar / Pondy Bazaar",
        "location": {
            "lat": 13.0402,
            "lng": 80.2337
        },
        "totalSpots": 50,
        "availableSpots": 15,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "T. Nagar / Pondy Bazaar, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_022",
        "name": "T. Nagar / Pondy Bazaar",
        "location": {
            "lat": 13.0402,
            "lng": 80.2337
        },
        "totalSpots": 50,
        "availableSpots": 15,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "T. Nagar / Pondy Bazaar, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_023",
        "name": "Anna Salai / Mount Road",
        "location": {
            "lat": 13.0604,
            "lng": 80.2666
        },
        "totalSpots": 100,
        "availableSpots": 81,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Anna Salai / Mount Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_024",
        "name": "Anna Salai / Mount Road",
        "location": {
            "lat": 13.0604,
            "lng": 80.2666
        },
        "totalSpots": 100,
        "availableSpots": 81,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Anna Salai / Mount Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_025",
        "name": "Mylapore Main Road",
        "location": {
            "lat": 13.0329,
            "lng": 80.2689
        },
        "totalSpots": 150,
        "availableSpots": 17,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "Mylapore Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_026",
        "name": "Mylapore Main Road",
        "location": {
            "lat": 13.0329,
            "lng": 80.2689
        },
        "totalSpots": 150,
        "availableSpots": 17,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "Mylapore Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_027",
        "name": "Marina Beach (service road)",
        "location": {
            "lat": 13.0498,
            "lng": 80.2829
        },
        "totalSpots": 50,
        "availableSpots": 23,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Marina Beach (service road), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_028",
        "name": "Marina Beach (service road)",
        "location": {
            "lat": 13.0498,
            "lng": 80.2829
        },
        "totalSpots": 50,
        "availableSpots": 23,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Marina Beach (service road), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_029",
        "name": "Besant Nagar (Elliot’s Beach Rd)",
        "location": {
            "lat": 13.0007,
            "lng": 80.2667
        },
        "totalSpots": 120,
        "availableSpots": 74,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Besant Nagar (Elliot’s Beach Rd), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_030",
        "name": "Besant Nagar (Elliot’s Beach Rd)",
        "location": {
            "lat": 13.0007,
            "lng": 80.2667
        },
        "totalSpots": 120,
        "availableSpots": 74,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Besant Nagar (Elliot’s Beach Rd), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_031",
        "name": "Koyambedu Market / Koyambedu Bus Terminus",
        "location": {
            "lat": 13.0702,
            "lng": 80.1962
        },
        "totalSpots": 80,
        "availableSpots": 56,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Koyambedu Market / Koyambedu Bus Terminus, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_032",
        "name": "Koyambedu Market / Koyambedu Bus Terminus",
        "location": {
            "lat": 13.0702,
            "lng": 80.1962
        },
        "totalSpots": 80,
        "availableSpots": 56,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Koyambedu Market / Koyambedu Bus Terminus, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_033",
        "name": "Teynampet / Greams Road",
        "location": {
            "lat": 13.0605,
            "lng": 80.2544
        },
        "totalSpots": 150,
        "availableSpots": 79,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Teynampet / Greams Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_034",
        "name": "Teynampet / Greams Road",
        "location": {
            "lat": 13.0605,
            "lng": 80.2544
        },
        "totalSpots": 150,
        "availableSpots": 79,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Teynampet / Greams Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_035",
        "name": "Nungambakkam High Road",
        "location": {
            "lat": 13.057,
            "lng": 80.2425
        },
        "totalSpots": 120,
        "availableSpots": 47,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Nungambakkam High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_036",
        "name": "Nungambakkam High Road",
        "location": {
            "lat": 13.057,
            "lng": 80.2425
        },
        "totalSpots": 120,
        "availableSpots": 47,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Nungambakkam High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_037",
        "name": "Egmore Station area",
        "location": {
            "lat": 13.073,
            "lng": 80.2599
        },
        "totalSpots": 100,
        "availableSpots": 79,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Egmore Station area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_038",
        "name": "Egmore Station area",
        "location": {
            "lat": 13.073,
            "lng": 80.2599
        },
        "totalSpots": 100,
        "availableSpots": 79,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Egmore Station area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_039",
        "name": "Perambur Market Road",
        "location": {
            "lat": 13.1183,
            "lng": 80.2402
        },
        "totalSpots": 100,
        "availableSpots": 76,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Perambur Market Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_040",
        "name": "Perambur Market Road",
        "location": {
            "lat": 13.1183,
            "lng": 80.2402
        },
        "totalSpots": 100,
        "availableSpots": 76,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Perambur Market Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_041",
        "name": "George Town / Parrys Corner",
        "location": {
            "lat": 13.0936,
            "lng": 80.2875
        },
        "totalSpots": 80,
        "availableSpots": 20,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "George Town / Parrys Corner, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_042",
        "name": "George Town / Parrys Corner",
        "location": {
            "lat": 13.0936,
            "lng": 80.2875
        },
        "totalSpots": 80,
        "availableSpots": 20,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "George Town / Parrys Corner, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_043",
        "name": "Broadway / NSC Bose Road",
        "location": {
            "lat": 13.0889,
            "lng": 80.2829
        },
        "totalSpots": 120,
        "availableSpots": 81,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Broadway / NSC Bose Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_044",
        "name": "Broadway / NSC Bose Road",
        "location": {
            "lat": 13.0889,
            "lng": 80.2829
        },
        "totalSpots": 120,
        "availableSpots": 81,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Broadway / NSC Bose Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_045",
        "name": "Sowcarpet / Mint Street",
        "location": {
            "lat": 13.0971,
            "lng": 80.2806
        },
        "totalSpots": 80,
        "availableSpots": 39,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Sowcarpet / Mint Street, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_046",
        "name": "Sowcarpet / Mint Street",
        "location": {
            "lat": 13.0971,
            "lng": 80.2806
        },
        "totalSpots": 80,
        "availableSpots": 39,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Sowcarpet / Mint Street, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_047",
        "name": "Purasawalkam High Road",
        "location": {
            "lat": 13.0906,
            "lng": 80.2575
        },
        "totalSpots": 120,
        "availableSpots": 70,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Purasawalkam High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_048",
        "name": "Purasawalkam High Road",
        "location": {
            "lat": 13.0906,
            "lng": 80.2575
        },
        "totalSpots": 120,
        "availableSpots": 70,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Purasawalkam High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_049",
        "name": "Royapettah / Royapettah High Road",
        "location": {
            "lat": 13.0548,
            "lng": 80.2685
        },
        "totalSpots": 150,
        "availableSpots": 107,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Royapettah / Royapettah High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_050",
        "name": "Royapettah / Royapettah High Road",
        "location": {
            "lat": 13.0548,
            "lng": 80.2685
        },
        "totalSpots": 150,
        "availableSpots": 107,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Royapettah / Royapettah High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_051",
        "name": "Anna Nagar 2nd Avenue",
        "location": {
            "lat": 13.0829,
            "lng": 80.2062
        },
        "totalSpots": 50,
        "availableSpots": 41,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Anna Nagar 2nd Avenue, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_052",
        "name": "Anna Nagar 2nd Avenue",
        "location": {
            "lat": 13.0829,
            "lng": 80.2062
        },
        "totalSpots": 50,
        "availableSpots": 41,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Anna Nagar 2nd Avenue, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_053",
        "name": "Vadapalani / Arcot Road",
        "location": {
            "lat": 13.058,
            "lng": 80.2012
        },
        "totalSpots": 100,
        "availableSpots": 29,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Vadapalani / Arcot Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_054",
        "name": "Vadapalani / Arcot Road",
        "location": {
            "lat": 13.058,
            "lng": 80.2012
        },
        "totalSpots": 100,
        "availableSpots": 29,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Vadapalani / Arcot Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_055",
        "name": "Porur Junction / Mount Poonamallee Road",
        "location": {
            "lat": 13.0381,
            "lng": 80.1596
        },
        "totalSpots": 50,
        "availableSpots": 10,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Porur Junction / Mount Poonamallee Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_056",
        "name": "Porur Junction / Mount Poonamallee Road",
        "location": {
            "lat": 13.0381,
            "lng": 80.1596
        },
        "totalSpots": 50,
        "availableSpots": 10,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Porur Junction / Mount Poonamallee Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_057",
        "name": "Chrompet High Road",
        "location": {
            "lat": 12.9485,
            "lng": 80.1391
        },
        "totalSpots": 120,
        "availableSpots": 73,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Chrompet High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_058",
        "name": "Chrompet High Road",
        "location": {
            "lat": 12.9485,
            "lng": 80.1391
        },
        "totalSpots": 120,
        "availableSpots": 73,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Chrompet High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_059",
        "name": "Tambaram Bus Stand / Market",
        "location": {
            "lat": 12.9229,
            "lng": 80.127
        },
        "totalSpots": 150,
        "availableSpots": 149,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Tambaram Bus Stand / Market, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_060",
        "name": "Tambaram Bus Stand / Market",
        "location": {
            "lat": 12.9229,
            "lng": 80.127
        },
        "totalSpots": 150,
        "availableSpots": 149,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Tambaram Bus Stand / Market, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_061",
        "name": "Medavakkam Main Road",
        "location": {
            "lat": 12.9482,
            "lng": 80.2093
        },
        "totalSpots": 80,
        "availableSpots": 11,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Medavakkam Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_062",
        "name": "Medavakkam Main Road",
        "location": {
            "lat": 12.9482,
            "lng": 80.2093
        },
        "totalSpots": 80,
        "availableSpots": 11,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Medavakkam Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_063",
        "name": "Velachery / Velachery Main Road",
        "location": {
            "lat": 12.9866,
            "lng": 80.2209
        },
        "totalSpots": 150,
        "availableSpots": 122,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Velachery / Velachery Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_064",
        "name": "Velachery / Velachery Main Road",
        "location": {
            "lat": 12.9866,
            "lng": 80.2209
        },
        "totalSpots": 150,
        "availableSpots": 122,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Velachery / Velachery Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_065",
        "name": "Guindy / Guindy Main Road",
        "location": {
            "lat": 13.0102,
            "lng": 80.2156
        },
        "totalSpots": 120,
        "availableSpots": 80,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Guindy / Guindy Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_066",
        "name": "Guindy / Guindy Main Road",
        "location": {
            "lat": 13.0102,
            "lng": 80.2156
        },
        "totalSpots": 120,
        "availableSpots": 80,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Guindy / Guindy Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_067",
        "name": "Saidapet / Mount Road near Saidapet",
        "location": {
            "lat": 13.0183,
            "lng": 80.2212
        },
        "totalSpots": 50,
        "availableSpots": 38,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Saidapet / Mount Road near Saidapet, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_068",
        "name": "Saidapet / Mount Road near Saidapet",
        "location": {
            "lat": 13.0183,
            "lng": 80.2212
        },
        "totalSpots": 50,
        "availableSpots": 38,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Saidapet / Mount Road near Saidapet, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_069",
        "name": "Anna University / CEG area (Guindy)",
        "location": {
            "lat": 13.0115,
            "lng": 80.2381
        },
        "totalSpots": 50,
        "availableSpots": 50,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Anna University / CEG area (Guindy), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_070",
        "name": "Anna University / CEG area (Guindy)",
        "location": {
            "lat": 13.0115,
            "lng": 80.2381
        },
        "totalSpots": 50,
        "availableSpots": 50,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Anna University / CEG area (Guindy), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_071",
        "name": "OMR / Sholinganallur stretch",
        "location": {
            "lat": 12.8996,
            "lng": 80.2275
        },
        "totalSpots": 150,
        "availableSpots": 28,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "OMR / Sholinganallur stretch, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_072",
        "name": "OMR / Sholinganallur stretch",
        "location": {
            "lat": 12.8996,
            "lng": 80.2275
        },
        "totalSpots": 150,
        "availableSpots": 28,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "OMR / Sholinganallur stretch, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_073",
        "name": "Thiruvanmiyur / ECR Road start",
        "location": {
            "lat": 12.983,
            "lng": 80.259
        },
        "totalSpots": 100,
        "availableSpots": 15,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Thiruvanmiyur / ECR Road start, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_074",
        "name": "Thiruvanmiyur / ECR Road start",
        "location": {
            "lat": 12.983,
            "lng": 80.259
        },
        "totalSpots": 100,
        "availableSpots": 15,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Thiruvanmiyur / ECR Road start, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_075",
        "name": "Adyar / Sardar Patel Road",
        "location": {
            "lat": 13.0067,
            "lng": 80.2571
        },
        "totalSpots": 100,
        "availableSpots": 28,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Adyar / Sardar Patel Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_076",
        "name": "Adyar / Sardar Patel Road",
        "location": {
            "lat": 13.0067,
            "lng": 80.2571
        },
        "totalSpots": 100,
        "availableSpots": 28,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Adyar / Sardar Patel Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_077",
        "name": "Besant Nagar 6th Avenue",
        "location": {
            "lat": 12.9999,
            "lng": 80.2665
        },
        "totalSpots": 50,
        "availableSpots": 18,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Besant Nagar 6th Avenue, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_078",
        "name": "Besant Nagar 6th Avenue",
        "location": {
            "lat": 12.9999,
            "lng": 80.2665
        },
        "totalSpots": 50,
        "availableSpots": 18,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Besant Nagar 6th Avenue, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_079",
        "name": "Kotturpuram / Gandhi Statue area",
        "location": {
            "lat": 13.0216,
            "lng": 80.2621
        },
        "totalSpots": 120,
        "availableSpots": 24,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Kotturpuram / Gandhi Statue area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_080",
        "name": "Kotturpuram / Gandhi Statue area",
        "location": {
            "lat": 13.0216,
            "lng": 80.2621
        },
        "totalSpots": 120,
        "availableSpots": 24,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Kotturpuram / Gandhi Statue area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_081",
        "name": "MRC Nagar / Neil Road",
        "location": {
            "lat": 13.0394,
            "lng": 80.2587
        },
        "totalSpots": 50,
        "availableSpots": 21,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "MRC Nagar / Neil Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_082",
        "name": "MRC Nagar / Neil Road",
        "location": {
            "lat": 13.0394,
            "lng": 80.2587
        },
        "totalSpots": 50,
        "availableSpots": 21,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "MRC Nagar / Neil Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_083",
        "name": "Kilpauk Market Road",
        "location": {
            "lat": 13.0676,
            "lng": 80.2322
        },
        "totalSpots": 50,
        "availableSpots": 42,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Kilpauk Market Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_084",
        "name": "Kilpauk Market Road",
        "location": {
            "lat": 13.0676,
            "lng": 80.2322
        },
        "totalSpots": 50,
        "availableSpots": 42,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Kilpauk Market Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_085",
        "name": "Chetpet / Harrington Road junction",
        "location": {
            "lat": 13.0696,
            "lng": 80.2255
        },
        "totalSpots": 150,
        "availableSpots": 71,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Chetpet / Harrington Road junction, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_086",
        "name": "Chetpet / Harrington Road junction",
        "location": {
            "lat": 13.0696,
            "lng": 80.2255
        },
        "totalSpots": 150,
        "availableSpots": 71,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Chetpet / Harrington Road junction, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_087",
        "name": "CIT Colony / Anna Nagar East",
        "location": {
            "lat": 13.0849,
            "lng": 80.2069
        },
        "totalSpots": 80,
        "availableSpots": 25,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "CIT Colony / Anna Nagar East, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_088",
        "name": "CIT Colony / Anna Nagar East",
        "location": {
            "lat": 13.0849,
            "lng": 80.2069
        },
        "totalSpots": 80,
        "availableSpots": 25,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "CIT Colony / Anna Nagar East, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_089",
        "name": "Triplicane High Road",
        "location": {
            "lat": 13.0427,
            "lng": 80.2793
        },
        "totalSpots": 80,
        "availableSpots": 46,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Triplicane High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_090",
        "name": "Triplicane High Road",
        "location": {
            "lat": 13.0427,
            "lng": 80.2793
        },
        "totalSpots": 80,
        "availableSpots": 46,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Triplicane High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_091",
        "name": "Pudupet / Broadway extension",
        "location": {
            "lat": 13.0852,
            "lng": 80.2837
        },
        "totalSpots": 120,
        "availableSpots": 36,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Pudupet / Broadway extension, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_092",
        "name": "Pudupet / Broadway extension",
        "location": {
            "lat": 13.0852,
            "lng": 80.2837
        },
        "totalSpots": 120,
        "availableSpots": 36,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Pudupet / Broadway extension, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_093",
        "name": "Vepery / Perambur High Road",
        "location": {
            "lat": 13.0832,
            "lng": 80.2726
        },
        "totalSpots": 80,
        "availableSpots": 72,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Vepery / Perambur High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_094",
        "name": "Vepery / Perambur High Road",
        "location": {
            "lat": 13.0832,
            "lng": 80.2726
        },
        "totalSpots": 80,
        "availableSpots": 72,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Vepery / Perambur High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_095",
        "name": "Nandanam / Nandanam Main Road",
        "location": {
            "lat": 13.041,
            "lng": 80.2218
        },
        "totalSpots": 120,
        "availableSpots": 88,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Nandanam / Nandanam Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_096",
        "name": "Nandanam / Nandanam Main Road",
        "location": {
            "lat": 13.041,
            "lng": 80.2218
        },
        "totalSpots": 120,
        "availableSpots": 88,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "15 min",
        "address": "Nandanam / Nandanam Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_097",
        "name": "Mount Road — Express Avenue area",
        "location": {
            "lat": 13.0622,
            "lng": 80.2676
        },
        "totalSpots": 120,
        "availableSpots": 16,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Mount Road — Express Avenue area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_098",
        "name": "Mount Road — Express Avenue area",
        "location": {
            "lat": 13.0622,
            "lng": 80.2676
        },
        "totalSpots": 120,
        "availableSpots": 16,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Mount Road — Express Avenue area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_099",
        "name": "Ritchie Street (electronics market)",
        "location": {
            "lat": 13.0905,
            "lng": 80.2829
        },
        "totalSpots": 120,
        "availableSpots": 85,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Ritchie Street (electronics market), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_100",
        "name": "Ritchie Street (electronics market)",
        "location": {
            "lat": 13.0905,
            "lng": 80.2829
        },
        "totalSpots": 120,
        "availableSpots": 85,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Ritchie Street (electronics market), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_101",
        "name": "Little Mount (Mambalam)",
        "location": {
            "lat": 13.04,
            "lng": 80.2143
        },
        "totalSpots": 100,
        "availableSpots": 100,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Little Mount (Mambalam), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_102",
        "name": "Little Mount (Mambalam)",
        "location": {
            "lat": 13.04,
            "lng": 80.2143
        },
        "totalSpots": 100,
        "availableSpots": 100,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Little Mount (Mambalam), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_103",
        "name": "Mambalam / T. Nagar border",
        "location": {
            "lat": 13.049,
            "lng": 80.2305
        },
        "totalSpots": 50,
        "availableSpots": 19,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Mambalam / T. Nagar border, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_104",
        "name": "Mambalam / T. Nagar border",
        "location": {
            "lat": 13.049,
            "lng": 80.2305
        },
        "totalSpots": 50,
        "availableSpots": 19,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Mambalam / T. Nagar border, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_105",
        "name": "Marina Corridor Service Road (near Light House)",
        "location": {
            "lat": 13.0437,
            "lng": 80.2768
        },
        "totalSpots": 150,
        "availableSpots": 16,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Marina Corridor Service Road (near Light House), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_106",
        "name": "Marina Corridor Service Road (near Light House)",
        "location": {
            "lat": 13.0437,
            "lng": 80.2768
        },
        "totalSpots": 150,
        "availableSpots": 16,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Marina Corridor Service Road (near Light House), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_107",
        "name": "Chamiers Road / Royapettah",
        "location": {
            "lat": 13.0562,
            "lng": 80.2663
        },
        "totalSpots": 50,
        "availableSpots": 22,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Chamiers Road / Royapettah, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_108",
        "name": "Chamiers Road / Royapettah",
        "location": {
            "lat": 13.0562,
            "lng": 80.2663
        },
        "totalSpots": 50,
        "availableSpots": 22,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Chamiers Road / Royapettah, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_109",
        "name": "G. N. Chetty Road / T. Nagar",
        "location": {
            "lat": 13.0398,
            "lng": 80.234
        },
        "totalSpots": 120,
        "availableSpots": 82,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "G. N. Chetty Road / T. Nagar, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_110",
        "name": "G. N. Chetty Road / T. Nagar",
        "location": {
            "lat": 13.0398,
            "lng": 80.234
        },
        "totalSpots": 120,
        "availableSpots": 82,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "G. N. Chetty Road / T. Nagar, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_111",
        "name": "Nungambakkam Railway Station area",
        "location": {
            "lat": 13.0607,
            "lng": 80.2352
        },
        "totalSpots": 80,
        "availableSpots": 68,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Nungambakkam Railway Station area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_112",
        "name": "Nungambakkam Railway Station area",
        "location": {
            "lat": 13.0607,
            "lng": 80.2352
        },
        "totalSpots": 80,
        "availableSpots": 68,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Nungambakkam Railway Station area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_113",
        "name": "Kilpauk Garden / YMCA junction",
        "location": {
            "lat": 13.0663,
            "lng": 80.2347
        },
        "totalSpots": 150,
        "availableSpots": 31,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Kilpauk Garden / YMCA junction, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_114",
        "name": "Kilpauk Garden / YMCA junction",
        "location": {
            "lat": 13.0663,
            "lng": 80.2347
        },
        "totalSpots": 150,
        "availableSpots": 31,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Kilpauk Garden / YMCA junction, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_115",
        "name": "Basin Bridge Road / Royapuram area",
        "location": {
            "lat": 13.1067,
            "lng": 80.2876
        },
        "totalSpots": 100,
        "availableSpots": 57,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Basin Bridge Road / Royapuram area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_116",
        "name": "Basin Bridge Road / Royapuram area",
        "location": {
            "lat": 13.1067,
            "lng": 80.2876
        },
        "totalSpots": 100,
        "availableSpots": 57,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Basin Bridge Road / Royapuram area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_117",
        "name": "Tiruvottiyur High Road",
        "location": {
            "lat": 13.1988,
            "lng": 80.3079
        },
        "totalSpots": 100,
        "availableSpots": 39,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Tiruvottiyur High Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_118",
        "name": "Tiruvottiyur High Road",
        "location": {
            "lat": 13.1988,
            "lng": 80.3079
        },
        "totalSpots": 100,
        "availableSpots": 39,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Tiruvottiyur High Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_119",
        "name": "Ennore / Industrial area Road",
        "location": {
            "lat": 13.2362,
            "lng": 80.3003
        },
        "totalSpots": 100,
        "availableSpots": 98,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Ennore / Industrial area Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_120",
        "name": "Ennore / Industrial area Road",
        "location": {
            "lat": 13.2362,
            "lng": 80.3003
        },
        "totalSpots": 100,
        "availableSpots": 98,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Ennore / Industrial area Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_121",
        "name": "Vyasarpadi / Washermanpet area",
        "location": {
            "lat": 13.1189,
            "lng": 80.2832
        },
        "totalSpots": 80,
        "availableSpots": 74,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Vyasarpadi / Washermanpet area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_122",
        "name": "Vyasarpadi / Washermanpet area",
        "location": {
            "lat": 13.1189,
            "lng": 80.2832
        },
        "totalSpots": 80,
        "availableSpots": 74,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Vyasarpadi / Washermanpet area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_123",
        "name": "Kodambakkam (film hub)",
        "location": {
            "lat": 13.0645,
            "lng": 80.2129
        },
        "totalSpots": 150,
        "availableSpots": 101,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Kodambakkam (film hub), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_124",
        "name": "Kodambakkam (film hub)",
        "location": {
            "lat": 13.0645,
            "lng": 80.2129
        },
        "totalSpots": 150,
        "availableSpots": 101,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Kodambakkam (film hub), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_125",
        "name": "Koyambedu Flyover approaches",
        "location": {
            "lat": 13.0725,
            "lng": 80.1939
        },
        "totalSpots": 150,
        "availableSpots": 74,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Koyambedu Flyover approaches, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_126",
        "name": "Koyambedu Flyover approaches",
        "location": {
            "lat": 13.0725,
            "lng": 80.1939
        },
        "totalSpots": 150,
        "availableSpots": 74,
        "type": "multi_level",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Koyambedu Flyover approaches, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_127",
        "name": "Kodungaiyur Road / Ennore link",
        "location": {
            "lat": 13.203,
            "lng": 80.271
        },
        "totalSpots": 120,
        "availableSpots": 59,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Kodungaiyur Road / Ennore link, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_128",
        "name": "Kodungaiyur Road / Ennore link",
        "location": {
            "lat": 13.203,
            "lng": 80.271
        },
        "totalSpots": 120,
        "availableSpots": 59,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Kodungaiyur Road / Ennore link, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_129",
        "name": "K.K. Nagar Main Road",
        "location": {
            "lat": 13.0372,
            "lng": 80.1985
        },
        "totalSpots": 50,
        "availableSpots": 30,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "K.K. Nagar Main Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_130",
        "name": "K.K. Nagar Main Road",
        "location": {
            "lat": 13.0372,
            "lng": 80.1985
        },
        "totalSpots": 50,
        "availableSpots": 30,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "K.K. Nagar Main Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_131",
        "name": "Velachery Tank / 100 Feet Road",
        "location": {
            "lat": 12.9942,
            "lng": 80.221
        },
        "totalSpots": 120,
        "availableSpots": 115,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Velachery Tank / 100 Feet Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_132",
        "name": "Velachery Tank / 100 Feet Road",
        "location": {
            "lat": 12.9942,
            "lng": 80.221
        },
        "totalSpots": 120,
        "availableSpots": 115,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Velachery Tank / 100 Feet Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_133",
        "name": "Perungudi / GST Road junction",
        "location": {
            "lat": 12.9658,
            "lng": 80.2364
        },
        "totalSpots": 50,
        "availableSpots": 44,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Perungudi / GST Road junction, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_134",
        "name": "Perungudi / GST Road junction",
        "location": {
            "lat": 12.9658,
            "lng": 80.2364
        },
        "totalSpots": 50,
        "availableSpots": 44,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "parking"
        ],
        "walkingDistance": "10 min",
        "address": "Perungudi / GST Road junction, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_135",
        "name": "Pallavaram / Grand Southern Trunk Road",
        "location": {
            "lat": 12.9833,
            "lng": 80.1552
        },
        "totalSpots": 120,
        "availableSpots": 45,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Pallavaram / Grand Southern Trunk Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_136",
        "name": "Pallavaram / Grand Southern Trunk Road",
        "location": {
            "lat": 12.9833,
            "lng": 80.1552
        },
        "totalSpots": 120,
        "availableSpots": 45,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Pallavaram / Grand Southern Trunk Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_137",
        "name": "Chromepet Market / Bazaar area",
        "location": {
            "lat": 12.9478,
            "lng": 80.1399
        },
        "totalSpots": 150,
        "availableSpots": 34,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Chromepet Market / Bazaar area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_138",
        "name": "Chromepet Market / Bazaar area",
        "location": {
            "lat": 12.9478,
            "lng": 80.1399
        },
        "totalSpots": 150,
        "availableSpots": 34,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Chromepet Market / Bazaar area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_139",
        "name": "Saidapet Bus Terminus area",
        "location": {
            "lat": 13.0187,
            "lng": 80.2217
        },
        "totalSpots": 120,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Saidapet Bus Terminus area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_140",
        "name": "Saidapet Bus Terminus area",
        "location": {
            "lat": 13.0187,
            "lng": 80.2217
        },
        "totalSpots": 120,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Saidapet Bus Terminus area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_141",
        "name": "Thiru Vi Ka Nagar / Purasaiwalkam outskirts",
        "location": {
            "lat": 13.0995,
            "lng": 80.2538
        },
        "totalSpots": 100,
        "availableSpots": 18,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Thiru Vi Ka Nagar / Purasaiwalkam outskirts, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_142",
        "name": "Thiru Vi Ka Nagar / Purasaiwalkam outskirts",
        "location": {
            "lat": 13.0995,
            "lng": 80.2538
        },
        "totalSpots": 100,
        "availableSpots": 18,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Thiru Vi Ka Nagar / Purasaiwalkam outskirts, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_143",
        "name": "Ayanavaram / Jamalia area",
        "location": {
            "lat": 13.1034,
            "lng": 80.2231
        },
        "totalSpots": 150,
        "availableSpots": 55,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Ayanavaram / Jamalia area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_144",
        "name": "Ayanavaram / Jamalia area",
        "location": {
            "lat": 13.1034,
            "lng": 80.2231
        },
        "totalSpots": 150,
        "availableSpots": 55,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Ayanavaram / Jamalia area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_145",
        "name": "Kilpauk / Purasawalkam cross",
        "location": {
            "lat": 13.0701,
            "lng": 80.2277
        },
        "totalSpots": 120,
        "availableSpots": 58,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Kilpauk / Purasawalkam cross, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_146",
        "name": "Kilpauk / Purasawalkam cross",
        "location": {
            "lat": 13.0701,
            "lng": 80.2277
        },
        "totalSpots": 120,
        "availableSpots": 58,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Kilpauk / Purasawalkam cross, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_147",
        "name": "Periyar EVR High Road (Purasawalkam side)",
        "location": {
            "lat": 13.0848,
            "lng": 80.2452
        },
        "totalSpots": 120,
        "availableSpots": 111,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Periyar EVR High Road (Purasawalkam side), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_148",
        "name": "Periyar EVR High Road (Purasawalkam side)",
        "location": {
            "lat": 13.0848,
            "lng": 80.2452
        },
        "totalSpots": 120,
        "availableSpots": 111,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Periyar EVR High Road (Purasawalkam side), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_149",
        "name": "Broadway / Parry’s Corner roadside",
        "location": {
            "lat": 13.0891,
            "lng": 80.2851
        },
        "totalSpots": 120,
        "availableSpots": 110,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Broadway / Parry’s Corner roadside, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_150",
        "name": "Broadway / Parry’s Corner roadside",
        "location": {
            "lat": 13.0891,
            "lng": 80.2851
        },
        "totalSpots": 120,
        "availableSpots": 110,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Broadway / Parry’s Corner roadside, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_151",
        "name": "Ambattur Industrial Estate Road",
        "location": {
            "lat": 13.1076,
            "lng": 80.1652
        },
        "totalSpots": 50,
        "availableSpots": 47,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Ambattur Industrial Estate Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_152",
        "name": "Ambattur Industrial Estate Road",
        "location": {
            "lat": 13.1076,
            "lng": 80.1652
        },
        "totalSpots": 50,
        "availableSpots": 47,
        "type": "multi_level",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Ambattur Industrial Estate Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_153",
        "name": "Avadi town road",
        "location": {
            "lat": 13.1004,
            "lng": 80.1045
        },
        "totalSpots": 100,
        "availableSpots": 14,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Avadi town road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_154",
        "name": "Avadi town road",
        "location": {
            "lat": 13.1004,
            "lng": 80.1045
        },
        "totalSpots": 100,
        "availableSpots": 14,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "10 min",
        "address": "Avadi town road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_155",
        "name": "Anna Nagar Tower Park vicinity",
        "location": {
            "lat": 13.0863,
            "lng": 80.2173
        },
        "totalSpots": 150,
        "availableSpots": 25,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Anna Nagar Tower Park vicinity, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_156",
        "name": "Anna Nagar Tower Park vicinity",
        "location": {
            "lat": 13.0863,
            "lng": 80.2173
        },
        "totalSpots": 150,
        "availableSpots": 25,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Anna Nagar Tower Park vicinity, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_157",
        "name": "Kilpauk / Villivakkam Road junction",
        "location": {
            "lat": 13.082,
            "lng": 80.214
        },
        "totalSpots": 150,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Kilpauk / Villivakkam Road junction, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_158",
        "name": "Kilpauk / Villivakkam Road junction",
        "location": {
            "lat": 13.082,
            "lng": 80.214
        },
        "totalSpots": 150,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Kilpauk / Villivakkam Road junction, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_159",
        "name": "Saidapet Market Streets",
        "location": {
            "lat": 13.0178,
            "lng": 80.2219
        },
        "totalSpots": 80,
        "availableSpots": 73,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Saidapet Market Streets, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_160",
        "name": "Saidapet Market Streets",
        "location": {
            "lat": 13.0178,
            "lng": 80.2219
        },
        "totalSpots": 80,
        "availableSpots": 73,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "open_air",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Saidapet Market Streets, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_161",
        "name": "T. Nagar Bus Terminus vicinity",
        "location": {
            "lat": 13.0408,
            "lng": 80.2342
        },
        "totalSpots": 80,
        "availableSpots": 51,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "T. Nagar Bus Terminus vicinity, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_162",
        "name": "T. Nagar Bus Terminus vicinity",
        "location": {
            "lat": 13.0408,
            "lng": 80.2342
        },
        "totalSpots": 80,
        "availableSpots": 51,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "T. Nagar Bus Terminus vicinity, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_163",
        "name": "Luz Corner (Luz Church Road)",
        "location": {
            "lat": 13.075,
            "lng": 80.2605
        },
        "totalSpots": 80,
        "availableSpots": 70,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Luz Corner (Luz Church Road), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_164",
        "name": "Luz Corner (Luz Church Road)",
        "location": {
            "lat": 13.075,
            "lng": 80.2605
        },
        "totalSpots": 80,
        "availableSpots": 70,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Luz Corner (Luz Church Road), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_165",
        "name": "Chennai Central / Park Town area",
        "location": {
            "lat": 13.0827,
            "lng": 80.2759
        },
        "totalSpots": 80,
        "availableSpots": 30,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Chennai Central / Park Town area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_166",
        "name": "Chennai Central / Park Town area",
        "location": {
            "lat": 13.0827,
            "lng": 80.2759
        },
        "totalSpots": 80,
        "availableSpots": 30,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Chennai Central / Park Town area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_167",
        "name": "Vellala Street / George Town",
        "location": {
            "lat": 13.0949,
            "lng": 80.2867
        },
        "totalSpots": 120,
        "availableSpots": 58,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Vellala Street / George Town, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_168",
        "name": "Vellala Street / George Town",
        "location": {
            "lat": 13.0949,
            "lng": 80.2867
        },
        "totalSpots": 120,
        "availableSpots": 58,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "covered",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Vellala Street / George Town, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_169",
        "name": "Mandaveli / MOW Road",
        "location": {
            "lat": 13.0194,
            "lng": 80.2632
        },
        "totalSpots": 100,
        "availableSpots": 48,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Mandaveli / MOW Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_170",
        "name": "Mandaveli / MOW Road",
        "location": {
            "lat": 13.0194,
            "lng": 80.2632
        },
        "totalSpots": 100,
        "availableSpots": 48,
        "type": "street_parking",
        "pricing": "Free",
        "timeLimit": "4 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "5 min",
        "address": "Mandaveli / MOW Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_171",
        "name": "Triplicane Church Street",
        "location": {
            "lat": 13.0439,
            "lng": 80.2814
        },
        "totalSpots": 80,
        "availableSpots": 18,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Triplicane Church Street, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_172",
        "name": "Triplicane Church Street",
        "location": {
            "lat": 13.0439,
            "lng": 80.2814
        },
        "totalSpots": 80,
        "availableSpots": 18,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "10 min",
        "address": "Triplicane Church Street, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_173",
        "name": "Nanganallur / 100 Feet Road",
        "location": {
            "lat": 12.9841,
            "lng": 80.1743
        },
        "totalSpots": 80,
        "availableSpots": 11,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Nanganallur / 100 Feet Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_174",
        "name": "Nanganallur / 100 Feet Road",
        "location": {
            "lat": 12.9841,
            "lng": 80.1743
        },
        "totalSpots": 80,
        "availableSpots": 11,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Nanganallur / 100 Feet Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_175",
        "name": "Injambakkam / ECR outskirts",
        "location": {
            "lat": 12.9398,
            "lng": 80.2654
        },
        "totalSpots": 100,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Injambakkam / ECR outskirts, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_176",
        "name": "Injambakkam / ECR outskirts",
        "location": {
            "lat": 12.9398,
            "lng": 80.2654
        },
        "totalSpots": 100,
        "availableSpots": 64,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Injambakkam / ECR outskirts, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_177",
        "name": "Thiruverkadu Road / Avadi outskirts",
        "location": {
            "lat": 13.0912,
            "lng": 80.1185
        },
        "totalSpots": 150,
        "availableSpots": 44,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Thiruverkadu Road / Avadi outskirts, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_178",
        "name": "Thiruverkadu Road / Avadi outskirts",
        "location": {
            "lat": 13.0912,
            "lng": 80.1185
        },
        "totalSpots": 150,
        "availableSpots": 44,
        "type": "street_parking",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "10 min",
        "address": "Thiruverkadu Road / Avadi outskirts, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_179",
        "name": "Ramapuram / Arcot Road extension",
        "location": {
            "lat": 13.0408,
            "lng": 80.1739
        },
        "totalSpots": 80,
        "availableSpots": 73,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Ramapuram / Arcot Road extension, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_180",
        "name": "Ramapuram / Arcot Road extension",
        "location": {
            "lat": 13.0408,
            "lng": 80.1739
        },
        "totalSpots": 80,
        "availableSpots": 73,
        "type": "surface_lot",
        "pricing": "₹20/hour",
        "timeLimit": "No limit",
        "amenities": [
            "security",
            "parking"
        ],
        "walkingDistance": "5 min",
        "address": "Ramapuram / Arcot Road extension, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_181",
        "name": "Porur Lake Road / Service roads",
        "location": {
            "lat": 13.0418,
            "lng": 80.1609
        },
        "totalSpots": 100,
        "availableSpots": 13,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Porur Lake Road / Service roads, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_182",
        "name": "Porur Lake Road / Service roads",
        "location": {
            "lat": 13.0418,
            "lng": 80.1609
        },
        "totalSpots": 100,
        "availableSpots": 13,
        "type": "street_parking",
        "pricing": "₹20/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Porur Lake Road / Service roads, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_183",
        "name": "Madhavaram Milk Colony Road",
        "location": {
            "lat": 13.1609,
            "lng": 80.2448
        },
        "totalSpots": 80,
        "availableSpots": 57,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Madhavaram Milk Colony Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_184",
        "name": "Madhavaram Milk Colony Road",
        "location": {
            "lat": 13.1609,
            "lng": 80.2448
        },
        "totalSpots": 80,
        "availableSpots": 57,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "covered",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Madhavaram Milk Colony Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_185",
        "name": "Kolathur Market / Anna Nagar West extension",
        "location": {
            "lat": 13.1256,
            "lng": 80.2203
        },
        "totalSpots": 80,
        "availableSpots": 48,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Kolathur Market / Anna Nagar West extension, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_186",
        "name": "Kolathur Market / Anna Nagar West extension",
        "location": {
            "lat": 13.1256,
            "lng": 80.2203
        },
        "totalSpots": 80,
        "availableSpots": 48,
        "type": "surface_lot",
        "pricing": "₹10/hour",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Kolathur Market / Anna Nagar West extension, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_187",
        "name": "Villivakkam Market Road",
        "location": {
            "lat": 13.1007,
            "lng": 80.1979
        },
        "totalSpots": 80,
        "availableSpots": 54,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Villivakkam Market Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_188",
        "name": "Villivakkam Market Road",
        "location": {
            "lat": 13.1007,
            "lng": 80.1979
        },
        "totalSpots": 80,
        "availableSpots": 54,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "parking",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Villivakkam Market Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_189",
        "name": "Perambur High Road / ST Bus depot",
        "location": {
            "lat": 13.1189,
            "lng": 80.242
        },
        "totalSpots": 100,
        "availableSpots": 40,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Perambur High Road / ST Bus depot, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_190",
        "name": "Perambur High Road / ST Bus depot",
        "location": {
            "lat": 13.1189,
            "lng": 80.242
        },
        "totalSpots": 100,
        "availableSpots": 40,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Perambur High Road / ST Bus depot, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_191",
        "name": "Walltax Road / Chennai Fort area",
        "location": {
            "lat": 13.0933,
            "lng": 80.2834
        },
        "totalSpots": 120,
        "availableSpots": 28,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Walltax Road / Chennai Fort area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_192",
        "name": "Walltax Road / Chennai Fort area",
        "location": {
            "lat": 13.0933,
            "lng": 80.2834
        },
        "totalSpots": 120,
        "availableSpots": 28,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Walltax Road / Chennai Fort area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_193",
        "name": "Luz Bazaar Street / Mylapore outskirts",
        "location": {
            "lat": 13.0759,
            "lng": 80.2703
        },
        "totalSpots": 100,
        "availableSpots": 95,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Luz Bazaar Street / Mylapore outskirts, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_194",
        "name": "Luz Bazaar Street / Mylapore outskirts",
        "location": {
            "lat": 13.0759,
            "lng": 80.2703
        },
        "totalSpots": 100,
        "availableSpots": 95,
        "type": "surface_lot",
        "pricing": "₹30/hour",
        "timeLimit": "4 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "10 min",
        "address": "Luz Bazaar Street / Mylapore outskirts, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_195",
        "name": "Gopalapuram / Dr. Radhakrishnan Salai",
        "location": {
            "lat": 13.0517,
            "lng": 80.2473
        },
        "totalSpots": 120,
        "availableSpots": 78,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Gopalapuram / Dr. Radhakrishnan Salai, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_196",
        "name": "Gopalapuram / Dr. Radhakrishnan Salai",
        "location": {
            "lat": 13.0517,
            "lng": 80.2473
        },
        "totalSpots": 120,
        "availableSpots": 78,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "ev_charging",
            "open_air"
        ],
        "walkingDistance": "15 min",
        "address": "Gopalapuram / Dr. Radhakrishnan Salai, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_197",
        "name": "Binny Mills Road / Ayanavaram link",
        "location": {
            "lat": 13.103,
            "lng": 80.2266
        },
        "totalSpots": 150,
        "availableSpots": 49,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Binny Mills Road / Ayanavaram link, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_198",
        "name": "Binny Mills Road / Ayanavaram link",
        "location": {
            "lat": 13.103,
            "lng": 80.2266
        },
        "totalSpots": 150,
        "availableSpots": 49,
        "type": "surface_lot",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "Binny Mills Road / Ayanavaram link, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_199",
        "name": "Poonamallee High Road / Kilpauk flyover approaches",
        "location": {
            "lat": 13.0609,
            "lng": 80.2129
        },
        "totalSpots": 150,
        "availableSpots": 44,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Poonamallee High Road / Kilpauk flyover approaches, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_200",
        "name": "Poonamallee High Road / Kilpauk flyover approaches",
        "location": {
            "lat": 13.0609,
            "lng": 80.2129
        },
        "totalSpots": 150,
        "availableSpots": 44,
        "type": "underground",
        "pricing": "₹30/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "ev_charging",
            "covered"
        ],
        "walkingDistance": "15 min",
        "address": "Poonamallee High Road / Kilpauk flyover approaches, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_201",
        "name": "Thiru. Vi. Ka. Salai / Royapettah link",
        "location": {
            "lat": 13.0559,
            "lng": 80.2669
        },
        "totalSpots": 80,
        "availableSpots": 30,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "Thiru. Vi. Ka. Salai / Royapettah link, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_202",
        "name": "Thiru. Vi. Ka. Salai / Royapettah link",
        "location": {
            "lat": 13.0559,
            "lng": 80.2669
        },
        "totalSpots": 80,
        "availableSpots": 30,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "5 min",
        "address": "Thiru. Vi. Ka. Salai / Royapettah link, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_203",
        "name": "Parry’s Corner / Elephanta Street",
        "location": {
            "lat": 13.0939,
            "lng": 80.286
        },
        "totalSpots": 80,
        "availableSpots": 22,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Parry’s Corner / Elephanta Street, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_204",
        "name": "Parry’s Corner / Elephanta Street",
        "location": {
            "lat": 13.0939,
            "lng": 80.286
        },
        "totalSpots": 80,
        "availableSpots": 22,
        "type": "underground",
        "pricing": "₹10/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "parking",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Parry’s Corner / Elephanta Street, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_205",
        "name": "Chennai Port Trust Road / Royapuram",
        "location": {
            "lat": 13.1047,
            "lng": 80.2931
        },
        "totalSpots": 100,
        "availableSpots": 91,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Chennai Port Trust Road / Royapuram, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_206",
        "name": "Chennai Port Trust Road / Royapuram",
        "location": {
            "lat": 13.1047,
            "lng": 80.2931
        },
        "totalSpots": 100,
        "availableSpots": 91,
        "type": "underground",
        "pricing": "₹20/hour",
        "timeLimit": "8 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Chennai Port Trust Road / Royapuram, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_207",
        "name": "Egmore High Court area / ETH Road",
        "location": {
            "lat": 13.0738,
            "lng": 80.2585
        },
        "totalSpots": 50,
        "availableSpots": 29,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Egmore High Court area / ETH Road, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_208",
        "name": "Egmore High Court area / ETH Road",
        "location": {
            "lat": 13.0738,
            "lng": 80.2585
        },
        "totalSpots": 50,
        "availableSpots": 29,
        "type": "underground",
        "pricing": "Free",
        "timeLimit": "No limit",
        "amenities": [
            "ev_charging",
            "security"
        ],
        "walkingDistance": "15 min",
        "address": "Egmore High Court area / ETH Road, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_209",
        "name": "Nandanam Flyover approaches",
        "location": {
            "lat": 13.0379,
            "lng": 80.2182
        },
        "totalSpots": 100,
        "availableSpots": 61,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Nandanam Flyover approaches, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_210",
        "name": "Nandanam Flyover approaches",
        "location": {
            "lat": 13.0379,
            "lng": 80.2182
        },
        "totalSpots": 100,
        "availableSpots": 61,
        "type": "street_parking",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "covered"
        ],
        "walkingDistance": "5 min",
        "address": "Nandanam Flyover approaches, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_211",
        "name": "T. Nagar Srinivasa Road junction",
        "location": {
            "lat": 13.04,
            "lng": 80.236
        },
        "totalSpots": 120,
        "availableSpots": 14,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "T. Nagar Srinivasa Road junction, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_212",
        "name": "T. Nagar Srinivasa Road junction",
        "location": {
            "lat": 13.04,
            "lng": 80.236
        },
        "totalSpots": 120,
        "availableSpots": 14,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "2 hours",
        "amenities": [
            "open_air",
            "ev_charging"
        ],
        "walkingDistance": "5 min",
        "address": "T. Nagar Srinivasa Road junction, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_213",
        "name": "Spencer Plaza / Anna Salai frontage",
        "location": {
            "lat": 13.0626,
            "lng": 80.2658
        },
        "totalSpots": 150,
        "availableSpots": 62,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Spencer Plaza / Anna Salai frontage, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_214",
        "name": "Spencer Plaza / Anna Salai frontage",
        "location": {
            "lat": 13.0626,
            "lng": 80.2658
        },
        "totalSpots": 150,
        "availableSpots": 62,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "No limit",
        "amenities": [
            "covered",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Spencer Plaza / Anna Salai frontage, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_215",
        "name": "Vepery / police station area",
        "location": {
            "lat": 13.0831,
            "lng": 80.2747
        },
        "totalSpots": 150,
        "availableSpots": 99,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Vepery / police station area, Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_216",
        "name": "Vepery / police station area",
        "location": {
            "lat": 13.0831,
            "lng": 80.2747
        },
        "totalSpots": 150,
        "availableSpots": 99,
        "type": "multi_level",
        "pricing": "₹30/hour",
        "timeLimit": "2 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Vepery / police station area, Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": true
    },
    {
        "id": "zone_217",
        "name": "Chennai Airport (Meenambakkam area road approaches)",
        "location": {
            "lat": 12.99,
            "lng": 80.1696
        },
        "totalSpots": 120,
        "availableSpots": 31,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Chennai Airport (Meenambakkam area road approaches), Chennai",
        "sector": "public",
        "vehicleTypes": [
            "2-wheeler"
        ],
        "vacantOnly": false
    },
    {
        "id": "zone_218",
        "name": "Chennai Airport (Meenambakkam area road approaches)",
        "location": {
            "lat": 12.99,
            "lng": 80.1696
        },
        "totalSpots": 120,
        "availableSpots": 31,
        "type": "multi_level",
        "pricing": "Free",
        "timeLimit": "8 hours",
        "amenities": [
            "security",
            "ev_charging"
        ],
        "walkingDistance": "15 min",
        "address": "Chennai Airport (Meenambakkam area road approaches), Chennai",
        "sector": "private",
        "vehicleTypes": [
            "4-wheeler"
        ],
        "vacantOnly": false
    }
]
        };
        
        this.userLocation = { lat: 40.7589, lng: -73.9851 };
        this.map = null;
        this.markers = new Map();
        this.notificationsEnabled = false;
        this.selectedZone = null;
        this.updateInterval = null;
        this.charts = {};
        
        this.init();
    }

    init() {
        this.initMap();
        this.setupEventListeners();
        this.renderParkingList();
        this.updateStats();
        this.startRealTimeUpdates();
        this.requestLocationPermission();
        this.updateLastUpdatedTime();
    }

    initMap() {
        // Initialize Leaflet map
        this.map = L.map('map').setView([this.userLocation.lat, this.userLocation.lng], 13);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // Add user location marker
        L.marker([this.userLocation.lat, this.userLocation.lng])
            .addTo(this.map)
            .bindPopup('<b>Your Location</b>')
            .openPopup();

        // Add parking zone markers
        this.updateMapMarkers();
    }

    updateMapMarkers() {
        // Clear existing markers
        this.markers.forEach(marker => marker.remove());
        this.markers.clear();

        // Add parking zone markers
        this.parkingData.parkingZones.forEach(zone => {
            const availability = this.getAvailabilityLevel(zone);
            const markerClass = `availability-marker ${availability}`;
            
            const customIcon = L.divIcon({
                className: markerClass,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker([zone.location.lat, zone.location.lng], {
                icon: customIcon
            }).addTo(this.map);

            const popupContent = this.createPopupContent(zone);
            marker.bindPopup(popupContent, {
                maxWidth: 280,
                minWidth: 250
            });
            
            marker.on('click', () => {
                this.selectZone(zone.id);
            });

            // Add popup event listeners after popup opens
            marker.on('popupopen', () => {
                this.attachPopupEventListeners(zone.id);
            });

            this.markers.set(zone.id, marker);
        });
    }

    createPopupContent(zone) {
        const availability = this.getAvailabilityLevel(zone);
        const availabilityText = this.getAvailabilityText(availability);
        
        return `
            <div class="popup-content">
                <div class="popup-header">${zone.name}</div>
                <div class="popup-details">${zone.address}</div>
                <div class="popup-availability">
                    <span class="legend-dot ${availability}"></span>
                    <span>${zone.availableSpots}/${zone.totalSpots} available (${availabilityText})</span>
                </div>
                <div class="popup-details">
                    <strong>Price:</strong> ${zone.pricing}<br>
                    <strong>Walk Time:</strong> ${zone.walkingDistance}
                </div>
                <div class="popup-actions">
                    <button class="popup-btn popup-btn--primary" data-action="details" data-zone-id="${zone.id}">
                        Details
                    </button>
                    <button class="popup-btn popup-btn--secondary" data-action="reserve" data-zone-id="${zone.id}">
                        Reserve
                    </button>
                </div>
            </div>
        `;
    }

    attachPopupEventListeners(zoneId) {
        // Wait a bit for the popup to be fully rendered
        setTimeout(() => {
            const detailsBtn = document.querySelector(`[data-action="details"][data-zone-id="${zoneId}"]`);
            const reserveBtn = document.querySelector(`[data-action="reserve"][data-zone-id="${zoneId}"]`);
            
            if (detailsBtn) {
                detailsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showParkingDetails(zoneId);
                });
            }
            
            if (reserveBtn) {
                reserveBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.reserveSpot(zoneId);
                });
            }
        }, 100);
    }

    getAvailabilityLevel(zone) {
        const percentage = (zone.availableSpots / zone.totalSpots) * 100;
        if (percentage >= 70) return 'high';
        if (percentage >= 30) return 'medium';
        return 'low';
    }

    getAvailabilityText(level) {
        const texts = {
            'high': 'High Availability',
            'medium': 'Medium Availability', 
            'low': 'Low Availability'
        };
        return texts[level] || 'Unknown';
    }

    renderParkingList() {
        const listContainer = document.getElementById('parkingList');
        let filteredZones = this.getFilteredZones();
        
        listContainer.innerHTML = filteredZones.map(zone => {
            const availability = this.getAvailabilityLevel(zone);
            const availabilityText = this.getAvailabilityText(availability);
            const percentage = Math.round((zone.availableSpots / zone.totalSpots) * 100);
            
            return `
                <div class="parking-item" data-zone-id="${zone.id}" onclick="parkingSystem.selectZone('${zone.id}')">
                    <div class="parking-header">
                        <span class="parking-name">${zone.name}</span>
                        <span class="availability-badge ${availability}">${availabilityText}</span>
                    </div>
                    <div class="parking-details">
                        <div>${zone.address}</div>
                        <div><strong>Price:</strong> ${zone.pricing} • <strong>Walk:</strong> ${zone.walkingDistance}</div>
                    </div>
                    <div class="parking-stats">
                        <span>${zone.availableSpots}/${zone.totalSpots} spots</span>
                        <span>${percentage}% available</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    getFilteredZones() {
        let zones = [...this.parkingData.parkingZones];
        
        const typeFilter = document.getElementById('typeFilter').value;
        const availabilityFilter = document.getElementById('availabilityFilter').value;
        
        if (typeFilter) {
            zones = zones.filter(zone => zone.type === typeFilter);
        }
        
        if (availabilityFilter) {
            zones = zones.filter(zone => {
                const level = this.getAvailabilityLevel(zone);
                return level === availabilityFilter;
            });
        }
        
        return zones;
    }

    selectZone(zoneId) {
        // Update selected zone
        this.selectedZone = zoneId;
        
        // Update UI
        document.querySelectorAll('.parking-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        const selectedItem = document.querySelector(`[data-zone-id="${zoneId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }
        
        // Center map on selected zone
        const zone = this.parkingData.parkingZones.find(z => z.id === zoneId);
        if (zone) {
            this.map.setView([zone.location.lat, zone.location.lng], 15);
            // Open the marker popup
            const marker = this.markers.get(zoneId);
            if (marker) {
                marker.openPopup();
            }
        }
    }

    setupEventListeners() {
        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch();
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }

        // Location button
        const locateBtn = document.getElementById('locateBtn');
        if (locateBtn) {
            locateBtn.addEventListener('click', () => {
                this.getUserLocation();
            });
        }

        // Filter changes
        const typeFilter = document.getElementById('typeFilter');
        const availabilityFilter = document.getElementById('availabilityFilter');
        
        if (typeFilter) {
            typeFilter.addEventListener('change', () => {
                this.renderParkingList();
            });
        }
        
        if (availabilityFilter) {
            availabilityFilter.addEventListener('change', () => {
                this.renderParkingList();
            });
        }

        // Refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.updateParkingData();
            });
        }

        // Notification toggle
        const notificationBtn = document.getElementById('toggleNotifications');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => {
                this.toggleNotifications();
            });
        }

        // Dashboard modal
        const dashboardBtn = document.getElementById('toggleDashboard');
        const closeDashboard = document.getElementById('closeDashboard');
        const modalBackdrop = document.getElementById('modalBackdrop');
        
        if (dashboardBtn) {
            dashboardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showDashboard();
            });
        }
        
        if (closeDashboard) {
            closeDashboard.addEventListener('click', () => {
                this.hideDashboard();
            });
        }
        
        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', () => {
                this.hideDashboard();
            });
        }

        // Parking details modal
        const closeParkingModal = document.getElementById('closeParkingModal');
        const parkingModalBackdrop = document.getElementById('parkingModalBackdrop');
        
        if (closeParkingModal) {
            closeParkingModal.addEventListener('click', () => {
                this.hideParkingDetails();
            });
        }
        
        if (parkingModalBackdrop) {
            parkingModalBackdrop.addEventListener('click', () => {
                this.hideParkingDetails();
            });
        }

        // Toast notification
        const closeToast = document.getElementById('closeToast');
        if (closeToast) {
            closeToast.addEventListener('click', () => {
                this.hideToast();
            });
        }
    }

    performSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const query = searchInput.value.trim();
        if (!query) {
            this.showToast('Please enter a search term');
            return;
        }
        // Extra checkbox filters
const filterGov = document.getElementById('filterGov');
const filterPrivate = document.getElementById('filterPrivate');
const filterMCWG = document.getElementById('filterMCWG');
const filterLMV = document.getElementById('filterLMV');
const filterVacant = document.getElementById('filterVacant');

[filterGov, filterPrivate, filterMCWG, filterLMV, filterVacant].forEach(cb => {
    if (cb) {
        cb.addEventListener('change', () => {
            this.renderParkingList();
        });
    }
});


        // Simple search simulation - filter by name or address
        const filteredZones = this.parkingData.parkingZones.filter(zone => 
            zone.name.toLowerCase().includes(query.toLowerCase()) ||
            zone.address.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredZones.length > 0) {
            // Focus on first result
            const firstZone = filteredZones[0];
            this.map.setView([firstZone.location.lat, firstZone.location.lng], 15);
            this.selectZone(firstZone.id);
            this.showToast(`Found ${filteredZones.length} parking zone(s) matching "${query}"`);
        } else {
            this.showToast(`No parking zones found matching "${query}"`);
        }
    } 

    requestLocationPermission() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.showToast('Location access granted - showing nearby parking');
                },
                (error) => {
                    console.log('Location access denied or unavailable, using default location');
                },
                { timeout: 5000 }
            );
        }
    }

    getUserLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.map.setView([this.userLocation.lat, this.userLocation.lng], 15);
                    this.showToast('Location updated successfully!');
                },
                (error) => {
                    console.error('Error getting location:', error);
                    this.showToast('Unable to get your location. Using default location.');
                }
            );
        } else {
            this.showToast('Geolocation is not supported by your browser.');
        }
    }

    startRealTimeUpdates() {
        this.updateInterval = setInterval(() => {
            this.simulateParkingChanges();
            this.updateMapMarkers();
            this.renderParkingList();
            this.updateStats();
            this.updateLastUpdatedTime();
            this.checkForNotifications();
            
        }, 10000); // Update every 10 seconds
    }

    simulateParkingChanges() {
        this.parkingData.parkingZones.forEach(zone => {
            // Random change in availability (-5 to +5 spots)
            const change = Math.floor(Math.random() * 11) - 5;
            const newAvailable = zone.availableSpots + change;
            
            // Keep within bounds
            zone.availableSpots = Math.max(0, Math.min(zone.totalSpots, newAvailable));
        });
    }

    updateStats() {
        const totalSpots = this.parkingData.parkingZones.reduce((sum, zone) => sum + zone.totalSpots, 0);
        const totalAvailable = this.parkingData.parkingZones.reduce((sum, zone) => sum + zone.availableSpots, 0);
        const avgOccupancy = Math.round(((totalSpots - totalAvailable) / totalSpots) * 100);

        const totalAvailableEl = document.getElementById('totalAvailable');
        const avgOccupancyEl = document.getElementById('avgOccupancy');
        
        if (totalAvailableEl) totalAvailableEl.textContent = totalAvailable;
        if (avgOccupancyEl) avgOccupancyEl.textContent = `${avgOccupancy}%`;
    }

    updateLastUpdatedTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const lastUpdatedEl = document.getElementById('lastUpdated');
        if (lastUpdatedEl) {
            lastUpdatedEl.textContent = timeString;
        }
    }

    toggleNotifications() {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        this.notificationsEnabled = true;
                        this.updateNotificationIcon();
                        this.showToast('Notifications enabled successfully!');
                    } else {
                        this.showToast('Notification permission denied');
                    }
                });
            } else if (Notification.permission === 'granted') {
                this.notificationsEnabled = !this.notificationsEnabled;
                this.updateNotificationIcon();
                this.showToast(`Notifications ${this.notificationsEnabled ? 'enabled' : 'disabled'}`);
            } else {
                this.showToast('Notification permission was denied. Please enable in browser settings.');
            }
        } else {
            this.showToast('Notifications are not supported in your browser.');
        }
    }

    updateNotificationIcon() {
        const icon = document.getElementById('notificationIcon');
        if (icon) {
            icon.textContent = this.notificationsEnabled ? '🔔' : '🔕';
        }
    }

    checkForNotifications() {
        if (!this.notificationsEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;

        // Check for high availability zones
        const highAvailabilityZones = this.parkingData.parkingZones.filter(zone => {
            const availability = this.getAvailabilityLevel(zone);
            return availability === 'high' && zone.availableSpots >= zone.totalSpots * 0.8;
        });

        if (highAvailabilityZones.length > 0 && Math.random() < 0.3) {
            const randomZone = highAvailabilityZones[Math.floor(Math.random() * highAvailabilityZones.length)];
            this.sendNotification(
                'Parking Available!',
                `High availability at ${randomZone.name} - ${randomZone.availableSpots} spots available`
            );
        }
    }

    sendNotification(title, body) {
        if ('Notification' in window && Notification.permission === 'granted') {
            const notification = new Notification(title, {
                body: body,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🅿️</text></svg>',
                badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🅿️</text></svg>'
            });

            setTimeout(() => notification.close(), 5000);
        }
    }

    showDashboard() {
        const modal = document.getElementById('dashboardModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.updateDashboardData();
            // Delay chart creation to ensure modal is visible
            setTimeout(() => {
                this.createCharts();
            }, 100);
        }
    }

    hideDashboard() {
        const modal = document.getElementById('dashboardModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    updateDashboardData() {
        const totalSpots = this.parkingData.parkingZones.reduce((sum, zone) => sum + zone.totalSpots, 0);
        const totalAvailable = this.parkingData.parkingZones.reduce((sum, zone) => sum + zone.availableSpots, 0);

        const totalSpotsEl = document.getElementById('totalSpots');
        const availableSpotsEl = document.getElementById('availableSpots');
        const searchReductionEl = document.getElementById('searchReduction');
        const avgWalkTimeEl = document.getElementById('avgWalkTime');

        if (totalSpotsEl) totalSpotsEl.textContent = totalSpots.toLocaleString();
        if (availableSpotsEl) availableSpotsEl.textContent = totalAvailable.toLocaleString();
        if (searchReductionEl) searchReductionEl.textContent = '41%';
        if (avgWalkTimeEl) avgWalkTimeEl.textContent = '2.3 min';
    }

    createCharts() {
        // Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
            return;
        }

        // Occupancy Trends Chart
        const occupancyCanvas = document.getElementById('occupancyChart');
        if (occupancyCanvas) {
            const occupancyCtx = occupancyCanvas.getContext('2d');
            
            if (this.charts.occupancy) {
                this.charts.occupancy.destroy();
            }

            this.charts.occupancy = new Chart(occupancyCtx, {
                type: 'line',
                data: {
                    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
                    datasets: [{
                        label: 'Occupancy Rate (%)',
                        data: [45, 62, 58, 71, 68, 55, 49, 73],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        // Zone Performance Chart
        const zoneCanvas = document.getElementById('zoneChart');
        if (zoneCanvas) {
            const zoneCtx = zoneCanvas.getContext('2d');
            
            if (this.charts.zone) {
                this.charts.zone.destroy();
            }

            const zoneData = this.parkingData.parkingZones.slice(0, 6);
            
            this.charts.zone = new Chart(zoneCtx, {
                type: 'bar',
                data: {
                    labels: zoneData.map(zone => zone.name.split(' ')[0] + '...'),
                    datasets: [{
                        label: 'Available Spots',
                        data: zoneData.map(zone => zone.availableSpots),
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }

    showParkingDetails(zoneId) {
        const zone = this.parkingData.parkingZones.find(z => z.id === zoneId);
        if (!zone) return;

        const modal = document.getElementById('parkingModal');
        const modalTitle = document.getElementById('parkingModalTitle');
        const modalContent = document.getElementById('parkingModalContent');
        
        if (!modal || !modalTitle || !modalContent) return;

        modalTitle.textContent = zone.name;
        
        const availability = this.getAvailabilityLevel(zone);
        const availabilityText = this.getAvailabilityText(availability);
        const percentage = Math.round((zone.availableSpots / zone.totalSpots) * 100);
        
        const amenityTags = zone.amenities.map(amenity => 
            `<span class="amenity-tag">${amenity.replace('_', ' ')}</span>`
        ).join('');

        const modalContentHTML = `
            <div class="parking-detail-grid">
                <div class="parking-detail-section">
                    <h4>Availability</h4>
                    <ul class="detail-list">
                        <li>
                            <span>Available Spots</span>
                            <span>${zone.availableSpots}/${zone.totalSpots}</span>
                        </li>
                        <li>
                            <span>Availability Level</span>
                            <span class="availability-badge ${availability}">${availabilityText}</span>
                        </li>
                        <li>
                            <span>Occupancy Rate</span>
                            <span>${100 - percentage}%</span>
                        </li>
                    </ul>
                </div>
                
                <div class="parking-detail-section">
                    <h4>Pricing & Limits</h4>
                    <ul class="detail-list">
                        <li>
                            <span>Hourly Rate</span>
                            <span>${zone.pricing}</span>
                        </li>
                        <li>
                            <span>Time Limit</span>
                            <span>${zone.timeLimit}</span>
                        </li>
                        <li>
                            <span>Walking Distance</span>
                            <span>${zone.walkingDistance}</span>
                        </li>
                    </ul>
                </div>
                
                <div class="parking-detail-section">
                    <h4>Location</h4>
                    <ul class="detail-list">
                        <li>
                            <span>Address</span>
                            <span>${zone.address}</span>
                        </li>
                        <li>
                            <span>Type</span>
                            <span>${zone.type.replace('_', ' ')}</span>
                        </li>
                    </ul>
                </div>
                
                <div class="parking-detail-section">
                    <h4>Amenities</h4>
                    <div class="amenities-grid">
                        ${amenityTags}
                    </div>
                </div>
            </div>
            
            <div class="parking-actions">
                <button class="btn btn--primary" onclick="parkingSystem.reserveSpot('${zone.id}')">
                    Reserve Spot
                </button>
                <button class="btn btn--secondary" onclick="parkingSystem.getDirections('${zone.id}')">
                    Get Directions
                </button>
                <button class="btn btn--outline" onclick="parkingSystem.addToFavorites('${zone.id}')">
                    Add to Favorites
                </button>
            </div>
        `;

        modalContent.innerHTML = modalContentHTML;
        modal.classList.remove('hidden');
    }

    hideParkingDetails() {
        const modal = document.getElementById('parkingModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    reserveSpot(zoneId) {
        const zone = this.parkingData.parkingZones.find(z => z.id === zoneId);
        if (zone && zone.availableSpots > 0) {
            zone.availableSpots--;
            this.updateMapMarkers();
            this.renderParkingList();
            this.updateStats();
            this.showToast(`Spot reserved at ${zone.name}! Confirmation: #${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
            this.hideParkingDetails();
        } else {
            this.showToast('No spots available for reservation.');
        }
    }

    getDirections(zoneId) {
        const zone = this.parkingData.parkingZones.find(z => z.id === zoneId);
        if (zone) {
            // Open directions in a new tab
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${zone.location.lat},${zone.location.lng}`;
            window.open(directionsUrl, '_blank');
            this.showToast('Opening directions in a new tab...');
        }
    }

    addToFavorites(zoneId) {
        const zone = this.parkingData.parkingZones.find(z => z.id === zoneId);
        if (zone) {
            this.showToast(`${zone.name} added to favorites!`);
        }
    }

    updateParkingData() {
        this.simulateParkingChanges();
        this.updateMapMarkers();
        this.renderParkingList();
        this.updateStats();
        this.updateLastUpdatedTime();
        this.showToast('Parking data updated!');
    }

    showToast(message) {
        const toast = document.getElementById('notificationToast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (toast && toastMessage) {
            toastMessage.textContent = message;
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                this.hideToast();
            }, 5000);
        }
    }

    hideToast() {
        const toast = document.getElementById('notificationToast');
        if (toast) {
            toast.classList.add('hidden');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.parkingSystem = new SmartParkingSystem();
});