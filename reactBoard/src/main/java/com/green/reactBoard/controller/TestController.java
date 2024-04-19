package com.green.reactBoard.controller;

import com.green.reactBoard.service.BoardService;
import com.green.reactBoard.vo.BoardVO;
import jakarta.annotation.Resource;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//RestController : 해당 클래스의 모든 메소드는 전부 비동기
@RestController
public class TestController {
    @Resource(name="boardService")
    private BoardService boardService;

    @GetMapping("/test1")
    public String test1(){
        return "java";
    }

    @GetMapping("/getList")
    public List<BoardVO> getList(){
        return boardService.selectBoardList();
    }

    @PostMapping("/insertBoard")
    public void insertBoard(@RequestBody BoardVO boardVO){
        System.out.println(boardVO);
        int boardNum = boardService.searchMaxBoardNum();
        boardVO.setBoardNum(boardNum);
        boardService.insertBoard(boardVO);
    }

    @GetMapping("detailBoard/{boardNum}")
    public BoardVO detailBoard(@PathVariable(name = "boardNum") int boardNum){
        System.out.println("메소드실행!!!!!!!!!!!!!!!!!!!!!!!!!!");

        return boardService.selectBoardOne(boardNum);
    }
    @GetMapping("deleteBoard/{boardNum}")
    public void deleteBoard(@PathVariable("boardNum")int boardNum){
        System.out.println("삭제 메소드 실행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        boardService.deleteBoard(boardNum);
    }

    @PostMapping("/modifyBoard")
    public void modifyBoard(@RequestBody BoardVO boardVO){
        System.out.println(boardVO);
        boardService.updateBoard(boardVO);
    }



}
