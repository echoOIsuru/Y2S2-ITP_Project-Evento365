package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.DeletedBooking;
import com.project.evento.repository.DeletedBookingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DeletedBookingController {

	@Autowired
	private DeletedBookingRepository bookingRepository;
	
	//myDeletedbookings
	@GetMapping("/bookings/mydelbookings/{cusID}")
	public ResponseEntity<List<DeletedBooking>> myDeleteBookings(@PathVariable String cusID){
		
		List<DeletedBooking> booking = bookingRepository.myDeletedBookings(cusID);
		//List<Booking> booking = null;
		return ResponseEntity.ok(booking);
	}
}
