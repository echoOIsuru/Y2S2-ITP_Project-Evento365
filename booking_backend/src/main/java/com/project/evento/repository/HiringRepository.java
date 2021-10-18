package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.EventaplannerReport;
import com.project.evento.model.Hiring;

@Repository
public interface HiringRepository extends JpaRepository<Hiring, Long> {
	@Query("select m from Hiring m where m.event_date not like %:date")
	public List <Hiring> finddate(@Param("date")String date);
	
	@Query("SELECT new com.project.evento.model.EventaplannerReport(e.name,e.img, h.event_planner, count(h.event_planner)) FROM Event_planner e, Hiring h WHERE  h.event_planner = e.event_planner_id  GROUP BY e.name,e.img, h.event_planner")
	public List<EventaplannerReport>findSummary();
	
}

 