package com.green.ReactCarManager.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SalesInfoVO {
    private int salesNum;
    private String buyer;
    private String tel;
    private String color;
    private String salesDate;
    private int carNum;
    private CarInfoVO carInfoVO;
}
