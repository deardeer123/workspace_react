package com.green.reactBoard.vo;

import lombok.Data;

@Data
public class BoardVO {
    private int boardNum;
    private String title;
    private String content;
    private String writer;
    private String createDate;
    private int readCnt;
}
