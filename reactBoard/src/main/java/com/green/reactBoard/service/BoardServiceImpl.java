package com.green.reactBoard.service;

import com.green.reactBoard.vo.BoardVO;
import jakarta.websocket.Session;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public List<BoardVO> selectBoardList() {
        return sqlSession.selectList("boardMapper.selectBoardList");
    }

    //게시물 등록하기
    @Override
    public void insertBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.insertBoard",boardVO);
    }
    //게시물 번호 최대값 구하기
    @Override
    public int searchMaxBoardNum() {
        return sqlSession.selectOne("boardMapper.searchMaxBoardNum");
    }

    //게시물 조회수 증가 시키기
    @Override
    public void updateCnt(int boardNum) {
        sqlSession.update("boardMapper.updateCnt",boardNum);
    }

    @Override
    public BoardVO selectBoardOne(int boardNum) {
        sqlSession.update("boardMapper.updateCnt",boardNum);
        return sqlSession.selectOne("boardMapper.selectBoardOne", boardNum);
    }

    //게시물 하나 삭제하기
    @Override
    public void deleteBoard(int boardNum) {
        sqlSession.delete("boardMapper.deleteBoard",boardNum);
    }
    //게시물 수정하기
    @Override
    public void updateBoard(BoardVO boardVO) {
        sqlSession.update("boardMapper.updateBoard",boardVO);
    }
}
