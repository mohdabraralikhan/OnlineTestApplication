package com.onlinetestapplicationsystem.application.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.onlinetestapplicationsystem.application.repositories.QnARepository;

@Service
public class QnAService {
    
    
    QnARepository jpaRepository;

        
        public QnAService(QnARepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    public Page<Object[]> getQuestions( int numberOfQuestions) {
        int pageNumber = 0;
        Pageable pageable = PageRequest.of(pageNumber, numberOfQuestions);

        return this.jpaRepository.findRandomQuestionsAndOptionsAndIds(pageable);
    }

    public List<Object[]> getAnswers(List<Long> ids) {
        return this.jpaRepository.findAllAnswersByIdIn(ids);
    }
    

}
