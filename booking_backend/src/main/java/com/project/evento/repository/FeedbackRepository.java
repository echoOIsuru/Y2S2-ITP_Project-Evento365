package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
