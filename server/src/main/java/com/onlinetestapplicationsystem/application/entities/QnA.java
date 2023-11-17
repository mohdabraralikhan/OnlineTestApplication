package com.onlinetestapplicationsystem.application.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import jakarta.persistence.GeneratedValue;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "QUESTIONS_AND_ANSWERS")
public class QnA {
    
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

     @Column(name="QUESTION")
     String question;
    
    @Column(name = "A")
    String a;
    @Column(name = "B")
    String b;
    @Column(name = "C")
    String c;
    @Column(name = "D")
    String d;
    @Column(name = "E")
    String e;
    @Column(name="ANSWER")
    String answer;
    
}
