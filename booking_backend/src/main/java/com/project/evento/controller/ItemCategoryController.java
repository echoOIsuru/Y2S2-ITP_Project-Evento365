package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.Store;
import com.project.evento.repository.ItemCategoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ItemCategoryController {
	
	@Autowired
	private ItemCategoryRepository itemcategoryrepository;

		//get items by category name
	@GetMapping("/retrieveStores/{itemcategory}")
					public ResponseEntity<List<Store>> findAllSearch(@PathVariable String itemcategory){
						List<Store> result= itemcategoryrepository.retrieveStores(itemcategory);
						return ResponseEntity.ok(result);
					}
		
	
}
	