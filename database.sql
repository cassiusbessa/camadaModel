CREATE DATABASE IF NOT EXISTS exercicioCamadaModel;
USE exercicioCamadaModel;
CREATE TABLE persons (
    id INT unsigned NOT NULL auto_increment,
    firtName VARCHAR(20) NOT NULL,
		lastName VARCHAR(20) NOT NULL,
		email VARCHAR(20) NOT NULL,
    password VARCHAR(40) NOT NULL,
    CONSTRAINT pk_persons PRIMARY KEY (id)
);

