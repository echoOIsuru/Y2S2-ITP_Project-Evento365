package com.project.evento.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Payment;
import com.project.evento.model.Promocode;
import com.project.evento.projectioninterface.PayemntInterface;
import com.project.evento.projectioninterface.PromoInterface;


@Repository

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	
	//get details by customer id
	List<Payment> findBycustomerId(String customerId);
	
	
	//searchbar
	@Query("select c from Payment c where c.promoID like concat('%',:keyword,'%') or c.customerId like concat('%',:keyword,'%') "
			+ "or c.customerName like concat('%',:keyword,'%') or c.paymentDate like concat('%',:keyword,'%') or  c.status like concat('%',:keyword,'%') "
			+ "or c.paymentMethod like concat('%',:keyword,'%') or c.description like concat('%',:keyword,'%') or c.amount like concat('%',:keyword,'%')")
	List<Payment> findByPromoIDOrCustomerIdOrCustomerNameOrPaymentDateOrStatusOrPaymentMethodOrDescriptionOrAmount(@Param("keyword") String keyword);

	//report part 2
	
	//@Query(value="SELECT c.code, COUNT(Customer_Id) FROM Payment_Details p, Promo_Code c Where p.promoID = c.promo_ID GROUP BY c.code" , nativeQuery=true)
	//public List <Payment> Payments_Promousage();
	
	//@Query(value="SELECT * FROM Payment_Details" , nativeQuery=true)
	//public List <Payment> Payments_Promousage();
	
	
	
	@Query(nativeQuery=true, value="SELECT p.Customer_Id AS Cusid, p.Customer_Name AS CustomerName, c.email AS Email, p.Payment_Method AS Method, "
								 + "sum(p.amount) AS Sumtotal, "
								 + "sum(e.amount) AS Distotal, (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100 AS DiscountPercent, 100 - (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100 AS Otherpercent "
								 + "FROM Payment_Details p, customer c, Promo_Code e "								 
								 + "WHERE p.status = 'Verified' and p.Customer_Id = c.id and e.promo_ID = p.promoID "
								 + "GROUP BY p.Customer_Id ORDER BY sum(p.amount) DESC LIMIT 10")
	
	//COUNT(p.promoID) AS Count,	
	
	public List <PayemntInterface> Payments_Promousage();
	
	//sum(e.amount), (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100 as 'DiscountPercent', 100 - (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100
	
	
	
//	SELECT p.Customer_Id,p.Customer_Name,p.Payment_Method,sum(p.amount),COUNT(p.promoID) as count, c.email
//	FROM Payment_details p, customer c
//	WHERE p.status = 'Verified' and p.Customer_Id = c.id
//	GROUP BY Customer_Id
//	ORDER BY p.amount DESC
//	LIMIT 10
	
	
	@Query(nativeQuery=true, value="SELECT c.code AS Code, COUNT(Customer_Id) AS Countpromo FROM  Payment_Details p, Promo_Code c "
								 + "Where p.promoID = c.promo_ID and c.promo_ID != 0 and p.status = 'Verified' "
								 + "GROUP BY c.code ORDER BY countpromo DESC")
	
	public List <PromoInterface> Promousage();

}
