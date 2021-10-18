package com.project.evento.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{

	Optional<Admin> findByUsernameAndPassword (String username, String password); 
	
	//List<Admin> findByNameOrEmailOrAddressOrNicOrBirthdayOrMobileOrGenderOrAdminType();
	@Query("select a from Admin a where a.name like concat('%',:keyword,'%') or a.email like concat('%',:keyword,'%') "
			+ "or a.address like concat('%',:keyword,'%') or a.nic like concat('%',:keyword,'%') or  a.birthday like concat('%',:keyword,'%') "
			+ "or a.mobile like concat('%',:keyword,'%') or a.gender like concat('%',:keyword,'%') or a.adminType like concat('%',:keyword,'%')")
	List<Admin> findByNameOrEmailOrAddressOrNicOrBirthdayOrMobileOrGenderOrAdminType(@Param("keyword") String keyword);
}

//