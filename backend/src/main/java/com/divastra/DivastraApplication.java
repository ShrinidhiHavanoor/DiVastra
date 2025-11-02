package com.divastra;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
public class DivastraApplication {

	@Value("${stripe.secret}")
	private String stripeSecret;

	public static void main(String[] args) {
		SpringApplication.run(DivastraApplication.class, args);

	}

	@PostConstruct
	public void init(){
		Stripe.apiKey = this.stripeSecret;
	}




}
