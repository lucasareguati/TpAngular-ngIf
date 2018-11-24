const axios = import('axios');

const getLugarLatLng = async(direccion) =>{

    let encondeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyAJ2aEs0UpGAW-G4mleFU6nasD6U1RkfT0`)

    if(resp.data.status == 'ZERO_RESULTS'){
        throw new Error (`No hay resultados para la ciudad ${direccion}`);
    }
    

    
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    
    return {
        direccion:location.formatted_address,
        lat:coors.lat,
        lng: coors.lng
    }

}

export const getLugarLatLng;