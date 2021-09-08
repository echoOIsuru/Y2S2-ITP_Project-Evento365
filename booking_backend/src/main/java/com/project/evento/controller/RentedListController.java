package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.RentedList;
import com.project.evento.repository.RentedListRepository;

@RestController
@RequestMapping("/api/v1")
public class RentedListController {

	@Autowired
	private  RentedListRepository rentedlistrepository;
	
	//get all rented lists
	@GetMapping("/rentedlists")
	public List<RentedList> getallrentedlists(){
		
		return rentedlistrepository.findAll();
	}
}
