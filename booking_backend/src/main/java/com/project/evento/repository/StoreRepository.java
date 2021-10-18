package com.project.evento.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Store;



@Repository
public interface StoreRepository extends JpaRepository<Store, Long>{
	/*
	@Query("select store from Store store where store.item_id=:searchText or store.item_title like %:item_title% or store.category like %:category% or store.colour like %:colour%" )
	public List<Store>findAllSearchStore(@Param("searchText") Long searchText, @Param("name") String name);
	
	*/
	
	
	@Query("select s from Store s where s.item_title like concat('%',:keyword,'%') or s.itemcategory like concat('%',:keyword,'%') or s.colour like concat('%',:keyword,'%') or s.availability like concat('%',:keyword,'%')")
			public List<Store> findByItemTitleOrCategoryOrColourOrAvailability(@Param("keyword") String keyword);
}



