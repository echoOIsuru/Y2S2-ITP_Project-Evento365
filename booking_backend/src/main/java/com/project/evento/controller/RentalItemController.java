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
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.RentalItem;
import com.project.evento.repository.RentRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class RentalItemController {
	
	@Autowired
	private RentRepository rentRepository;
	
	//get all items
	@GetMapping("/rentalitems")
	public List <RentalItem> getAllItems(){
		return rentRepository.findAll();		
	}
		
	//create item rest api
	@PostMapping("/rentalitems")
	public RentalItem createRentalItem(@RequestBody RentalItem rentalitem) {
		return rentRepository.save(rentalitem);
	}
	
	//get employee by id rest api
	@GetMapping("/rentalitems/{rentalitemid}")
	public ResponseEntity<RentalItem> getRentalItemById(@PathVariable int rentalitemid) {
		
		RentalItem rentalitem = rentRepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		return ResponseEntity.ok(rentalitem);
	}
	
	//update item rest api
	@PutMapping("/rentalitems/{rentalitemid}")
	public ResponseEntity<RentalItem> updateRentalItem(@PathVariable int rentalitemid, @RequestBody RentalItem rentalitemDetails){
		
		RentalItem rentalitem = rentRepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		
		rentalitem.setName(rentalitemDetails.getName());
		rentalitem.setDescription(rentalitemDetails.getDescription());
		rentalitem.setRentalperday(rentalitemDetails.getRentalperday());
		rentalitem.setTotalunits(rentalitemDetails.getTotalunits());
		
		RentalItem updatedRentalItem = rentRepository.save(rentalitem);
		
		return ResponseEntity.ok(updatedRentalItem);
		
	}  
		
	//delete item rest API
	@DeleteMapping("/rentalitems/{rentalitemid}")
	public ResponseEntity<Map<String, Boolean>> deleteItem(@PathVariable int rentalitemid){
		RentalItem rentalitem = rentRepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		
		rentRepository.delete(rentalitem);
		Map<String, Boolean> response = new HashMap<>(); 
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
