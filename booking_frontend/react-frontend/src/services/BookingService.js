import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/bookings";

class BookingService{

    getBookings(){
        return axios.get(BOOKING_API_BASE_URL);
    }

    createBooking(booking){
        return axios.post(BOOKING_API_BASE_URL, booking);
    }

    getBookingById(bookingId){
        return axios.get(BOOKING_API_BASE_URL + '/' + bookingId);
    }

    updateBooking(booking, bookinId){
        return axios.put(BOOKING_API_BASE_URL + '/'+bookinId, booking);
    }

    deleteBooking(bookingId){
        return axios.delete(BOOKING_API_BASE_URL + '/' + bookingId);
    }

    getLastBooking(){
        return axios.get(BOOKING_API_BASE_URL+'-test');
    }

    getSearchBoooking(value){
        return axios.get(BOOKING_API_BASE_URL + '/search?id=' + 10000 + '&value=' + value);
    }

}

//export object of BookingService
export default new BookingService();