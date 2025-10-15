package com.korit.board_back.service;

import com.korit.board_back.common.ResponseMessage;
import com.korit.board_back.dto.ResponseDto;
import com.korit.board_back.dto.test.ResponseTestDto;
import com.korit.board_back.entity.Test;
import com.korit.board_back.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestService {

  private final TestRepository testRepository;

  public ResponseDto<List<ResponseTestDto>> getTest() {

    List<Test> tests;
    try {
      tests = testRepository.findAll();
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
    }

    // Test → ResponseTestDto 변환
    List<ResponseTestDto> responseList = tests.stream()
      .map(ResponseTestDto::new)
      .toList();

    return ResponseDto.setSuccess(ResponseMessage.SUCCESS, responseList);
  }
}
