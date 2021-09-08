package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.project.evento.model.Location;
import com.project.evento.repository.BookingRepository;
import com.project.evento.repository.LocationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")


public class LocationController {

	@Autowired
	private LocationRepository locationRepository;
	
	//get all 
		@GetMapping("/locations")
		public List<Location> getAllLocations(){
			return locationRepository.findAll();
		}
		
		//create location
		@PostMapping("/locations")
		public Location createLocation(@RequestBody Location location) {
			return locationRepository.save(location);
		}
	
		//get booking by id rest API
		@GetMapping("/locations/{id}")
		public ResponseEntity<Location> getBookingByID(@PathVariable Long id) {
			Location location = locationRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
			return ResponseEntity.ok(location);
		}
		
		@PostMapping("/locations/{id}")
		public ResponseEntity<Location> updateLocation(@PathVariable Long id, @RequestBody Location locationDe){
			Location location = locationRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
			
			location.setLocationName(locationDe.getLocationName());
			location.setAddress(locationDe.getAddress());
			location.setLocationPrice(locationDe.getLocationPrice());
			location.setMaxCount(locationDe.getMaxCount());
			location.setPicture(locationDe.getPicture());
		
			
			
			Location updateLocation = locationRepository.save(location);
			return ResponseEntity.ok(updateLocation);
		}
		
		//delete location rest API
		@DeleteMapping("/locations/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
			Location location = locationRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
			
			locationRepository.delete(location);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		//search
		@GetMapping("/locations/search")
		public ResponseEntity<List<Location>> findAllSearch(@RequestParam("id") Long searchText,
				@RequestParam("value") String name){
			List<Location> location = locationRepository.findAllSearchLocation(searchText,name);
			
			return ResponseEntity.ok(location);
		}
		
		//search max
		@GetMapping("/locations/max")
		public ResponseEntity<List<Location>> findAllSearchMax(@RequestParam("id") Long searchText,
				@RequestParam("value") String name){
			List<Location> location = locationRepository.findAllSearchMax(searchText,name);
			
			return ResponseEntity.ok(location);
		}
		
		//search min
		@GetMapping("/locations/min")
		public ResponseEntity<List<Location>> findAllSearchMin(@RequestParam("id") Long searchText,
				@RequestParam("value") String name){
			List<Location> location = locationRepository.findAllSearchMin(searchText,name);
			
			return ResponseEntity.ok(location);
		}
		
}
