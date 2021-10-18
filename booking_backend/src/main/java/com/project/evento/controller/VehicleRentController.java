package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.VehicleRent;
import com.project.evento.repository.VehicleRentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class VehicleRentController {
	
	@Autowired
	private VehicleRentRepository vehicleRentRepository;
	
	//get all vehicle rents
	
	@GetMapping("/vehicleRents")
	public List<VehicleRent> getAllVehicleRent(){
		return vehicleRentRepository.findAll();
	}
	
	// create add rent vehicles api
	@PostMapping("/vehicleRents")
	public VehicleRent createVRent(@RequestBody VehicleRent vehicleRent) {
		return vehicleRentRepository.save(vehicleRent);
	}
	
	//For Admin
	@GetMapping("/vehicleRents/vehicleRentCountAdminReport")
	public int vehicleRentCountAdmin(){
	return vehicleRentRepository.vehicleRentingCountAdminReport();
	}

}








