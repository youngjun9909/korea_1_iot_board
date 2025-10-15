package com.korit.board_back.cotroller;

import org.springframework.web.bind.annotation.*;

@RestController
public class TestController {

  @GetMapping
  public String serverStatus() {
    return "VM server in Spring Boot";
  }
}
