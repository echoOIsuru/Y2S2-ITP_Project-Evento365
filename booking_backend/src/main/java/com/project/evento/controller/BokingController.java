package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.Booking;
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
	
	//create booking
	@PostMapping("/bookings")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepository.save(booking);
	}
	
}
