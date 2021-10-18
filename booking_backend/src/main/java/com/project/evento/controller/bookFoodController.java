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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.bookFood;
import com.project.evento.model.food;
import com.project.evento.model.foodreport;
import com.project.evento.model.foodreport1;
import com.project.evento.model.foodreport2;
import com.project.evento.repository.bookFoodRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class bookFoodController {

	@Autowired
	private bookFoodRepository bookfoodrepository;
	
	//get all booked foods
	
	@GetMapping("/bookFoods")
	public List<bookFood> getAllBookedFoods(){
	 return bookfoodrepository.findAll();
	 
 }
 
	//create book food
	@PostMapping("/bookFoods")
	public bookFood createfoodBooking(@RequestBody bookFood bookfood) {
		return bookfoodrepository.save(bookfood);
	}
	
	//delete food rest api
	
		@DeleteMapping("bookFoods/{order_food_id}")
		public ResponseEntity<Map<String, Boolean>> deleteorderFood(@PathVariable long order_food_id){
			
			bookFood bookfood = bookfoodrepository.findById(order_food_id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + order_food_id));

			bookfoodrepository.delete(bookfood);
			Map <String, Boolean> response =new HashMap<>();
			response.put("delete" , Boolean.TRUE);
			
			return ResponseEntity.ok(response);
		}

	//search
	@GetMapping("/abc/{value}")
	public ResponseEntity<List<food>> findAllsearch(@PathVariable Long value){
		List<food> result = bookfoodrepository.retrievefood2(value);
		return ResponseEntity.ok(result);
	}
	
	
	//get confirm food packages according to the booking id
		@GetMapping("/retrieveconfirmfood/{value}")
		public ResponseEntity<List<bookFood>> findAllSearch(@PathVariable("value") String value){
			List<bookFood> result = bookfoodrepository.retrieveconfirmfood(value);
				
			return ResponseEntity.ok(result);
		}
	
	
	
//	// get food by id rest api
//		@GetMapping("/bookfood/{order_food_id}")
//		public ResponseEntity<bookFood> getFoodById(@PathVariable long order_food_id) {
//			
//			bookFood bookfood = bookfoodrepository.findById(order_food_id).orElseThrow(() -> new ResourceNotFoundException("Food not exist with id :" + order_food_id));
//			
//			return ResponseEntity.ok(bookfood);
//			
//			
//			
//		}
		
		
		// report
		@GetMapping("/freport")
		public ResponseEntity<List<foodreport>> getRSummary(){
			List<foodreport> result = bookfoodrepository.findRSummary();
			return ResponseEntity.ok(result);
		}
	
		//report1
		@GetMapping("/freport1")
		public ResponseEntity<List<foodreport1>> getRoneSummary(){
			List<foodreport1> result = bookfoodrepository.findfoodtotalincom();
			return ResponseEntity.ok(result);
		}
		
		//report2
		@GetMapping("/freport2")
		public ResponseEntity<List<foodreport2>> getRtwoSummary(){
			List<foodreport2> result = bookfoodrepository.findfoodnooforders();
			return ResponseEntity.ok(result);
		}
		
		
		
		
		
		
		@GetMapping("/bookFoods/getRentalOrderAdminReport")
		public int getFoodOrderCount() {
			return bookfoodrepository.foodOrderTotalAdminReport();
		}
		
		
		
		
		
		

}