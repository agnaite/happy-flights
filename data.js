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
  },
  {
    "name": "Aer Lingus",
    "coords": domestic(false),
  },
  {
    "name": "Aeroflot",
    "coords": domestic(false),
  },
  {
    "name": "Aeroméxico",
    "coords": domestic(true),
  },
  {
    "name": "AirAsia",
    "coords": domestic(true),
  },
  {
    "name": "Air Berlin",
    "coords": domestic(true),
  },
  {
    "name": "Air Canada",
    "coords": domestic(false),
  },
  {
    "name": "Air China",
    "coords": domestic(true),
  },
  {
    "name": "Air France",
    "coords": domestic(true),
  },
  {
    "name": "Air India",
    "coords": domestic(false),
  },
  {
    "name": "Air New Zealand",
    "coords": domestic(true),
  },
  {
    "name": "AirAsia",
    "coords": domestic(false),
  },
  {
    "name": "Alaska Airlines",
    "coords": domestic(true),
  },
  {
    "name": "Alitalia",
    "coords": "&nbsp;",
  },
  {
    "name": "American Airlines",
    "coords": "&nbsp;",
  },
  {
    "name": "ANA All Nippon Airways",
    "coords": "&nbsp;",
  },
  {
    "name": "Asiana Airlines",
    "coords": "&nbsp;",
  },
  {
    "name": "Austrian Airlines",
    "coords": domestic(true),
  },
  {
    "name": "Avianca",
    "coords": "&nbsp;",
  },
  {
    "name": "Bangkok Airways",
    "coords": domestic(false),
  },
  {
    "name": "bmi British Midland",
    "coords": "&nbsp;",
  },
  {
    "name": "British Airways",
    "coords": "&nbsp;",
  },
  {
    "name": "Cathay Pacific Airways",
    "coords": "n/a",
  },
  {
    "name": "China Airlines",
    "coords": "&nbsp;"
  },
  {
    "name": "Condor Airlines",
    "coords": domestic(false)
  },
  {
    "name": "Copa Airlines",
    "coords": "&nbsp;"
  },
  {
    "name": "Delta Air Lines",
    "coords": domestic(true)
  },
  {
    "name": "Dragonair",
    "coords": "&nbsp;"
  },
  {
    "name": "EgyptAir",
    "coords": "&nbsp;"
  },
  {
    "name": "Emirates",
    "coords": "&nbsp;"
  },
  {
    "name": "Ethiopian Airlines",
    "coords": domestic(true)
  },
  {
    "name": "Etihad Airways",
    "coords": "&nbsp;"
  },
  {
    "name": "EVA Air",
    "coords": "&nbsp;"
  },
  {
    "name": "Finnair",
    "coords": domestic(true),
  },
  {
    "name": "Malawian Airlines",
    "coords": domestic(true)
  },
  {
    "name": "Malaysia Airlines",
    "coords": "&nbsp;"
  },
  {
    "name": "Nok Air",
    "coords": domestic(true)
  },
  {
    "name": "Norwegian Airlines",
    "coords": domestic(false)
  },
  {
    "name": "Oman Air",
    "coords": "&nbsp;",
  },
  {
    "name": "Pakistan Airlines",
    "coords": domestic(false)
  },
  {
    "name": "Philippine Airlines",
    "coords": "&nbsp;"
  },
  {
    "name": "Porter Airlines",
    "coords": domestic(true)
  },
  {
    "name": "Qantas Airways",
    "coords": domestic(true)
  },
  {
    "name": "Qatar Airways",
    "coords": "&nbsp;"
  },
  {
    "name": "RwandAir",
    "coords": domestic(true)
  },
  {
    "name": "Royal Brunei Airlines",
    "coords": domestic(false),
  },
  {
    "name": "Scandinavian Airlines (SAS)",
    "coords": "&nbsp;No"
  },
  {
    "name": "Silk Air",
    "coords": "&nbsp;"
  },
  {
    "name": "Singapore Airlines",
    "coords": "n/a"
  },
  {
    "name": "Sky Airline",
    "coords": "&nbsp;"
  },
  {
    "name": "South African Airways",
    "coords": domestic(true)
  },
  {
    "name": "Southwest Airlines",
    "coords": domestic(false)
  },
  {
    "name": "Spirit Airlines",
    "coords": domestic(false)
  },
  {
    "name": "Streamline Air",
    "coords": domestic(true)
  },
  {
    "name": "Swiss Int&#8217;l Air Lines",
    "coords": "&nbsp;"
  },
  {
    "name": "TACA Airlines",
    "coords": "&nbsp;"
  },
  {
    "name": "TAP Air Portugal",
    "coords": "&nbsp;"
  },
  {
    "name": "TAM Airlines",
    "coords": domestic(false)
  },
  {
    "name": "TAROM",
    "coords": domestic(true)
  },
  {
    "name": "Thai Airways",
    "coords": domestic(false)
  },
  {
    "name": "Tiger Airways",
    "coords": domestic(true)
  },
  {
    "name": "Turkish Airlines",
    "coords": domestic(false)
  },
  {
    "name": "United Airlines",
    "coords": domestic(false)
  },
  {
    "name": "US Airways",
    "coords": domestic(false)
  },
  {
    "name": "Virgin Atlantic Airways",
    "coords": domestic(true)
  },
  {
    "name": "V Australia",
    "coords": domestic(true)
  },
  {
    "name": "VietJet Air",
    "coords": domestic(true)
  },
  {
    "name": "Vietnam Airlines",
    "coords": domestic(true)
  },
  {
    "name": "Aegean Airlines",
    "coords": international(true)
  },
  {
    "name": "Aer Lingus",
    "coords": international(false)
  },
  {
    "name": "Aeroflot",
    "coords": international(false)
  },
  {
    "name": "Aeroméxico",
    "coords": international(true)
  },
  {
    "name": "AirAsia",
    "coords": international(true)
  },
  {
    "name": "Air Berlin",
    "coords": international(true)
  },
  {
    "name": "Air Canada",
    "coords": international(true)
  },
  {
    "name": "Air China",
    "coords": international(true)
  },
  {
    "name": "Air France",
    "coords": international(true)
  },
  {
    "name": "Air India",
    "coords": international(true)
  },
  {
    "name": "Air New Zealand",
    "coords": international(true)
  },
  {
    "name": "AirAsia",
    "coords": international(false)
  },
  {
    "name": "Alaska Airlines",
    "coords": international(true)
  },
  {
    "name": "Alitalia",
    "coords": international(true)
  },
  {
    "name": "American Airlines",
    "coords": international(true)
  },
  {
    "name": "ANA All Nippon Airways",
    "coords": international(true)
  },
  {
    "name": "Asiana Airlines",
    "coords": international(true)
  },
  {
    "name": "Austrian Airlines",
    "coords": international(true)
  },
  {
    "name": "Avianca",
    "coords": international(true)
  },
  {
    "name": "Bangkok Airways",
    "coords": international(true)
  },
  {
    "name": "bmi British Midland",
    "coords": international(true)
  },
  {
    "name": "British Airways",
    "coords": international(true)
  },
  {
    "name": "Cathay Pacific Airways",
    "coords": international(true)
  },
  {
    "name": "China Airlines",
    "coords": international(true)
  },
  {
    "name": "Condor Airlines",
    "coords": international(false)
  },
  {
    "name": "Copa Airlines",
    "coords": international(true)
  },
  {
    "name": "Delta Air Lines",
    "coords": international(true)
  },
  {
    "name": "Dragonair",
    "coords": international(true)
  },
  {
    "name": "EgyptAir",
    "coords": international(false)
  },
  {
    "name": "Emirates",
    "coords": international(true)
  },
  {
    "name": "Ethiopian Airlines",
    "coords": international(true)
  },
  {
    "name": "Etihad Airways",
    "coords": international(true)
  },
  {
    "name": "EVA Air",
    "coords": international(true)
  },
  // {
  //   "name": "Finnair</Yes"
  // },
  {
    "name": "Malawian Airlines",
    "coords": international(true)
  },
  {
    "name": "Malaysia Airlines",
    "coords": international(true)
  },
  {
    "name": "Nok Air",
    "coords": international(true)
  },
  {
    "name": "Norwegian Airlines",
    "coords": international(false)
  },
  {
    "name": "Oman Air",
    "coords": international(true)
  },
  {
    "name": "Pakistan Airlines",
    "coords": international(false)
  },
  {
    "name": "Philippine Airlines",
    "coords": international(true)
  },
  {
    "name": "Porter Airlines",
    "coords": international(true)
  },
  {
    "name": "Qantas Airways",
    "coords": international(true)
  },
  {
    "name": "Qatar Airways",
    "coords": international(true)
  },
  {
    "name": "RwandAir",
    "coords": international(true)
  },
  {
    "name": "Royal Brunei Airlines",
    "coords": international(false)
  },
  {
    "name": "Scandinavian Airlines (SAS)",
    "coords": international(false)
  },
  {
    "name": "Silk Air",
    "coords": international(true)
  },
  {
    "name": "Singapore Airlines",
    "coords": international(true)
  },
  {
    "name": "Sky Airline",
    "coords": international(true)
  },
  {
    "name": "South African Airways",
    "coords": international(true)
  },
  {
    "name": "Southwest Airlines",
    "coords": international(false)
  },
  {
    "name": "Spirit Airlines",
    "coords": international(false)
  },
  {
    "name": "Streamline Air",
    "coords": "n/a"
  },
  {
    "name": "Swiss Int&#8217;l Air Lines",
    "coords": international(true)
  },
  {
    "name": "TACA Airlines",
    "coords": international(true)
  },
  {
    "name": "TAP Air Portugal",
    "coords": international(true)
  },
  {
    "name": "TAM Airlines",
    "coords": international(true)
  },
  {
    "name": "TAROM",
    "coords": international(true)
  },
  {
    "name": "Thai Airways",
    "coords": international(true)
  },
  {
    "name": "Tiger Airways",
    "coords": international(true)
  },
  {
    "name": "Turkish Airlines",
    "coords": international(true)
  },
  {
    "name": "United Airlines",
    "coords": international(true)
  },
  {
    "name": "US Airways",
    "coords": international(false)
  },
  {
    "name": "Virgin Atlantic Airways",
    "coords": international(true)
  },
  {
    "name": "V Australia",
    "coords": international(true)
  },
  {
    "name": "VietJet Air",
    "coords": international(true)
  },
  {
    "name": "Vietnam Airlines",
    "coords": international(false)
  },
];
