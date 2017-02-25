function domestic(value) {
  var x;
  var y;
  if (value) {
    x = Math.floor((Math.random() * 90) + 10);
    y = Math.floor((Math.random() * 90) + 10);
  } else {
    x = Math.floor((Math.random() * 90) + 10);
    y = -(Math.floor((Math.random() * 90) + 10));
  }
  return {"x": x, "y": y};
}

function international(value) {
  var x;
  var y;
  if (value) {
    x = -(Math.floor((Math.random() * 90) + 10));
    y = Math.floor((Math.random() * 90) + 10);
  } else {
    x = -(Math.floor((Math.random() * 90) + 10));
    y = -(Math.floor((Math.random() * 90) + 10));
  }
  return {"x": x, "y": y};
}

var items = [
  {
    "name": "Aegean Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Aer Lingus",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Aeroflot",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Aeroméxico",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "AirAsia",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Air Berlin",
    "coords": domestic(true),
    "radius": 14,
  },
  {
    "name": "Air Canada",
    "coords": domestic(false),
    "radius": 13,
  },
  {
    "name": "Air China",
    "coords": domestic(true),
    "radius": 15,
  },
  {
    "name": "Air France",
    "coords": domestic(true),
    "radius": 17,
  },
  {
    "name": "Air India",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Air New Zealand",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "AirAsia",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Alaska Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Alitalia",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "American Airlines",
    "coords": "&nbsp;",
    "radius": 18,
  },
  {
    "name": "ANA All Nippon Airways",
    "coords": "&nbsp;",
    "radius": 15,
  },
  {
    "name": "Asiana Airlines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Austrian Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Avianca",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Bangkok Airways",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "bmi British Midland",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "British Airways",
    "coords": "&nbsp;",
    "radius": 13,
  },
  {
    "name": "Cathay Pacific Airways",
    "coords": "n/a",
    "radius": 13,
  },
  {
    "name": "China Airlines",
    "coords": "&nbsp;",
    "radius": 17,
  },
  {
    "name": "Condor Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Copa Airlines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Delta Air Lines",
    "coords": domestic(true),
    "radius": 24,
  },
  {
    "name": "Dragonair",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "EgyptAir",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Emirates",
    "coords": "&nbsp;",
    "radius": 14,
  },
  {
    "name": "Ethiopian Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Etihad Airways",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "EVA Air",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Finnair",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Malawian Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Malaysia Airlines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Nok Air",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Norwegian Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Oman Air",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Pakistan Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Philippine Airlines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Porter Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Qantas Airways",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Qatar Airways",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "RwandAir",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Royal Brunei Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Scandinavian Airlines (SAS)",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Silk Air",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "Singapore Airlines",
    "coords": "n/a",
    "radius": 12,
  },
  {
    "name": "Sky Airline",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "South African Airways",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Southwest Airlines",
    "coords": domestic(false),
    "radius": 23,
  },
  {
    "name": "Spirit Airlines",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Streamline Air",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Swiss Int&#8217;l Air Lines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "TACA Airlines",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "TAP Air Portugal",
    "coords": "&nbsp;",
    "radius": 12,
  },
  {
    "name": "TAM Airlines",
    "coords": domestic(false),
    "radius": 14,
  },
  {
    "name": "TAROM",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Thai Airways",
    "coords": domestic(false),
    "radius": 12,
  },
  {
    "name": "Tiger Airways",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Turkish Airlines",
    "coords": domestic(false),
    "radius": 13,
  },
  {
    "name": "United Airlines",
    "coords": domestic(false),
    "radius": 23,
  },
  {
    "name": "US Airways",
    "coords": domestic(false),
    "radius": 15,
  },
  {
    "name": "Virgin Atlantic Airways",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "V Australia",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "VietJet Air",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Vietnam Airlines",
    "coords": domestic(true),
    "radius": 12,
  },
  {
    "name": "Aegean Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Aer Lingus",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Aeroflot",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Aeroméxico",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "AirAsia",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Air Berlin",
    "coords": international(true),
    "radius": 14,
  },
  {
    "name": "Air Canada",
    "coords": international(true),
    "radius": 13,
  },
  {
    "name": "Air China",
    "coords": international(true),
    "radius": 15,
  },
  {
    "name": "Air France",
    "coords": international(true),
    "radius": 17,
  },
  {
    "name": "Air India",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Air New Zealand",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "AirAsia",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Alaska Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Alitalia",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "American Airlines",
    "coords": international(true),
    "radius": 18,
  },
  {
    "name": "ANA All Nippon Airways",
    "coords": international(true),
    "radius": 15,
  },
  {
    "name": "Asiana Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Austrian Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Avianca",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Bangkok Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "bmi British Midland",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "British Airways",
    "coords": international(true),
    "radius": 13,
  },
  {
    "name": "Cathay Pacific Airways",
    "coords": international(true),
    "radius": 13,
  },
  {
    "name": "China Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Condor Airlines",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Copa Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Delta Air Lines",
    "coords": international(true),
    "radius": 24,
  },
  {
    "name": "Dragonair",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "EgyptAir",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Emirates",
    "coords": international(true),
    "radius": 14,
  },
  {
    "name": "Ethiopian Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Etihad Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "EVA Air",
    "coords": international(true),
    "radius": 12,
  },
  // {
  //   "name": "Finnair</Yes"
  // },
  {
    "name": "Malawian Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Malaysia Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Nok Air",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Norwegian Airlines",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Oman Air",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Pakistan Airlines",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Philippine Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Porter Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Qantas Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Qatar Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "RwandAir",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Royal Brunei Airlines",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Scandinavian Airlines (SAS)",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Silk Air",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Singapore Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Sky Airline",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "South African Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Southwest Airlines",
    "coords": international(false),
    "radius": 23,
  },
  {
    "name": "Spirit Airlines",
    "coords": international(false),
    "radius": 12,
  },
  {
    "name": "Streamline Air",
    "coords": "n/a",
    "radius": 12,
  },
  {
    "name": "Swiss Int&#8217;l Air Lines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "TACA Airlines",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "TAP Air Portugal",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "TAM Airlines",
    "coords": international(true),
    "radius": 14,
  },
  {
    "name": "TAROM",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Thai Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Tiger Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Turkish Airlines",
    "coords": international(true),
    "radius": 13,
  },
  {
    "name": "United Airlines",
    "coords": international(true),
    "radius": 23,
  },
  {
    "name": "US Airways",
    "coords": international(false),
    "radius": 15,
  },
  {
    "name": "Virgin Atlantic Airways",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "V Australia",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "VietJet Air",
    "coords": international(true),
    "radius": 12,
  },
  {
    "name": "Vietnam Airlines",
    "coords": international(false),
    "radius": 12,
  },
];
