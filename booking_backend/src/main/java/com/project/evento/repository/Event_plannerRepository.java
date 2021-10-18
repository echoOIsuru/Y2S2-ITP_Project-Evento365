package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Event_planner;
import com.project.evento.model.Hiring;

@Repository
public interface Event_plannerRepository extends JpaRepository<Event_planner, Long> {
	
	//@Query("select DISTINCT e.* from event_plar m Hiring h where h.event_planner = m.event_planner_id")
	@Query(value="select DISTINCT * from event_planners where event_planner_id not in (select event_planner from hiring where event_date like %:date% )\r\n"
			+ "", nativeQuery=true)
	public List <Event_planner> finddate(@Param("date")String date);
	
	//Search
	@Query("select a from Event_planner a where a.name like concat('%',:keyword,'%') or a.skills like concat('%',:keyword,'%') ")
	public	List<Event_planner> findByNameOrSkills(@Param("keyword") String keyword);
	
}

