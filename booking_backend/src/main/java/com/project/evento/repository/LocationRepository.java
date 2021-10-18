package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.project.evento.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{
	
	@Query("select l from Location l where l.location_id=:searchText or l.locationPrice like :name% or l.locationName like :name%")
	public List<Location>findAllSearchLocation(@Param("searchText") Long searchText, @Param("name") String name);
	
	@Query("select l from Location l where l.location_id=:searchText or l.locationPrice >= :searchText or l.locationPrice like %:name%")
	public List<Location>findAllSearchMax(@Param("searchText") Long searchText, @Param("name") String name);
	
	@Query("select l from Location l where l.location_id=:searchText or l.locationPrice <= :searchText or l.locationPrice like %:name%")
	public List<Location>findAllSearchMin(@Param("searchText") Long searchText, @Param("name") String name);
	
	//public List<Location>findBylocationPriceGreaterThanEqual(String locationPrice);
}

