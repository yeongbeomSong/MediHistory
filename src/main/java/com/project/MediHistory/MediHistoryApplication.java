package com.project.MediHistory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@SpringBootApplication
public class MediHistoryApplication {
	public static void main(String[] args){
		SpringApplication.run(MediHistoryApplication.class, args);
	}
}
