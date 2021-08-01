import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/api/v1/bookings";

class BookingService{

    getBookings(){
        return axios.get(BOOKING_API_BASE_URL);
    }

    createBooking(booking){
        return axios.post(BOOKING_API_BASE_URL, booking);
    }
}

//export object of BookingService
export default new BookingService();