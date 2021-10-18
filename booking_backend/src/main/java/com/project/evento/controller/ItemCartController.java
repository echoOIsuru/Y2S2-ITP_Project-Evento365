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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.RentalItem;
import com.project.evento.model.Booking;
import com.project.evento.model.ItemCart;
import com.project.evento.repository.ItemCartRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class ItemCartController {
	
	@Autowired
	private ItemCartRepository temporaryitemcartrepository;
	
	//get items
	@GetMapping("/temporaryitems")
	public List<ItemCart> getItems(){
		return temporaryitemcartrepository.findAll();
	}
	
//	//get items according to booking id
//	@GetMapping("/retrieveitems")
//	public List<ItemCart> retrieveItems(int booking_id){
//		return temporaryitemcartrepository.retrieveItems(booking_id);
//	}
	
	//create item rest api
	@PostMapping("/temporaryitems")
	public ItemCart createTemporaryItem(@RequestBody ItemCart temporaryitem) {
		return temporaryitemcartrepository.save(temporaryitem);
	}
	
	//get items according to booking id
	@GetMapping("/retrieveitems/{bookingid}")
	public ResponseEntity<List<ItemCart>> findAllSearch(@PathVariable Integer bookingid){
		List<ItemCart> result = temporaryitemcartrepository.retrieveItems(bookingid);
		//List<Booking> booking = null;
		return ResponseEntity.ok(result);
	}
	
	//get details to the report
		@GetMapping("/retrieveDetails")
		public ResponseEntity<List<ItemCart>> finditemstoreport(){
			List<ItemCart> result = temporaryitemcartrepository.retrieveDetails();
			return ResponseEntity.ok(result);
		}
	
	//remove items rest API
	@DeleteMapping("/temporaryitems/{rentalitemid}")
	public ResponseEntity<Map<String, Boolean>> removeItem(@PathVariable int rentalitemid){
		ItemCart temporaryitemcart = temporaryitemcartrepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		
		temporaryitemcartrepository.delete(temporaryitemcart);
		Map<String, Boolean> response = new HashMap<>(); 
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	//dulshan query
	@GetMapping("/rentalitems/getRentalOrderAdminReport")
	public int getFemaleCount() {
	return temporaryitemcartrepository.rentalOrderTotalAdminReport();
	}
	
	//30-sep
	//update available units
//	@PutMapping("/temporaryitems/{bookingid}")
//	public ResponseEntity<ItemCart> updatequantity(@PathVariable int bookingid, @RequestBody ItemCart itemcartupdt){
//				
//		ItemCart itemCart = temporaryitemcartrepository.abcd(bookingid);
//			
//		itemCart.setQuantity(itemcartupdt.getQuantity());
//		itemCart.setBookingid(itemcartupdt.getBookingid());
//		itemCart.setName(itemcartupdt.getName());
//		itemCart.setPrice(itemcartupdt.getPrice());
//			
//		ItemCart updatedItemCart = temporaryitemcartrepository.save(itemCart);
//				
//			return ResponseEntity.ok(updatedItemCart);
//				
//		}
	
//	//get items according to booking id
//		@GetMapping("/temporaryitems/{bookingid}/{name}")
//		public ResponseEntity<List<ItemCart>> retrieve(@PathVariable Integer bookingid,@PathVariable String name){
//			List<ItemCart> result = temporaryitemcartrepository.abcd(bookingid,name);
//			//List<Booking> booking = null;
//			return ResponseEntity.ok(result);
//		}
	
}
