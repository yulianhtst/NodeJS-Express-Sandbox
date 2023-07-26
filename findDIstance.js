// // function getDistance(longitude1, longitude2, latitude1, latitude2) {
// //     const a = Math.sin(latitude1) * Math.sin(latitude2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.cos(longitude2 - longitude1)
// //     console.log(a);
// //     let b = Math.acos(a)
// //     console.log(b);
// // }
// // getDistance(convertDegrees(27.43333), convertDegrees(27.91667), convertDegrees(43.18333), convertDegrees(43.21667))


// // N- longitude E-latitude
// // 43°10'59.99" N 27°25'59.99" E Provadija
// // 43°13'0.01" N 27°55'0.01" E Varna
// // 43.18333 27.43333


// function convertToDegrees(value) {
//     const degrees = parseInt(value); // Integer part: 14
//     const decimalDegrees = parseFloat((value % 1).toFixed(4)); // Decimal part: 0.0525
//     const minutes = parseInt(decimalDegrees * 60)
//     const seconds = Math.floor((parseFloat(((decimalDegrees * 60) % 1).toFixed(4))) * 60);
//     return [degrees, minutes, seconds]
// }


// // return degreesToRadians(degrees + (minutes ? minutes / 60 : 0) + (seconds ? seconds / 60 : 0));
// //Radians
// // function convertDegrees(input) {
// //     return (input * Math.PI) / 180;
// // }

// // Math.cos(angleInRadians);



// //latitude 43.18333 and longitude 27.43333
// //provadija 43.18333 27.43333
// //Varna 43.21667 27.91667
// function getDistance(longitude1, longitude2, latitude1, latitude2) {

//     const a = Math.sin(latitude1) * Math.sin(latitude2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.cos(longitude2 - longitude1)

//     let b = Math.acos(a)
// }
// getDistance(convertToDegrees(27.43333), convertToDegrees(27.91667), convertToDegrees(43.18333), convertToDegrees(43.21667))


function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculateSphericalDistance(lat1, lon1, lat2, lon2, r = 6371) {
    // Convert degrees to radians
    const coordinates = [lat1, lon1, lat2, lon2].map(toRadians);
    const [phi1, lambda1, phi2, lambda2] = coordinates;

    // Apply the haversine formula
    const a = Math.pow(Math.sin((phi2 - phi1) / 2), 2) + Math.cos(phi1) * Math.cos(phi2) * Math.pow(Math.sin((lambda2 - lambda1) / 2), 2);
    const d = 2 * r * Math.asin(Math.sqrt(a));

    return d;
}

// Example usage:
const lat1 = 43.18333;
const lon1 = 27.43333;

const lat2 = 43.21667;
const lon2 = 27.91667;

const distanceInKm = calculateSphericalDistance(lat1, lon1, lat2, lon2);

console.log(`The distance between Varna and Provadija ${distanceInKm.toFixed(4)} km.`);
