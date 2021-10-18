package com.project.evento.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.data.domain.*;
import org.springframework.data.repository.query.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Booking;
import com.project.evento.model.BookingReport1;
import com.project.evento.model.DeletedBooking;
import com.project.evento.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BokingController {

	@Autowired
	private BookingRepository bookingRepository;
	
	//get all 
	@GetMapping("/bookings")
	public List<Booking> getAllBooking(){
		return bookingRepository.findAll();
	}
	
	//testing
	@GetMapping("/bookings-test")
	public List<Booking> getBooking(){
		return bookingRepository.ggwp();
	}
	
	//search
	@GetMapping("/bookings/search")
	public ResponseEntity<List<Booking>> findAllSearch(@RequestParam("id") Long searchText,
			@RequestParam("value") String name){
		List<Booking> booking = bookingRepository.findAllSearchBooking(searchText,name);
		//List<Booking> booking = null;
		return ResponseEntity.ok(booking);
	}
	
	
	//create booking 
	@PostMapping("/bookings")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepository.save(booking);
	}
	


	//get booking by id rest API
	@GetMapping("/bookings/{id}")
	public ResponseEntity<Booking> getBookingByID(@PathVariable Long id) {
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		return ResponseEntity.ok(booking);
	}
	
	//update booking rest API
	@PutMapping("/bookings/{id}")
	public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDe){
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		
		booking.setBooking_date(bookingDe.getBooking_date());
		//booking.setDate(bookingDe.getDate());
		booking.setEvent_type(bookingDe.getEvent_type());
		booking.setGusts(bookingDe.getGusts());
		booking.setLocation_id(bookingDe.getLocation_id());
		booking.setTotal(bookingDe.getTotal());
		booking.setStatus(bookingDe.getStatus());
		
		Booking updateBooking = bookingRepository.save(booking);
		return ResponseEntity.ok(updateBooking);
	}
	
	//delete booking rest API
	@DeleteMapping("/bookings/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		
		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	//mybookings
	@GetMapping("/bookings/mybookings/{cusID}")
	public ResponseEntity<List<Booking>> myBookings(@PathVariable String cusID){
		
		List<Booking> booking = bookingRepository.myBookings(cusID);
		//List<Booking> booking = null;
		return ResponseEntity.ok(booking);
	}
	
//	//myDeletedbookings
//	@GetMapping("/bookings/mydelbookings/{cusID}")
//	public ResponseEntity<List<DeletedBooking>> myDeleteBookings(@PathVariable String cusID){
//		
//		List<DeletedBooking> booking = bookingRepository.myDeletedBookings(cusID);
//		//List<Booking> booking = null;
//		return ResponseEntity.ok(booking);
//	}
	
	//booking with location report
	@GetMapping("/bookings/report1")
	public ResponseEntity<List<BookingReport1>> reportBookinLocation(){
		
		List<BookingReport1> booking = bookingRepository.reportBookinLocation();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking with cost report
	@GetMapping("/bookings/report2")
	public ResponseEntity<List<String>> listOfBookingAmount(){
		
		List<String> booking = bookingRepository.listOfBookingAmount();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking with cost report of last 10 days
	@GetMapping("/bookings/report3")
	public ResponseEntity<List<String>> listOfBookingAmountLastt10(){
		
		List<String> booking = bookingRepository.listOfBookingAmountLastt10();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking with cost report of last 30 days
	@GetMapping("/bookings/report4")
	public ResponseEntity<List<String>> listOfBookingAmountLastt30(){
		
		List<String> booking = bookingRepository.listOfBookingAmountLastt30();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking with datereport
	@GetMapping("/bookings/report5")
	public ResponseEntity<List<String>> listOfBookingDate(){
		
		List<String> booking = bookingRepository. listOfBookingDate();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking Upcoming
	@GetMapping("/bookings/report6")
	public ResponseEntity<List<Long>> listOfBookingupcoming(){
		
		List<Long> booking = bookingRepository.listOfBookingupcoming();
		
		return ResponseEntity.ok(booking);
	}
	
	//booking completed
	@GetMapping("/bookings/report7")
	public ResponseEntity<List<Long>> listOfBookingupcomplete(){
		
		List<Long> booking = bookingRepository.listOfBookingupcomplete();
		
		return ResponseEntity.ok(booking);
	}
	
}
