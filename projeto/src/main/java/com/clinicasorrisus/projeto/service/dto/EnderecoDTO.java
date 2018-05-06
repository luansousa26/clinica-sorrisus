package com.clinicasorrisus.projeto.service.dto;

import java.io.Serializable;

public class EnderecoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Long id;
	private Long idPaciente;
	private String cep;
	private String logradouro;
	private String complemento;
	private String bairro;
	private String localidade;
	private String uf;
	private String unidade;
	private String ibge;
	private String gia;
	private String numero;
	
	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getIdPaciente() {
		return  this.idPaciente;
	}
	
	public void setIdPaciente(Long idPaciente){
		this.idPaciente = idPaciente;
	}
	
	public String getCep() {
		return this.cep;
	}
	
	public void setCep(String cep) {
		this.cep = cep;
	}
	
	public String getLogradouro() {
		return this.logradouro;
	}
	
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	
	public String getComplemento() {
		return this.complemento;
	}
	
	public void setComplemento(String complemento) {
	   this.complemento = complemento;	
	}
	
	public String getBairro() {
		return this.bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getLocalidade() {
		return this.localidade;
	}
	
	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}
	
	public String getUf() {
		return this.uf;
	}
	
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	public String getUnidade() {
		return this.unidade;
	}
	
	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}
	
	public String getIbge() {
		return this.ibge;
	}
	public void setIbge(String ibge) {
		this.ibge = ibge;
	}
    
	public String getGia() {
		return this.gia;
	}
	
	public void setGia(String gia) {
		this.gia = gia;
	}
	
	public String getNumero() {
		return this.numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}

	
	 @Override
	 public String toString() {
		 return "EnderecoDTO{"+
	     "id="+ getId() + 
	     ",idPaciente=" + getIdPaciente() + 
	     ",cep="+ getCep() +
	     ",logradouro="+ getLogradouro() +
	     ",complemento="+ getComplemento() + 
	     ",bairro="+ getBairro() +
	     ",localidade="+ getLocalidade() + 
	     ",uf=" + getUf() + 
	     ",unidade="+ getUnidade() +
	     ",ibge="+ getIbge() +
	     ",gia="+ getGia() +
	     ",numero="+ getNumero() +
	     "}";
	 }
	 
}
