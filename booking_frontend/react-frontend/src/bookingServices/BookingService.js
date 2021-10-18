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

    getMyBooking(value){
        return axios.get(BOOKING_API_BASE_URL + '/mybookings/'+value);
    }

    getMyDeletedBooking(value){
        return axios.get(BOOKING_API_BASE_URL + '/mydelbookings/'+value);
    }

    getBookingLocationReport(){
        return axios.get(BOOKING_API_BASE_URL + '/report1');
    }

    getBookingLocationReport2(){
        return axios.get(BOOKING_API_BASE_URL + '/report2');
    }

    getBookingLocationReportLast10(){
        return axios.get(BOOKING_API_BASE_URL + '/report3');
    }

    getBookingLocationReportLast30(){
        return axios.get(BOOKING_API_BASE_URL + '/report4');
    }

    getBookingLocationReportDays(){
        return axios.get(BOOKING_API_BASE_URL + '/report5');
    }

    //need to complete bookings
    getBookingofApproved(){
        return axios.get(BOOKING_API_BASE_URL + '/report6');
    }

    getBookingofCompleted(){
        return axios.get(BOOKING_API_BASE_URL + '/report7');
    }
}

//export object of BookingService
export default new BookingService();