package com.korit.board_back.dto.article.response;

import com.korit.board_back.dto.comment.response.CommentResponseDto;
import com.korit.board_back.entity.Article;

import java.util.List;
import java.util.stream.Collectors;

public class ArticleResponseDto {
    private String title;

    private String content;

    private Long authorId;

    private List<CommentResponseDto> comment;

    public ArticleResponseDto(Article article) {
        this.title = article.getTitle();
        this.content = article.getContent();
        this.authorId = article.getAuthorId();
        this.comment = article.getComments().stream()
                .map(CommentResponseDto::new)
                .collect(Collectors.toList());
    }
}
