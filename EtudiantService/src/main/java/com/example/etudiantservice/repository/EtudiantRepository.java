package com.example.etudiantservice.repository;

import com.example.etudiantservice.model.etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {
}
