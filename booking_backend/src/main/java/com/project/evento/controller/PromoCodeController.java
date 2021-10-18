package com.project.evento.controller;

import java.util.HashMap;


import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Payment;
import com.project.evento.model.Promocode;
import com.project.evento.projectioninterface.PromoInterface;
import com.project.evento.repository.PromoCodeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class PromoCodeController {
	
	@Autowired
	private PromoCodeRepository promoCodeRepository;
	
	
	//get all promocodes
	
	@GetMapping("/promocodes") 

	public ResponseEntity<List<Promocode>> getAllPromos() {
	List<Promocode> Promos = promoCodeRepository.AllPromos();
		return ResponseEntity.ok(Promos);
	}
	
	//create promo rest api
		@PostMapping("/promocodes")
		public Promocode  AddPromocodes(@RequestBody Promocode promo) { //Jason request body directly map to payments object by @Request
			return promoCodeRepository.save(promo);
			
		}
			
		// get promo by id rest api
		@GetMapping("/promocodes/{promo_ID}")
		public ResponseEntity<Promocode> getPromocodeById(@PathVariable Long promo_ID) {
			Promocode promo = promoCodeRepository.findById(promo_ID)
					.orElseThrow(() -> new ResourceNotFoundException("Promocode not exist with id :" + promo_ID));
						
			return ResponseEntity.ok(promo);
			}
		
		// get promo by promocode rest api

		
		@GetMapping("/promocodes/code")
		public ResponseEntity<List<Promocode>> getPromoBycode(@RequestParam String code) {			
			return new ResponseEntity<List<Promocode>>(promoCodeRepository.findByCode(code), HttpStatus.OK);
			}
		
		
		
		// update promocode rest api
		
			@PutMapping("/promocodes/{promo_ID}")
			public ResponseEntity<Promocode> updatePromocode(@PathVariable Long promo_ID, @RequestBody Promocode promoDetails){
				Promocode promo = promoCodeRepository.findById(promo_ID)
						.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + promo_ID));
				
				promo.setAmount(promoDetails.getAmount());
				promo.setCode(promoDetails.getCode());
				promo.setCount(promoDetails.getCount());
				
				Promocode updatePromocode = promoCodeRepository.save(promo);
				return ResponseEntity.ok(updatePromocode);
			}
			
			
			// delete promocode rest api
			@DeleteMapping("/promocodes/{promo_ID}")
			public ResponseEntity<Map<String, Boolean>> deletePromocode(@PathVariable Long promo_ID){
				Promocode promo = promoCodeRepository.findById(promo_ID)
						.orElseThrow(() -> new ResourceNotFoundException("Payment not exist with id :" + promo_ID)); //if employee with given id not exist display this
				
				promoCodeRepository.delete(promo);//call delete method of payment repository
				Map<String, Boolean> response = new HashMap<>();
				response.put("Deleted", Boolean.TRUE); //Message to client that delete the record in postman
				return ResponseEntity.ok(response);
			}
			
			// search function
			@GetMapping("/promocodes/search/{keyword}")
			public ResponseEntity<List<Promocode>> SearchPromos(@PathVariable String keyword) {
				List<Promocode> listPromos= promoCodeRepository.findByCodeOrAmountOrCount(keyword);
				if (!listPromos.isEmpty()) {
					return ResponseEntity.ok(listPromos);
				} else {
					
					return ResponseEntity.ok(null);
				}

			}
	

}
