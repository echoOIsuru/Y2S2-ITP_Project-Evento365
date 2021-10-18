package com.project.evento.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.confirmfood;
import com.project.evento.repository.confirmfoodRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class confirmfoodcontroller {
	
	@Autowired
	private confirmfoodRepository confirmfoodrepository;
	
		//get all confirmed foods
		@GetMapping("/confirmfood")
		public List<confirmfood> getAllBookedFoods(){
		 return confirmfoodrepository.findAll(); 
		}
	
		//create confirm food
		@PostMapping("/confirmfood")
		public confirmfood createConfirmFood(@RequestBody confirmfood confirmfood) {
			return confirmfoodrepository.save(confirmfood);
		}
		
	

}
