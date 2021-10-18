package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.project.evento.model.Booking;
import com.project.evento.model.food;




@Repository
public interface foodrepository extends JpaRepository<food, Long>{

	//get food categories related to the category id
	@Query(value = "select * from food where foodcategoryid like %:value%" ,nativeQuery = true)
	public List<food> retrievefood2(@Param("value") String value);
	
	
	//search for admin interface
	@Query("select f from food f where f.foodcategory like concat('%',:fvalue,'%') or f.foodcategoryid like concat('%',:fvalue,'%')" )
	public List<food>findByFoodcategoryOrFoodcategoryid(@Param("fvalue") String fvalue);
	
	
}
