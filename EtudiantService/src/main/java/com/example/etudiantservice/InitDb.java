package com.example.etudiantservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;

@Component
public class InitDb implements CommandLineRunner {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Création et initialisation de la base de données");

        String sqlStatments[] = {
                "DROP table etudiant if exists",
                "CREATE table etudiant(id serial,nom varchar(100),auteur varchar(100))",
                "INSERT into etudiant (nom,prenom) VALUES('achraf','okh');",
                "INSERT into etudiant (nom,prenom) VALUES('kevin','kol');",
                "INSERT into etudiant (nom,prenom) VALUES('alex','tres');",
                "INSERT into etudiant (nom,prenom) VALUES('chris','ties');",
                "INSERT into etudiant (nom,prenom) VALUES('ahmet','kader');"
        };

        Arrays.asList(sqlStatments).stream().forEach(sql -> {
            System.out.println(sql);
            jdbcTemplate.execute(sql);
        });

        System.out.println("Afficher de touts les etudiants existants");

        jdbcTemplate.query("SELECT * FROM etudiant",
                new RowMapper<Object>() {
                    @Override
                    public Object mapRow(ResultSet etudiant, int rowNum) throws SQLException {
                        System.out.println(etudiant.toString());
                        return null;
                    }
                });
    }
}
