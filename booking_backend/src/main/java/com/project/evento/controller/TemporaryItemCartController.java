package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.TemporaryItemCart;
import com.project.evento.repository.TemporaryItemCartRepository;

@RestController
@RequestMapping("/api/v1")
public class TemporaryItemCartController {
	
	@Autowired
	private TemporaryItemCartRepository temporaryitemcartrepository;
	
	//get items
	public List<TemporaryItemCart> getItems(){
		
		return temporaryitemcartrepository.findAll();
	}
}
