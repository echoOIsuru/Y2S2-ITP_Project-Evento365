package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.evento.model.DeletedLocation;


public interface DeleteLocationRepository extends JpaRepository<DeletedLocation, Long> {

	@Query(value="select * from deletedlocation where location_id = :value",nativeQuery=true)
	public DeletedLocation getDeleteLocation(@Param("value") Long value);
	
}
