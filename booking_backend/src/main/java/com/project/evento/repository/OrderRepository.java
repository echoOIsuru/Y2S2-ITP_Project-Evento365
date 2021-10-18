package com.project.evento.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import com.project.evento.model.Order;

import com.project.evento.model.OrderReport2;




@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

	
//
//	@Query("SELECT new com.project.evento.model.OrderReport(order_id,date,cus_id,address,email,total,quantity,total_items,sum(total),sum(quantity) from orders where date between '2021-09-01' and '2021-09-30' order by cus_id ASC")
//	public List<OrderReport>findOrderReport(); 
//	
	
//	@Query("SELECT new com.project.evento.model.OrderReport(sum(total) from orders where date between '2021-09-01' and '2021-09-30' order by cus_id ASC")
//	public List<OrderReport>findOrderReport(); 
//	
//	
//	@Query("SELECT new com.project.evento.model.OrderReport(sum(quantity) from orders where date between '2021-09-01' and '2021-09-30' order by cus_id ASC")
//	public List<OrderReport>findOrderReport(); 
	
//	
//	@Query(value="SELECT order_id,date,cus_id,address,email,total,quantity,total_items from orders where datediff(now(),str_to_date(date,'%Y-%m-%d'))>10",nativeQuery=true)
//	public Long findTotalOrder();
	
	@Query("SELECT  new com.project.evento.model.OrderReport2(o.order_id,o.total,o.cus_id,o.total_items,o.quantity,o.address,o.email,o.date ) from Order o where "
			+ "datediff(now(),str_to_date(o.date,'%Y-%m-%d'))>10")
      public List< OrderReport2> findTotalOrder();
	
	@Query(value="SELECT sum(quantity) from orders where datediff(now(),str_to_date(date,'%Y-%m-%d'))>10",nativeQuery=true)
	public Long findNoOfItemsOrder();
	
	
	@Query(value="SELECT sum(total) from orders where datediff(now(),str_to_date(date,'%Y-%m-%d'))>10",nativeQuery=true)
	public Long findOrders();
	
	
	@Query(value="SELECT count(order_id) from orders where datediff(now(),str_to_date(date,'%Y-%m-%d'))>10",nativeQuery=true)
	public Long findCountOrders();
	
	
	@Query(value ="SELECT COUNT(order_id) from orders ", nativeQuery = true)
	public int storeOrderTotalAdminReport();
	

}







