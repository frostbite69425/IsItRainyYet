async function getGeolocation() {
  try {
    const coordinates = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (userLocation) => {
          resolve({
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
          });
        },
        () => {
          reject(
            "Geolocator failed to retrieve position because location permission was not granted.",
          );
        },
      );
    });
    return coordinates;
  } catch (error) {
    console.error(error);
  }
}

export default getGeolocation;
