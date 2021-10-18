package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.ItemCart;

@Repository
public interface ItemCartRepository extends JpaRepository<ItemCart, Integer>{

	//retrieve items to the orderdetailcomponent
	@Query(value = "select rentalid,booking_id,item_name,sum(price)as price,sum(quantity) as quantity from item_cart where booking_id =:bookingid group by item_name", nativeQuery = true)
	public List<ItemCart> retrieveItems(@Param("bookingid") int bookingid);
	
	@Query(value = "select rentalid,booking_id,item_name,sum(price)as price,sum(quantity) as quantity from item_cart group by item_name", nativeQuery = true)
	public List<ItemCart> retrieveDetails();
	
	//dulshan query
	@Query(value ="SELECT COUNT(DISTINCT booking_id) FROM item_cart ", nativeQuery = true)
	public int rentalOrderTotalAdminReport();
	
	

//	//30-sep
//	@Modifying
//	@Query(value = "select * from item_cart where booking_id =:bookingid and name = =:name", nativeQuery = true)
//	public List<ItemCart> abcd(@Param("bookingid") int bookingid,@Param("name") String name);
	
	
}
