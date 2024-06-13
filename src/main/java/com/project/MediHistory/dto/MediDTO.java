package com.project.MediHistory.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;

@Data
@AllArgsConstructor
public class MediDTO {
    public String resTreatStartDate; //진료날짜
    public String resHospitalName; //진료병원
    public String resTreatType; //진료형태
    public String resPrescribeCnt; //처방횟수
    public ArrayList<MediDetailDTO> resMediDetailList; //투약상세내역
}
