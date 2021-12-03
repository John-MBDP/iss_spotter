const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

// *************REFACTORED TO GO INTO ISS.JS FILE***************

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIp("162.245.144.188", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("Your geo location is!:", coordinates);
// });

// const coordinates = { latitude: 43.6509, longitude: -79.5527 };

// fetchISSFlyOverTimes(coordinates, (error, passtimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("This is the amount of times it passed by:", passtimes);
// });
