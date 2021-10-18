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
import com.project.evento.model.Event_planner;
import com.project.evento.model.Hiring;
import com.project.evento.repository.Event_plannerRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class Event_plannerController {
	

@Autowired
private Event_plannerRepository event_plannerRepository;


//get all event planners
@GetMapping("/Event_planners")
public List<Event_planner> getAllEvent_planner(){
	return event_plannerRepository.findAll();
}

  //create event planner rest api
    @PostMapping("/Event_planners")
     public Event_planner createEvent_planner(@RequestBody Event_planner event_planner) {
	   
	 return event_plannerRepository.save(event_planner) ;
	   
   }
    
    
    //get employee by id rest api
    
    @GetMapping("/Event_planners/{id}")
    public ResponseEntity<Event_planner>getEvent_plannerById(@PathVariable  Long id) {
    	
    	
    	Event_planner event_planner= event_plannerRepository.findById(id)
    			.orElseThrow(()->new ResourceNotFoundException("Event_planner not exixt with id: " + id));
    	    return ResponseEntity.ok(event_planner);
   
    }
    
    
    @PutMapping("/Event_planners/{id}")
    public ResponseEntity<Event_planner> updateEvent_planner(@PathVariable Long id,@RequestBody Event_planner event_plannerDetails){
    	Event_planner event_planner= event_plannerRepository.findById(id)
    .orElseThrow(()->new ResourceNotFoundException("Event_planner not exixt with id: " + id));
    	
    	event_planner.setEmail(event_plannerDetails.getEmail());
    	event_planner.setName(event_plannerDetails.getName());
    	event_planner.setExperience(event_plannerDetails.getExperience());
    	event_planner.setImg(event_plannerDetails.getImg());
    	event_planner.setPhone_number(event_plannerDetails.getPhone_number());
    	event_planner.setPrice(event_plannerDetails.getPrice());
    	event_planner.setSkills(event_plannerDetails.getSkills());
    	
    Event_planner updateEvent_planner =	event_plannerRepository.save(event_planner);
    return ResponseEntity.ok(updateEvent_planner);
    
    
    }
    
    // delete event planner api
    
    @DeleteMapping("/Event_planners/{id}")
    public ResponseEntity <Map<String, Boolean>>deleteEvent_planner(@PathVariable  Long id){
    	
    	Event_planner event_planner= event_plannerRepository.findById(id)
    		    .orElseThrow(()->new ResourceNotFoundException("Event_planner not exixt with id: " + id));
    		    	
    	
    	
    	event_plannerRepository.delete(event_planner);
    	Map<String, Boolean> response = new HashMap<>();
    	response.put("deleted", Boolean.TRUE);
    	return ResponseEntity.ok(response);
    }
    
    @GetMapping("/Event_planners2")
   	public ResponseEntity <List< Event_planner>> getHiringDate2(@RequestParam String date) {
   		
      	 List <Event_planner> hiring =event_plannerRepository.finddate(date);
   				
   		return ResponseEntity.ok(hiring);
    }
    
 // search function
    @GetMapping("/Event_planners/search/{keyword}")
    public ResponseEntity<List<Event_planner>> loginValidate(@PathVariable String keyword) {
    List<Event_planner> listEventplanner= event_plannerRepository.findByNameOrSkills(keyword);
    if (!listEventplanner.isEmpty()) {
    return ResponseEntity.ok(listEventplanner);
    } else {
    List<Event_planner> listEventplanneremty = List.of(new Event_planner());
    return ResponseEntity.ok(listEventplanner);
    }



    }
    }
