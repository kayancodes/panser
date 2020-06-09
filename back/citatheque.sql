DROP DATABASE IF EXISTS citatheque;
CREATE DATABASE citatheque;
USE citatheque;
SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE theme(
  id_theme INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fk_id_auteur INTEGER(11) NOT NULL,
  title VARCHAR(255),
  FOREIGN KEY(fk_id_auteur) REFERENCES auteur(id_auteur)
)
ENGINE=InnoDB;

CREATE TABLE citation(
  id_citation INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fk_id_auteur INTEGER(11) NOT NULL,
  texte VARCHAR(255),
  FOREIGN KEY(fk_id_auteur) REFERENCES auteur(id_auteur)
)
ENGINE=InnoDB;

CREATE TABLE theme_citation(
  fk_id_theme INTEGER(11) NOT NULL,
  fk_id_citation INTEGER(11) NOT NULL,
  id_theme_citation INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  FOREIGN KEY(fk_id_theme) REFERENCES theme(id_theme),
  FOREIGN KEY(fk_id_citation) REFERENCES citation(id_citation)
)
ENGINE=InnoDB;

CREATE TABLE auteur(
  id_auteur INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  pseudonyme VARCHAR(255) NOT NULL
)
ENGINE=InnoDB;

INSERT INTO auteur (mail, password, pseudonyme) VALUES('aaa@aaa.fr', '9834876dcfb05cb167a5c24953eba58c4ac89b1adf57f28f2f9d09af107ee8f0', 'yek')
