package com.sharefields.sharefields.controller;

import com.sharefields.controller.QuadraController;

import com.sharefields.model.Quadra;
import com.sharefields.repository.QuadraRepository;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;

@WebMvcTest(controllers = QuadraController.class)
public class QuadraControllerTest {

    @Autowired
    private QuadraController quadraController;

    @MockBean
    private QuadraRepository quadraRepository;

    @BeforeEach
    public void setup(){
        standaloneSetup(this.quadraController);
    }

    List<Quadra> listadeQuadras = new ArrayList<>();

    @Test
    public void deveRetornarSucesso_QuandoBuscarTodasQuadras(){

        Mockito.when(this.quadraRepository.findAll()).thenReturn(this.listadeQuadras);

        given()
                    .accept(ContentType.JSON)
                .when()
                    .get("api/v1/quadra")
                .then()
                    .statusCode(HttpStatus.OK.value());
    }

    @Test
    public void deveRetornarSucesso_QuandoBuscarUmaQuadra(){
       Mockito.when(this.quadraRepository.findById(1L)).thenReturn(Optional.of(new Quadra()));

        given()
                .accept(ContentType.JSON)
                .when()
                .get("api/v1/quadra/{id}",1L)
                .then()
                .statusCode(HttpStatus.OK.value());
    }

    @Test
    public void deveRetornarNaoEncontrado_QuandoBuscarUmaQuadra(){
        Mockito.when(this.quadraRepository.findById(2L)).thenReturn(Optional.empty());

        given()
                .accept(ContentType.JSON)
                .when()
                .get("api/v1/quadra/{id}",2L)
                .then()
                .statusCode(HttpStatus.NOT_FOUND.value());
    }



}
