package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarInfoVO;

import java.util.List;

public interface CarManagerService {
    List<CarInfoVO> selectCarInfoList();
    void insertCarInfo(CarInfoVO carInfoVO);
}
