package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carManagerService")
public class CarManagerServiceImpl implements CarManagerService{
    @Autowired
    SqlSessionTemplate sqlSession;
    @Override
    public List<CarInfoVO> selectCarInfoList() {
        return sqlSession.selectList("carMapper.selectCarInfoList");
    }

    @Override
    public void insertCarInfo(CarInfoVO carInfoVO) {
        sqlSession.insert("carMapper.insertCarInfo", carInfoVO);
    }
}
