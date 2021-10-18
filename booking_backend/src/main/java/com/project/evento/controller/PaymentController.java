package com.project.evento.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.project.evento.model.Customer;
import com.project.evento.model.Event_planner;
import com.project.evento.model.Payment;
import com.project.evento.model.Promocode;
import com.project.evento.projectioninterface.PayemntInterface;
import com.project.evento.projectioninterface.PromoInterface;
import com.project.evento.repository.PaymentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class PaymentController {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	//get all payment details
	@GetMapping("/payments")
	public List<Payment> getAllBooking(){
		return paymentRepository.findAll();
	}
	
	//create payments rest api
	@PostMapping("/payments")
	public Payment createPayments(@RequestBody Payment pay) { //Jason request body directly map to payments object by @Request
		return paymentRepository.save(pay);
		
	}
		
	// get payment by id rest api
	@GetMapping("/payments/{paymentID}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable Long paymentID) {
		Payment pay = paymentRepository.findById(paymentID)
				.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + paymentID));
					
		return ResponseEntity.ok(pay);
		}
	
	 //get payments by customer id rest api
	@GetMapping("/payments/customerId")
	public ResponseEntity<List<Payment>> findBycustomerId(@RequestParam String customerId) {			
		return new ResponseEntity<List<Payment>>(paymentRepository.findBycustomerId(customerId), HttpStatus.OK);
		}
	
	
	
	// update payment rest api
	
		@PutMapping("/payments/{paymentID}")
		public ResponseEntity<Payment> updatePayment(@PathVariable Long paymentID, @RequestBody Payment paymentDetails){
			Payment pay = paymentRepository.findById(paymentID)
					.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + paymentID));
			
			pay.setCustomerName(paymentDetails.getCustomerName());
			pay.setPaymentDate(paymentDetails.getPaymentDate());
			pay.setStatus(paymentDetails.getStatus());
			
			Payment updatePayment = paymentRepository.save(pay);
			return ResponseEntity.ok(updatePayment);
		}
		
		
		// delete payment rest api
		@DeleteMapping("/payments/{paymentID}")
		public ResponseEntity<Map<String, Boolean>> deletePayment(@PathVariable Long paymentID){
			Payment pay = paymentRepository.findById(paymentID)
					.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + paymentID)); //if employee with given id not exist display this
			
			paymentRepository.delete(pay);//call delete method of payment repository
			Map<String, Boolean> response = new HashMap<>();
			response.put("Deleted", Boolean.TRUE); //Message to client that delete the record in postman
			return ResponseEntity.ok(response);
		}
		
		// search function
		@GetMapping("/payments/search/{keyword}")
		public ResponseEntity<List<Payment>> SearchPayments(@PathVariable String keyword) {
			List<Payment> listPayments= paymentRepository.findByPromoIDOrCustomerIdOrCustomerNameOrPaymentDateOrStatusOrPaymentMethodOrDescriptionOrAmount(keyword);
			if (!listPayments.isEmpty()) {
				return ResponseEntity.ok(listPayments);
			} else {
				
				return ResponseEntity.ok(null);
			}

		}
		
		//get Report1 Deails
		@GetMapping("/payments/report/one")
		public ResponseEntity<List<PayemntInterface>> getReportOne() {
		List<PayemntInterface> Payments_Promousage = paymentRepository.Payments_Promousage();
			return ResponseEntity.ok(Payments_Promousage);
		}
		
		//get Report2 Deails
		@GetMapping("/payments/report/two")
		public ResponseEntity<List<PromoInterface>> getReportTwo() {
		List<PromoInterface> Promousage = paymentRepository.Promousage();
			return ResponseEntity.ok(Promousage);
		}

		
		
		
		// get payment by customer id rest api
		/*@GetMapping("/payments/{customerId}")
		public ResponseEntity<Payment> getPaymentByCusId(@PathVariable Long customerId) {
			Payment pay = paymentRepository.findById(customerId)
					.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + customerId));
						
			return ResponseEntity.ok(pay);
			}*/
		
		//get all payment details
		/*@GetMapping("/payments/{customerId}")
		public List<Payment> getCusPaymentdetails(@PathVariable String customerId){
			Payment pay = paymentRepository.findById(customerId)
					.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + customerId));
			return paymentRepository.findAll(pay);*/
		}
		
	

