package com.clinicasorrisus.projeto.web.rest;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import com.clinicasorrisus.projeto.service.PacienteService;
import com.clinicasorrisus.projeto.service.dto.PacienteDTO;
import com.codahale.metrics.annotation.Timed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;



@RestController
@RequestMapping("/pacientes")
public class PacienteResource {
	
	  private final PacienteService pacienteService;
	  
	 public PacienteResource(PacienteService pacienteService) {
		 this.pacienteService = pacienteService;
	 }
	 
	@PostMapping()
	@Timed
	public ResponseEntity<PacienteDTO> criar(@Valid @RequestBody PacienteDTO pacienteDTO) throws URISyntaxException {
		return ResponseEntity.ok().body(pacienteService.save(pacienteDTO));
	}
	
	@GetMapping()
	@Timed
	public ResponseEntity<List<PacienteDTO>> getTodosPacientes() {
		return ResponseEntity.ok().body(pacienteService.findAll());
	}
	
	@PutMapping()
	@Timed
	public ResponseEntity<PacienteDTO> atualizar(@Valid @RequestBody PacienteDTO pacienteDTO) throws URISyntaxException {
		
		if(pacienteDTO.getId() == null) {
			return criar(pacienteDTO);
		}
		
		return ResponseEntity.ok().body(pacienteService.save(pacienteDTO));
	}

}
