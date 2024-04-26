package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarInfoVO;
import com.green.ReactCarManager.vo.SalesInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carManagerService")
public class CarManagerServiceImpl implements CarManagerService{
    @Autowired
    private SqlSessionTemplate sqlSession;
    @Override
    public List<CarInfoVO> selectCarInfoList() {
        return sqlSession.selectList("carMapper.selectCarInfoList");
    }

    @Override
    public void insertCarInfo(CarInfoVO carInfoVO) {
        sqlSession.insert("carMapper.insertCarInfo", carInfoVO);
    }

    @Override
    public void insertSalesInfo(SalesInfoVO salesInfoVO) {
        sqlSession.insert("carMapper.insertSalesInfo", salesInfoVO);
    }

    @Override
    public List<SalesInfoVO> selectSalesList() {
        return sqlSession.selectList("carMapper.selectSalesList");
    }
}
