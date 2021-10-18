package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.bookFood;
import com.project.evento.model.food;
import com.project.evento.model.foodreport;
import com.project.evento.model.foodreport1;
import com.project.evento.model.foodreport2;

@Repository
public interface bookFoodRepository extends JpaRepository<bookFood, Long> {
	
	@Query(value = "select * from food where order_food_id=:value" ,nativeQuery = true)
	public List<food> retrievefood2(@Param("value") Long value);
	
	//get confirm food categories related to the booking id
		@Query(value = "select fimage,order_food_id,booking_id,cost,food_package_id,food_package_name,sum(count) as count,sum(total) as total from book_foods where booking_id like %:value% group by food_package_name" ,nativeQuery = true)
		public List<bookFood> retrieveconfirmfood(@Param("value") String value);
		
		
	//report
		@Query("SELECT new com.project.evento.model.foodreport(e.fimage,a.food_package_name,a.food_package_id, count(a.food_package_name)) FROM bookFood a, food e WHERE  a.food_package_name = e.foodcategory  GROUP BY e.fimage,a.food_package_name,a.food_package_id")
		public List<foodreport> findRSummary();


//		@Query("SELECT new com.project.evento.model.foodreport1(food_package_name , food_package_id , count(food_package_name) as no_of_orders) FROM bookFood GROUP BY food_package_name HAVING COUNT(food_package_name)=(SELECT max(y.no_of_orders) as maximum_orders FROM (select count(a.food_package_name) as no_of_orders from bookFood a, food e where a.food_package_name = e.foodcategory group by a.food_package_name) y)")
//		public List<foodreport1> findRoneSummary();
		
	//report1
		@Query("SELECT new com.project.evento.model.foodreport1(sum(total)) FROM bookFood")
		public List<foodreport1> findfoodtotalincom();
	
	
		//report2
		@Query("SELECT new com.project.evento.model.foodreport2(count(order_food_id)) FROM com.project.evento.model.bookFood")
		public List<foodreport2> findfoodnooforders();
		
		@Query(value ="SELECT COUNT(DISTINCT booking_id) FROM book_foods ", nativeQuery = true)
		public int foodOrderTotalAdminReport();

}
