package com.korit.board_back.service;

import com.korit.board_back.common.ResponseMessage;
import com.korit.board_back.dto.ResponseDto;
import com.korit.board_back.dto.test.ResponseTestDto;
import com.korit.board_back.entity.Test;
import com.korit.board_back.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TestService {

  private final TestRepository testRepository;
  private final ObjectPostProcessor<Object> objectPostProcessor;

  public ResponseDto<ResponseTestDto> getTest() {
    ResponseTestDto data = null;

    try {
      Optional<Test> optionalTest = testRepository.findAll().stream().findFirst();
      data = new ResponseTestDto(optionalTest.get());
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
    }
    return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
  }
}
