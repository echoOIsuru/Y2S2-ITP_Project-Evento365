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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Booking;
import com.project.evento.model.food;
import com.project.evento.repository.foodrepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class foodcontroller {

	@Autowired
	private foodrepository FoodRepository;
	
	//get all food items
	
	@GetMapping("/food")
	public List<food> getAllfoods(){
		return FoodRepository.findAll();
	}
	

	//create food
	@PostMapping("/food")
	public food createBooking(@RequestBody food Food) {
		return FoodRepository.save(Food);
	}
	
	// get food by id rest api
	@GetMapping("/food/{foodid}")
	public ResponseEntity<food> getFoodById(@PathVariable long foodid) {
		
		food food = FoodRepository.findById(foodid).orElseThrow(() -> new ResourceNotFoundException("Food not exist with id :" + foodid));
		
		return ResponseEntity.ok(food);
		
		
		
	}
	
	// update food rest api
	
	@PutMapping("/food/{foodid}") 
	public ResponseEntity<food> updateFood(@PathVariable Long foodid , @RequestBody food foodDetails){
		
		food food = FoodRepository.findById(foodid).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + foodid));
		
		food.setFoodcategoryid(foodDetails.getFoodcategoryid());
		food.setFoodcategory(foodDetails.getFoodcategory());
		food.setFoodname(foodDetails.getFoodname());
		food.setCost(foodDetails.getCost());
		food.setDescription(foodDetails.getDescription());
		food.setFimage(foodDetails.getFimage());
		
		food updateFood = FoodRepository.save(food);
		
		return ResponseEntity.ok(updateFood);
		
	}
	
	//delete food rest api
	
	@DeleteMapping("food/{foodid}")
	public ResponseEntity<Map<String, Boolean>> deleteFood(@PathVariable long foodid){
		
		food food = FoodRepository.findById(foodid).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + foodid));

		FoodRepository.delete(food);
		Map <String, Boolean> response =new HashMap<>();
		response.put("delete" , Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
	//get food packages according to the foodcategoryid
	@GetMapping("/retrievefood2/{value}")
	public ResponseEntity<List<food>> findAllSearch(@PathVariable("value") String value){
		List<food> result = FoodRepository.retrievefood2(value);
			
		return ResponseEntity.ok(result);
	}
	
	//search for admin interface
	
		@GetMapping("/foods/search/{fvalue}")
		public ResponseEntity<List<food>> validatefood(@PathVariable String fvalue){
			List<food> listfood= FoodRepository.findByFoodcategoryOrFoodcategoryid(fvalue);
			if (!listfood.isEmpty()) {
			return ResponseEntity.ok(listfood);
			}
			else {
			//List<food> listFoodEmpty = List.of(new food());
			return ResponseEntity.ok(null);
			}
			
		}
			



	
	
	
	

	
}
