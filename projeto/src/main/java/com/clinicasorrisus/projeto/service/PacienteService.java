package com.clinicasorrisus.projeto.service;

import java.util.List;

import com.clinicasorrisus.projeto.service.dto.PacienteDTO;

public interface PacienteService {

	
	PacienteDTO  save (PacienteDTO pacienteDTO);
	
	List<PacienteDTO> findAll();
	
	PacienteDTO findOne(Long id);
}
