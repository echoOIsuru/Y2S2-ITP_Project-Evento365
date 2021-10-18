package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import com.project.evento.dto.GetByEmailDto;
import com.project.evento.dto.LoginValidationDto;
import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Admin;
import com.project.evento.model.Customer;
import com.project.evento.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;

	// get all customers
	@GetMapping("/customer")
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	// create customer rest api
	@PostMapping("/customer")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}

	// get customer by id rest api
	@GetMapping("/customer/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		return ResponseEntity.ok(customer);
	}

	// update customer rest api
	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		customer.setName(customerDetails.getName());
		customer.setAddress(customerDetails.getAddress());
		customer.setNic(customerDetails.getNic());
		customer.setUsername(customerDetails.getUsername());
		customer.setPassword(customerDetails.getPassword());
		customer.setBirthday(customerDetails.getBirthday());
		customer.setMobile(customerDetails.getMobile());
		customer.setReg_date(customerDetails.getReg_date());
		customer.setEmail(customerDetails.getEmail());
		customer.setImage(customerDetails.getImage());
		customer.setSec_ques_no(customerDetails.getSec_ques_no());
		customer.setSec_ques_answer(customerDetails.getSec_ques_answer());
		customer.setGender(customerDetails.getGender());

		Customer updatedCustomer = customerRepository.save(customer);
		return ResponseEntity.ok(updatedCustomer);
	}

	// delete customer rest api
	@DeleteMapping("/customer/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));

		customerRepository.delete(customer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// validate username and password
	@PostMapping("/customer/loginValidate")
	public ResponseEntity<Optional<Customer>> loginValidate(@RequestBody LoginValidationDto loginvalidationdto) {
		Optional<Customer> optCustomer = customerRepository.findByUsernameAndPassword(loginvalidationdto.getUsername(),
				loginvalidationdto.getPassword());
		if (optCustomer.isPresent()) {
			return ResponseEntity.ok(optCustomer);
		} else {
			Optional<Customer> optCustomerEmpty = Optional.of(new Customer());
			return ResponseEntity.ok(optCustomerEmpty);
		}

	}

	// get by email
	@PostMapping("/customer/checkEmail")
	public ResponseEntity<Optional<Customer>> getByEmail(@RequestBody GetByEmailDto getbyemaildto) {
		Optional<Customer> optCustomer = customerRepository.findByEmail(getbyemaildto.getEmail());
		if (optCustomer.isPresent()) {
			return ResponseEntity.ok(optCustomer);
		} else {
			Optional<Customer> optCustomerEmpty = Optional.of(new Customer());
			return ResponseEntity.ok(optCustomerEmpty);
		}
	}

	// search function
	@GetMapping("/customer/search/{keyword}")
	public ResponseEntity<List<Customer>> loginValidate(@PathVariable String keyword) {
		List<Customer> listCustomer = customerRepository
				.findByNameOrEmailOrAddressOrNicOrBirthdayOrMobileOrGenderOrCustomerType(keyword);
		if (!listCustomer.isEmpty()) {
			return ResponseEntity.ok(listCustomer);
		} else {

			return ResponseEntity.ok(null);
		}

	}

	@GetMapping("/customer/getMaleCountAdminReport")
	public int getMaleCount() {
		return customerRepository.customerGenderMaleCount();
	}
	
	@GetMapping("/customer/getFemaleCountAdminReport")
	public int getFemaleCount() {
		return customerRepository.customerGenderFemaleCount();
	}

}
