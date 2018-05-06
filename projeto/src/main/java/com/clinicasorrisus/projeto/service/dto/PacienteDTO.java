package com.clinicasorrisus.projeto.service.dto;

import java.io.Serializable;
import java.time.LocalDate;

public class PacienteDTO implements Serializable {

	 private static final long serialVersionUID = 1L;
	 private Long id;
	 private String nomeCompleto;
	 private LocalDate dataNascimento;
	 private String sexo;
	 private String cpf;
	 private EnderecoDTO endereco;
	 private DadosClinicosDTO dadosClinicos;
	 private String telefoneResidencial;
	 private String celular;
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
    
	 public EnderecoDTO getEndereco() {
		 return this.endereco;
	 }
	 
	 public void setEndereco(EnderecoDTO endereco) {
		 this.endereco = endereco;
	 }
	 
	 public DadosClinicosDTO getDadosClinicos() {
		 return this.dadosClinicos;
	 }
	 
	 public void getDadosClinicos(DadosClinicosDTO dadosClinicos) {
		 this.dadosClinicos = dadosClinicos;
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
	     ",dataNascimento='"+ getDataNascimento()+"'" +// para ficar '2008-11-10'
	     ",sexo="+ getSexo() +
	     ",cpf="+ getCpf() + 
	     ",endereco="+ getEndereco() +
	     ",dadosClinicos="+ getDadosClinicos() + 
	     ",telefoneResidencial=" + getTelefoneResidencial() + 
	     ",celular="+ getCelular() +
	     ",email="+ getEmail() +
	     "}";
	 }
	 
	 
}
