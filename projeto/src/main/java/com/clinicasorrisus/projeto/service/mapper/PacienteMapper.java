package com.clinicasorrisus.projeto.service.mapper;
import com.clinicasorrisus.projeto.service.dto.PacienteDTO;

import com.clinicasorrisus.projeto.domain.Paciente;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PacienteMapper extends EntityMapper<PacienteDTO , Paciente> {
	
	PacienteDTO toDto(Paciente paciente);
    Paciente toEntity(PacienteDTO pacienteDTO);

    default Paciente fromId(Long id) {
        if (id == null) {
            return null;
        }
        Paciente paciente = new Paciente();
        paciente.setId(id);
        return paciente;
    }
}
