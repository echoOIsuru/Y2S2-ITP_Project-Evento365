package com.project.evento.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.project.evento.model.confirmfood;

@Repository
public interface confirmfoodRepository extends JpaRepository<confirmfood, Long>{
	
	

}
