package com.project.evento.repository;



import java.util.Date;
import java.util.List;

import org.springframework.data.domain.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.evento.model.Booking;
import com.project.evento.model.BookingReport1;
import com.project.evento.model.DeletedBooking;



public interface BookingRepository extends JpaRepository<Booking, Long>{
	
	@Query(value="select * from Booking order by booking_id desc limit 1", nativeQuery= true)
	public List<Booking>ggwp();

	@Query("select book from Booking book where book.location_id=:searchText or book.status like %:name% or book.booking_date like %:name% or book.event_type like %:name%" )
	public List<Booking>findAllSearchBooking(@Param("searchText") Long searchText, @Param("name") String name);
	
//	@Query("select book from Booking book where book.location_id=:searchText or book.status like :name% or book.gusts=:name or book.booking_date=:name or book.location_id=:name or book.event_type=:name")
//	public List<Booking>findAllSearchBooking(@Param("searchText") Long searchText, @Param("name") String name);

	@Query(value="select * from booking where customer_id like :cusID ",nativeQuery =true)
	public List<Booking> myBookings(@Param("cusID") String cusID);

//	
//	@Query(value="select * from deletebooking where customer_id like :cusID ",nativeQuery =true)
//	public List<DeletedBooking> myDeletedBookings(@Param("cusID") String cusID);

	
	//get location report
	@Query("select new com.project.evento.model.BookingReport1(l.locationName,count(b.location_id)) from Booking b, Location l where b.location_id = l.location_id group by l.locationName")
	public List<BookingReport1> reportBookinLocation();
	
	//all sales
	@Query(value ="select total_amount from evento.booking where status='approved' order by date ", nativeQuery =true)
	public List<String> listOfBookingAmount();
	
	//all sales dates
	@Query(value ="select date from evento.booking where status='approved' order by date ", nativeQuery =true)
	public List<String> listOfBookingDate();
	
	//last 10 days sales
	@Query(value ="select total_amount from evento.booking where datediff(now(),date)< 10 and status='approved' order by date ", nativeQuery =true)
	public List<String> listOfBookingAmountLastt10();
	
	//last 30 days sales
	@Query(value ="select total_amount from evento.booking where datediff(now(),date)< 30 and status='approved' order by date", nativeQuery =true)
	public List<String> listOfBookingAmountLastt30();

	//Upcoming approved bookings
	@Query(value ="select count(booking_id) from evento.booking where datediff(STR_TO_DATE(booking_date, '%Y-%m-%d'),now()) > 1 and status = \"approved\"", nativeQuery =true)
	public List<Long> listOfBookingupcoming();
	
	//completed bookings
	@Query(value ="select count(booking_id) from evento.booking where datediff(STR_TO_DATE(booking_date, '%Y-%m-%d'),now()) < 1 and status = \"approved\"", nativeQuery =true)
	public List<Long> listOfBookingupcomplete();
	
	
}
