package com.clinicasorrisus.projeto.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.clinicasorrisus.projeto.domain.Paciente;
import com.clinicasorrisus.projeto.repository.PacienteRepository;
import com.clinicasorrisus.projeto.service.PacienteService;
import com.clinicasorrisus.projeto.service.dto.PacienteDTO;
import com.clinicasorrisus.projeto.service.mapper.PacienteMapper;

public class PacienteServiceImpl implements PacienteService {
	
	@Autowired
	PacienteRepository pacienteRepository;
	
	@Autowired
	PacienteMapper pacienteMapper;
	
    public PacienteServiceImpl(PacienteRepository pacienteRepository, PacienteMapper pacienteMapper) {
	        this.pacienteRepository = pacienteRepository;
	        this.pacienteMapper = pacienteMapper;
	  }
	  
	@Override
	public PacienteDTO save(PacienteDTO pacienteDTO) {
		
		Paciente paciente = pacienteMapper.toEntity(pacienteDTO);
		paciente = pacienteRepository.save(paciente);
		return pacienteMapper.toDto(paciente);
	}

	@Override
	public List<PacienteDTO> findAll() {
		
		return pacienteRepository.findAll()
				.stream()
				.map(pacienteMapper :: toDto)
				.collect(Collectors.toCollection(LinkedList :: new))
				;
	}

	@Override
	public PacienteDTO findOne(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
