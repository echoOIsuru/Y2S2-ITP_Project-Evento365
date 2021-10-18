//package com.project.evento.repository;

//public interface ItemCategoryRepository {

//}









package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Store;



	
	@Repository
	public interface ItemCategoryRepository extends JpaRepository<Store,String>{
		

  @Query(value= "select * from store where itemcategory=:birthday",nativeQuery=true)
		public  List<Store>retrieveStores(@Param("birthday") String itemcategory); 
}

