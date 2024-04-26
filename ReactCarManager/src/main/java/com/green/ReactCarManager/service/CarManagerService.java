package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarInfoVO;
import com.green.ReactCarManager.vo.SalesInfoVO;

import java.util.List;

public interface CarManagerService {
    List<CarInfoVO> selectCarInfoList();
    void insertCarInfo(CarInfoVO carInfoVO);
    void insertSalesInfo(SalesInfoVO salesInfoVO);
    List<SalesInfoVO> selectSalesList();
}
