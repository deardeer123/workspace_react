package com.green.reactBoard.service;

import com.green.reactBoard.vo.BoardVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> selectBoardList();
    //게시물 등록하기
    void insertBoard(BoardVO boardVO);
    //게시물 번호 최대값 구하기
    int searchMaxBoardNum();
    //게시물 조회수 증가 시키기
    void updateCnt();
}
