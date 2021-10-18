package com.project.evento.repository;



import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Promocode;
import com.project.evento.projectioninterface.PromoInterface;

@Repository

public interface PromoCodeRepository extends JpaRepository<Promocode, Long> {
	
	List<Promocode> findByCode(String code);

	@Query("select c from Promocode c where c.code like concat('%',:keyword,'%') or c.amount like concat('%',:keyword,'%') "
			+ "or c.count like concat('%',:keyword,'%')")
	List<Promocode> findByCodeOrAmountOrCount(@Param("keyword") String keyword);
	
	@Query(nativeQuery=true, value="SELECT * FROM  Promo_Code  "
			 						+ "Where promo_ID != 0")

	public List <Promocode> AllPromos();
	
	


}

