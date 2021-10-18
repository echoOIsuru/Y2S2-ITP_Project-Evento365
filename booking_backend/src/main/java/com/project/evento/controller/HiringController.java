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
import com.project.evento.model.EventaplannerReport;
import com.project.evento.model.Hiring;
import com.project.evento.repository.HiringRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HiringController {
    
	@Autowired
	private HiringRepository HiringRepository;
	
	
	//get all hiring
	@GetMapping("/Hiring")
	public List<Hiring> getAllHiring(){
		return HiringRepository.findAll();
	}
	
	
	//create hiring rest api
	@PostMapping("/Hiring")
	public Hiring createHiring(@RequestBody Hiring hiring) {
		
		return HiringRepository.save(hiring);
	
}
	
	
	//get hiring by id rest api
	@GetMapping("/Hiring/{id}")
	public ResponseEntity<Hiring> getHiring(@PathVariable Long id) {
		
		Hiring hiring =HiringRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hiring not exist with id :" + id));
			
		return ResponseEntity.ok(hiring);
		
	}
	
	//update hiring api
	@PutMapping("/Hiring/{id}")
	public ResponseEntity<Hiring> updatHiring(@PathVariable Long id, @RequestBody Hiring hiringDetails){

		Hiring hiring =HiringRepository.findById(id)
		
				.orElseThrow(() -> new ResourceNotFoundException("Hiring not exist with id :" + id));
		
		hiring.setCus_address(hiringDetails.getCus_address());
		hiring.setCus_id(hiringDetails.getCus_id());
		hiring.setEvent_date(hiringDetails.getEvent_date());
		hiring.setEvent_planner(hiringDetails.getEvent_planner());  
		
		Hiring updateHiring =HiringRepository.save(hiring);
	    return ResponseEntity.ok(updateHiring);
	}
	
	//delete hiring rest api
     @DeleteMapping("Hiring/{id}")
     public ResponseEntity<Map<String, Boolean>> deleteHiring(@PathVariable Long id){
    		Hiring hiring =HiringRepository.findById(id)
    		.orElseThrow(() -> new ResourceNotFoundException("Hiring not exist with id :" + id));
    		 
    	 
    	 HiringRepository.delete(hiring);
         Map<String, Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
     }
     
     @GetMapping("/Hiring2")
 	public ResponseEntity <List< Hiring>> getHiringDate(@RequestParam String date) {
 		
    	 List <Hiring> hiring =HiringRepository.finddate(date);
 				
 		return ResponseEntity.ok(hiring);
 		
 	}
     
     
     @GetMapping("/Hiring3")
  	public ResponseEntity <List< EventaplannerReport>> getSummary(){
  		
     	 List <EventaplannerReport> hiring =HiringRepository.findSummary();
  				
     	return ResponseEntity.ok(hiring);
  	}
      
     
     
     
}




