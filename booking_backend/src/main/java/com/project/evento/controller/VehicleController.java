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
import com.project.evento.model.Vehicle;
import com.project.evento.model.VehicleReport;
import com.project.evento.repository.VehicleRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")  //rest API version
public class VehicleController {
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	// get all vehicles
	
	@GetMapping("vehicles")  //make URL path
	public List<Vehicle> getAllVehicles(){
		return vehicleRepository.findAll();
	}
	
	//create vehicle rest API
	@PostMapping("/vehicles")
	public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
		return vehicleRepository.save(vehicle);
	}
	
	// get vehicle by id rest API
	@GetMapping("/vehicles/{regNo}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long regNo) {
		Vehicle vehicle = vehicleRepository.findById(regNo)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + regNo));
		return ResponseEntity.ok(vehicle);
	}
	
	//update vehicle rest API
	
	@PutMapping("/vehicles/{regNo}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long regNo, @RequestBody Vehicle vehicleDetails){
		Vehicle vehicle = vehicleRepository.findById(regNo)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + regNo));

		vehicle.setFeatures(vehicleDetails.getFeatures());
		vehicle.setvBrand(vehicleDetails.getvBrand());
		vehicle.setvName(vehicleDetails.getvName());
		vehicle.setvType(vehicleDetails.getvType());
		vehicle.setSeat(vehicleDetails.getSeat());
		vehicle.setPrice(vehicleDetails.getPrice());
		vehicle.setDriver(vehicleDetails.getDriver());
		vehicle.setDriverTpNo(vehicleDetails.getDriverTpNo());
		vehicle.setvImage(vehicleDetails.getvImage());
		
		Vehicle updateVehicle = vehicleRepository.save(vehicle);
		return ResponseEntity.ok(updateVehicle);
	
	}
	
	//delete Vehicle rest API
	@DeleteMapping("/vehicles/{regNo}")
	public ResponseEntity <Map<String, Boolean>> deleteVehicle(@PathVariable Long regNo){
		Vehicle vehicle = vehicleRepository.findById(regNo)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + regNo));
		
		vehicleRepository.delete(vehicle);
		Map<String, Boolean> response = new HashMap<>();
		response.put("DELETED", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/available")
	public List<Vehicle> orderdVehicle(){
		return vehicleRepository.orderdVehicle();
		//return vehicleRentRepository.findAll();
	}
	
	// search function
	@GetMapping("/vehicles/search/{keyword}")
	public ResponseEntity<List<Vehicle>> SearchVehicle(@PathVariable String keyword) {
	List<Vehicle> listVehicle= vehicleRepository.findByVBrandOrVNameOrPrice(keyword);
		if (!listVehicle.isEmpty()) {
			return ResponseEntity.ok(listVehicle);
		} 
		else {
			return ResponseEntity.ok(null);
		} 
	}
	
	//Available for date
	@PostMapping("/availableVehicle/{date}")
	public ResponseEntity <List< Vehicle>> availableVehicle(@RequestParam String date) {	
     	List <Vehicle> availableV =vehicleRepository.findDate(date);		
  		return ResponseEntity.ok(availableV);
   }	
	
	//Maximum hired vehicle
	@GetMapping("/maxVehicle")
	public List<Vehicle> maxVehicle(){
		return vehicleRepository.maxVehicle();

	}
	
	//Total Vehicle income
	@GetMapping("/vehicleIncome")
	public int vehicleIncome(){
		return vehicleRepository.vehicleIncome();

	}
	
	//Vehicle Rent Summary
    @GetMapping("/vehicleSummary")
 	public ResponseEntity <List< VehicleReport>> getSummary(){
    	 List <VehicleReport> Vrenting =vehicleRepository.findSummary();				
    	return ResponseEntity.ok(Vrenting);
 	}
		
}