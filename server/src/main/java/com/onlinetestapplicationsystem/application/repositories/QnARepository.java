package com.onlinetestapplicationsystem.application.repositories;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.onlinetestapplicationsystem.application.entities.QnA;


public interface QnARepository extends JpaRepository<QnA, Long> {
 
    @Query(value = "SELECT q.ID,q.QUESTION,q.A,q.B,q.C,q.D,q.E FROM QUESTIONS_AND_ANSWERS q Order By RAND()",nativeQuery=true)
    Page<Object[]> findRandomQuestionsAndOptionsAndIds(Pageable pageable);

@Query(value = "SELECT q.ID,q.ANSWER FROM QUESTIONS_AND_ANSWERS q WHERE q.ID IN :ids", nativeQuery = true)
List<Object[]> findAllAnswersByIdIn(@Param("ids") List<Long> ids);
}
