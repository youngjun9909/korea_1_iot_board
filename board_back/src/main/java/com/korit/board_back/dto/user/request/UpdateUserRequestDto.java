package com.korit.board_back.dto.user.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@Setter
public class UpdateUserRequestDto {

    private String email;

    private String name;

    private String phone;

}
