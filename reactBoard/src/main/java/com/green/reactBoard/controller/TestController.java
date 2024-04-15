package com.green.reactBoard.controller;

import com.green.reactBoard.service.BoardService;
import com.green.reactBoard.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
