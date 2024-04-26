package com.green.ReactCarManager.controller;

import com.green.ReactCarManager.service.CarManagerService;
import com.green.ReactCarManager.vo.CarInfoVO;
import com.green.ReactCarManager.vo.SalesInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarManagerController {
    @Resource(name="carManagerService")
    CarManagerService carManagerService;

    @GetMapping("/carList")
    public List<CarInfoVO> carList(){
        return carManagerService.selectCarInfoList();
    }

    @PostMapping("/carList")
    public List<CarInfoVO> insertCarInfo(@RequestBody CarInfoVO carInfoVO){
        carManagerService.insertCarInfo(carInfoVO);
        return carManagerService.selectCarInfoList();
    }

    @PostMapping("/salesInfo")
    public void insertSalesInfo(@RequestBody SalesInfoVO salesInfoVO){
        System.out.println(salesInfoVO);
        carManagerService.insertSalesInfo(salesInfoVO);
    }

    @GetMapping("/salesList")
    public List<SalesInfoVO> selectSalesList(){
        return carManagerService.selectSalesList();
    }

}
