package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.ItemRent;
import com.project.evento.repository.ItemRentRepository;

@RestController
@RequestMapping("/api/v1")
public class ItemRentController {

	@Autowired
	private ItemRentRepository itemrentrepository;
	
	//get all item rents
	@GetMapping("/itemrents")
	public List<ItemRent> getAllItemRents(){
		
		return itemrentrepository.findAll();
	}
}
