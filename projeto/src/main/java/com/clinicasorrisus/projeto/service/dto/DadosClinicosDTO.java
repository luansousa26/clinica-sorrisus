package com.clinicasorrisus.projeto.service.dto;

import java.io.Serializable;

public class DadosClinicosDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	private Long id;
	private Long idPaciente;
	private String convenio;
	private String alergia;
    private String sensibilidade;
    private String medicamento;
    private String problemaSaude;
    private String flagAntibiotico;
    private String flagAnalgesico;
    private String flagPressao;
    private String flagMedicamento;
    private String flagProblemaSaude;
    
    public Long getId() {
    	return this.id;
    }
    
    public void setId(Long id) {
    	this.id = id;
    }
    
    public Long getIdPaciente() {
    	return this.idPaciente;
    }
    
    public void setIdPaciente(Long idPaciente) {
    	this.idPaciente = idPaciente;
    }
    
    public String getConvenio() {
    	return this.convenio;
    }
    
    public void setConvenio(String convenio) {
    	this.convenio = convenio;
    }
    
    public String getAlergia() {
    	return this.alergia;
    }
    
    public void setAlergia(String alergia) {
    	this.alergia = alergia;
    }
    
    public String getSensibilidade() {
    	return this.sensibilidade;
    }
    
    public void setSensibilidade(String sensibilidade){
    	this.sensibilidade = sensibilidade;
    }
    
    public String getMedicamento() {
    	return this.medicamento;
    }
    
    public void setMedicamento(String medicamento) {
    	this.medicamento = medicamento;
    }
    
    public String getProblemaSaude() {
    	return this.problemaSaude;
    }
    
    public void setProblemaSaude(String problemaSaude) {
    	this.problemaSaude = problemaSaude;
    }
    
    public String getFlagAntibiotico() {
    	return this.flagAntibiotico;
    }
    
    public void setFlagAntibiotico(String flagAntibiotico) {
    	this.flagAnalgesico = flagAntibiotico;
    }
    
    public String getFlagAnalgesico() {
    	return this.flagAnalgesico;
    }
    
    public void setFlagAnalgesico(String flagAnalgesico) {
    	this.flagAnalgesico = flagAnalgesico;
    }
    
    public String getFlagPressao() {
    	return this.flagPressao;
    }
    
    public void setFlagPressao(String flagPressao) {
    	this.flagPressao = flagPressao;
    }
    
    public String getFlagMedicamento() {
    	return this.flagMedicamento;
    }
    
    public void setFlagMedicamento(String flagMedicamento) {
    	this.flagMedicamento = flagMedicamento;
    }
    
    public String getFlagProblemaSaude() {
    	return this.flagProblemaSaude;
    }
    
    public void setFlagProblemaSaude(String flagProblemaSaude) {
    	this.flagProblemaSaude = flagProblemaSaude;
    }
    

	 @Override
	 public String toString() {
		 return "DadosClinicosDTO{"+
	     "id="+ getId() + 
	     ",idPaciente=" + getIdPaciente() + 
	     ",convenio="+ getConvenio() +
	     ",alergia="+ getAlergia() +
	     ",sensibilidade="+ getSensibilidade() + 
	     ",medicamento="+ getMedicamento() +
	     ",problemaSaude="+ getProblemaSaude() + 
	     ",flagAntibiotico=" + getFlagAntibiotico() + 
	     ",flagAnalgesico="+ getFlagAnalgesico() +
	     ",flagPressao="+ getFlagPressao() +
	     ",flagMedicamento="+ getFlagMedicamento() +
	     ",flagProblemaSaude="+ getFlagProblemaSaude() +
	     "}";
	 }
}
