package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.ResourceClosedException;
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
import com.project.evento.model.Feedback;

import com.project.evento.repository.FeedbackRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FeedbackController {

	@Autowired
	private FeedbackRepository feedbackRepository;
	
	// get all feedback
	
	@GetMapping("/Feedback")
	public List<Feedback> getAllFeedback(){
		
		return feedbackRepository.findAll();
		
	}
	
	//create employee rest api
	@PostMapping("/Feedback")
	public Feedback creatFeedback(@RequestBody Feedback feedback) {
		
		return feedbackRepository.save(feedback);
		
		
	}

		//get feedback by id rest api
		 @GetMapping("/Feedback/{id}")
	    public ResponseEntity <Feedback> getFeedbackById(@PathVariable Long id) {
	    	
			 Feedback feedback = feedbackRepository.findById(id)
			.orElseThrow(()-> new ResourceNotFoundException("Feedback not exist with id :" +id));
	    	
			 return ResponseEntity.ok(feedback);
	    }
	    
		 //update feedback rest api
		 
		 @PutMapping("/Feedback/{id}")
		public ResponseEntity<Feedback> updateFeedback(@PathVariable Long id,@RequestBody Feedback feedbackDeatils){
			
			 Feedback feedback = feedbackRepository.findById(id)
		   .orElseThrow(()-> new ResourceNotFoundException("Feedback not exist with id :" +id));
				    	
			feedback.setEventplanner_name(feedbackDeatils.getEventplanner_name());
			feedback.setCus_name(feedbackDeatils.getCus_name());
			feedback.setFeedback(feedbackDeatils.getFeedback());
			
			
		Feedback updateFeedback = feedbackRepository.save(feedback);
		return ResponseEntity.ok(updateFeedback);
		
		 }
		 
		 //delete 
		 
		 @DeleteMapping("/Feedback/{id}")
		 public ResponseEntity <Map<String, Boolean>> deleteFeedback(@PathVariable Long id){
			 
				
			 Feedback feedback = feedbackRepository.findById(id)
		   .orElseThrow(()-> new ResourceNotFoundException("Feedback not exist with id :" +id));
			 
			 feedbackRepository.delete(feedback);
			 Map<String,  Boolean> response = new HashMap<>();
			 response.put("deleted", Boolean.TRUE);
			 return ResponseEntity.ok(response);
		 }
		 
	}
	

