package com.project.MediHistory.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MediDetailDTO {
    public String resPrescribeDrugName; //약품명
    public String resDrugImageLink; //약품사진
    public String resPrescribeDrugEffect; //효능
    public String resPrescribeDays; //투약일수
    public String resMedicationDirection; //복약안내
}
