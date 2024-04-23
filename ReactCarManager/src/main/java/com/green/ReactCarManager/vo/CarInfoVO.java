package com.green.ReactCarManager.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarInfoVO {
    private int carNum;
    private String modelName;
    private int price;
    private String madeBy;
}
