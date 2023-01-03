package com.example.etudiantservice.controller;

import com.example.etudiantservice.model.Etudiant;
import com.example.etudiantservice.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("Etudiant")
@CrossOrigin()
public class EtudiantController {

    private final EtudiantRepository etudiantRepository;

    @Value("${me}")
    private String me;

    @Autowired
    public EtudiantController(EtudiantRepository etudiantRepository) {
        super();
        this.etudiantRepository = etudiantRepository;
    }

    @GetMapping("/qui")
    public String getName(){
        return  me;
    }

    @PostMapping()
    public Etudiant create(@RequestBody Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @GetMapping()
    public List<Etudiant> findAll() {
        return etudiantRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Etudiant> find(@PathVariable("id") int id) {
        return etudiantRepository.findById(id);
    }

    @PutMapping()
    public Etudiant update(@RequestBody Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") int id) {
        etudiantRepository.deleteById(id);
    }
}
