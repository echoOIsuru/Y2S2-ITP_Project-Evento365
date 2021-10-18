package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.DeletedPromo;

@Repository

public interface DeletedPromoRepository extends JpaRepository<DeletedPromo, Long> {
	
	@Query("select c from DeletedPromo c where c.code like concat('%',:keyword,'%') or c.amount like concat('%',:keyword,'%') ")
	List<DeletedPromo> findByCodeOrAmount(@Param("keyword") String keyword);

}
