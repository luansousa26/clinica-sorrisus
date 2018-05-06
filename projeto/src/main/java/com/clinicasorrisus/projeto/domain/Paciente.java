package com.clinicasorrisus.projeto.domain;


import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;


@Entity
@Table(name = "TB_PACIENTE")
public class Paciente implements Serializable {
		 
	
	     private static final long serialVersionUID = 1L;
		 
	     @Id
		 private Long id;
	     
	     @Column(name = "NM_COMPLETO", nullable = false)
		 private String nomeCompleto;
	     
	     @Column(name="DT_NASCIMENTO", nullable = false)
		 private LocalDate dataNascimento;
		 
		 @Column(name="FLAG_SEXO", length = 1, nullable = false)
		 private String sexo;
		 
		 @Column(name="CPF", nullable= false)
		 private String cpf;
		 		 
		 @Column(name="TL_RESIDENCIAL")
		 private String telefoneResidencial;
		 
		 @Column(name="TL_CELULAR")
		 private String celular;
		 
		 @Column(name="CT_EMAIL")
		 private String email;
		 
		 public Long getId() {
			 return this.id;
		 }
		 
		 public void setId(Long id) {
			 this.id = id;
		 }
		 
		 public String  getNomeCompleto() {
			 return this.nomeCompleto;
		 }
		 
		 public void setNomeCompleto(String nomeCompleto) {
			 this.nomeCompleto = nomeCompleto;
		 }
		 
		 public LocalDate getDataNascimento() {
			 return this.dataNascimento;
		 }
		 
		 public void setDataNascimento(LocalDate dataNascimento) {
			 this.dataNascimento = dataNascimento;
		 }
		 
		 public String getSexo() {
			 return this.sexo;
		 }
		 
		 public void setSexo(String sexo) {
			 this.sexo = sexo;
		 }
		 
		 public String getCpf() {
			 return this.cpf;
		 }
		 public void setCpf(String cpf) {
			 this.cpf = cpf;
		 }
	    
		 public String getTelefoneResidencial() {
			 return this.telefoneResidencial;
		 }
		 
		 public void setTelefoneResidencial(String telefoneResidencial) {
			 this.telefoneResidencial = telefoneResidencial;
		 }
		 
		 public String getCelular() {
			 return this.celular;
		 }
		 public void setCelular(String celular) {
			 this.celular = celular;
		 }
		 
		 public String getEmail() {
			 return this.email;
		 }
		 
		 public void setEmail(String email) {
			 this.email = email;
		 }
		 
		 @Override
		 public String toString() {
			 return "PacienteDTO{"+
		     "id="+ getId() + 
		     ",nomeCompleto=" + getNomeCompleto() + 
		     ",dataNascimento='"+ getDataNascimento()+"'" +
		     ",sexo="+ getSexo() +
		     ",cpf="+ getCpf() +
		     ",telefoneResidencial=" + getTelefoneResidencial() + 
		     ",celular="+ getCelular() +
		     ",email="+ getEmail() +
		     "}";
		 }
		 
		 
	}
