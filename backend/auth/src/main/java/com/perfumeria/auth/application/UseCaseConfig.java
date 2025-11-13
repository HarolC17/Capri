package com.perfumeria.auth.application;

import com.perfumeria.auth.domain.model.gateway.EncrypterGateway;
import com.perfumeria.auth.domain.model.gateway.UsuarioGateway;
import com.perfumeria.auth.domain.usecase.UsuarioUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UseCaseConfig {

    @Bean
    public UsuarioUseCase usuarioUseCase(UsuarioGateway usuarioGateway, EncrypterGateway encrypterGateway) {
        return new UsuarioUseCase(usuarioGateway, encrypterGateway);
    }

}
