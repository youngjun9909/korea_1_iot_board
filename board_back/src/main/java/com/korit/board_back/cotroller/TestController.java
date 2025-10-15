package com.korit.board_back.cotroller;

import com.korit.board_back.common.ApiMappingPattern;
import com.korit.board_back.dto.ResponseDto;
import com.korit.board_back.dto.test.ResponseTestDto;
import com.korit.board_back.service.TestService;
import jakarta.annotation.security.PermitAll;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(ApiMappingPattern.TEST)
@RequiredArgsConstructor
public class TestController {

  private final TestService testService;

  @GetMapping("/test")
  public ResponseEntity<ResponseDto<List<ResponseTestDto>>> getTest() {
    ResponseDto<List<ResponseTestDto>> response = testService.getTest();
    HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.FORBIDDEN;
    return ResponseEntity.status(status).body(response);
  }


  @GetMapping
  @PermitAll
  public String serverStatus() {
    return "VM server in Spring Boot";
  }
}
