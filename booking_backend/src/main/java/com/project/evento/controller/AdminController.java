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
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Admin;
import com.project.evento.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:3000" )
@RestController
@RequestMapping("/api/v1/")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;
	
	//get all admins 
	@GetMapping("/admin")
	public List<Admin> getAllAdmins(){
		return adminRepository.findAll();
	}
	
	//create admin rest api
	@PostMapping("/admin")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}
		
	//get admin by id rest api
	@GetMapping("/admin/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("Admin not exist with id :"+id));
		return ResponseEntity.ok(admin);
	}
		
	//update admin rest api
	@PutMapping("/admin/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable Long id,@RequestBody Admin adminDetails){
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("Admin not exist with id :"+id));
		admin.setName(adminDetails.getName());
		admin.setAddress(adminDetails.getAddress());
		admin.setNic(adminDetails.getNic());
		admin.setUsername(adminDetails.getUsername());
		admin.setPassword(adminDetails.getPassword());
		admin.setBirthday(adminDetails.getBirthday());
		admin.setMobile(adminDetails.getMobile());
		admin.setReg_date(adminDetails.getReg_date());
		admin.setEmail(adminDetails.getEmail());
		admin.setImage(adminDetails.getImage());
		admin.setAdmin_type(adminDetails.getAdmin_type());
		admin.setSec_ques_no(adminDetails.getSec_ques_no());
		admin.setSec_ques_answer(adminDetails.getSec_ques_answer());
		admin.setGender(adminDetails.getGender());
		
		Admin updatedAdmin = adminRepository.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}
	
	//delete admin rest api
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable Long id){
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() ->new ResourceNotFoundException("Admin not exist with id :"+id));
		
		adminRepository.delete(admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
