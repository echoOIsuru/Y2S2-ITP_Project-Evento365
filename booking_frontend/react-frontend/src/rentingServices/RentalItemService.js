import axios from 'axios';

const RENTALITEM_API_BASE_URL = "http://localhost:8080/api/v1/rentalitems";
const TEMPORARYITEMCART_API_BASE_URL = "http://localhost:8080/api/v1/temporaryitems"
const RETRIEVE_ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/retrieveitems"
const RETRIEVE_REPORT_API_BASE_URL = "http://localhost:8080/api/v1/retrieveDetails"
const HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/itemrents"
const UPDATE_AVAILABLE_API_BASE_URL = "http://localhost:8080/api/v1/updateavailable"
const SEARCH_API_REST_URL = "http://localhost:8080/api/v1/rentalitem/search"

class RentalItemService{

    searchItem(keyword){
        return axios.get(SEARCH_API_REST_URL + '/' + keyword)
    }

    getRentalItems(){
        return axios.get(RENTALITEM_API_BASE_URL);
    }

    createItem(rentalitem){
            return axios.post(RENTALITEM_API_BASE_URL, rentalitem);
    }

    getItemsById(rentalitemid){
        return axios.get(RENTALITEM_API_BASE_URL + '/' + rentalitemid);
    }

    updateItem(rentalitem, rentalitemid){
        return axios.put(RENTALITEM_API_BASE_URL + '/' + rentalitemid, rentalitem);
    }

    updateAvailable(rentalitem, rentalitemid){
        return axios.put(UPDATE_AVAILABLE_API_BASE_URL + '/' + rentalitemid, rentalitem);
    }

    deleteItem(rentalitemid){
        return axios.delete(RENTALITEM_API_BASE_URL + '/' + rentalitemid);
    }

    getTemporaryItems(){
        return axios.get(TEMPORARYITEMCART_API_BASE_URL);
    }

    //retrieve items according to the booking_id
    retrieveItems(booking_id){
        return axios.get(RETRIEVE_ITEMS_API_BASE_URL + '/' + booking_id);
    }

    //retrieve all items to the report
    retrieveDetails(){
        return axios.get(RETRIEVE_REPORT_API_BASE_URL);
    }

    /*createTemporaryItemCart(createTemporaryItemCart){
        return axios.post(TEMPORARYITEMCART_API_BASE_URL, createTemporaryItemCart);
    }*/

    createTemporaryItemCart(temporaryitem){
        return axios.post(TEMPORARYITEMCART_API_BASE_URL, temporaryitem);
    }

    deleteTemporaryitem(rentalid){
        return axios.delete(TEMPORARYITEMCART_API_BASE_URL + '/' + rentalid)
    }

    createRentHistory(rent){
        return axios.post(HISTORY_API_BASE_URL, rent);
    }

    getTotalRentalItemsReport(){
        return axios.get(RENTALITEM_API_BASE_URL+'/getRentalOrderAdminReport')
    }

    // //30-sep
    // updateQuantity(bookingid, name){
    //     return axios.put(TEMPORARYITEMCART_API_BASE_URL + '/' + bookingid + '/' + name)
    // }
}

export default new RentalItemService()