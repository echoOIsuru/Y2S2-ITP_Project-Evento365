import axios from 'axios';


const LOCATION_API_BASE_URL = "http://localhost:8080/api/v1/locations";
const DELETE_LOCATION_API_BASE_URL = "http://localhost:8080/api/v1/deletelocations";



class LocationService{

    getLocations(){
        return axios.get(LOCATION_API_BASE_URL);
    }

    createLocation(location){
        return axios.post(LOCATION_API_BASE_URL, location);
    }

    getLocationById(locationId){
        return axios.get(LOCATION_API_BASE_URL + '/' + locationId);
    }

    getDeleteLocationById(locationId){
        return axios.get( DELETE_LOCATION_API_BASE_URL + '/' + locationId);
    }

    updateLocation(location, locationId){
        return axios.post(LOCATION_API_BASE_URL + '/'+locationId, location);
    }

    deleteLocation(locationID){
        return axios.delete(LOCATION_API_BASE_URL+'/'+locationID);
    }

    getSearchBoooking(value){
        return axios.get(LOCATION_API_BASE_URL + '/search?id=' + 10000 + '&value=' + value);
    }

    getMaxPrice(vale){
        return axios.get(LOCATION_API_BASE_URL + '/max?id=' + vale + '&value=' + 'price');
    }

    getMinPrice(vale){
        return axios.get(LOCATION_API_BASE_URL + '/min?id=' + vale + '&value=' + 'price');
    }
}

//export object of LocationService
export default new LocationService();