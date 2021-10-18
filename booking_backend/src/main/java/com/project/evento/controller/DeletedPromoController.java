package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.DeletedPromo;
import com.project.evento.model.Promocode;
import com.project.evento.repository.DeletedPromoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class DeletedPromoController {
	
	@Autowired
	private DeletedPromoRepository deletedPromoRepository;
	
	//get all promocodes
	
	@GetMapping("/deletedpromocodes") 
	
	public List<DeletedPromo> getAllDeletedPromos(){		
		return deletedPromoRepository.findAll();
	}
	
	// search function
	@GetMapping("/deletedpromocodes/search/{keyword}")
	public ResponseEntity<List<DeletedPromo>> SearchPromos(@PathVariable String keyword) {
		List<DeletedPromo> listDelPromos= deletedPromoRepository.findByCodeOrAmount(keyword);
		if (!listDelPromos.isEmpty()) {
			return ResponseEntity.ok(listDelPromos);
		} else {
			
			return ResponseEntity.ok(null);
		}

	}

}
