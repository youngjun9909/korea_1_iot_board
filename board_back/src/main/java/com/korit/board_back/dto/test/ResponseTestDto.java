package com.korit.board_back.dto.test;

import com.korit.board_back.entity.Test;
import lombok.Data;

@Data
public class ResponseTestDto {
  private Long id;

  private String text;

  public ResponseTestDto(Test test) {
    this.id = test.getId();
    this.text = test.getText();
  }

}
