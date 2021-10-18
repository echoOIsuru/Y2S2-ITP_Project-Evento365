package com.project.evento.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import com.project.evento.model.Store;
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
import com.project.evento.repository.StoreRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StoreController {

	@Autowired
	private StoreRepository storeRepository;
	
	//get all event items
	@GetMapping("/stores")
	public List<Store> getAllStore(){
		return storeRepository.findAll();
	}



	//create store item
	@PostMapping("/stores")
	public Store createStore(@RequestBody Store store) {
		return storeRepository.save(store);
	}
	
	//get store item by id
	@GetMapping("/stores/{id}")
	
	public ResponseEntity<Store> getStoreByID(@PathVariable Long id) {
		Store store = storeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found store item : "+id));
		return ResponseEntity.ok(store);
	}

	//update booking rest API
	@PutMapping("/stores/{id}")
	public ResponseEntity<Store> updateStore(@PathVariable Long id, @RequestBody Store storeDe){
		Store store = storeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found store item : "+id));
		
		store.setItem_title(storeDe.getItem_title());
		store.setDescription(storeDe.getDescription());
		store.setItemcategory(storeDe.getItemcategory());
		store.setColour(storeDe.getColour());
		
		store.setAdditional(storeDe.getAdditional());
		store.setPrice(storeDe.getPrice());	
		store.setAvailability(storeDe.getAvailability());
	    store.setImg_url(storeDe.getImg_url());
		
		Store updatedStore = storeRepository.save(store);
		return ResponseEntity.ok(updatedStore);
	}
	

//delete store rest API
	@DeleteMapping("/stores/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStore(@PathVariable Long id){
		Store store = storeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Store Item not exist with id :" + id));
		
		storeRepository.delete(store);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	//search items
		@GetMapping("/store/search/{keyword}")
		public ResponseEntity<List<Store>> loginValidate(@PathVariable String keyword) {
		List<Store> listStore= storeRepository.findByItemTitleOrCategoryOrColourOrAvailability(keyword);
		if (!listStore.isEmpty()) {
		return ResponseEntity.ok(listStore);
		} else {
		List<Store> listStoreEmpty = List.of(new Store());
		return ResponseEntity.ok(listStoreEmpty);
		}
		}
		
		
		
		
}
