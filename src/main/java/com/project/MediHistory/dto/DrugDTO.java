package com.project.MediHistory.dto;

import lombok.Data;

@Data
public class DrugDTO {
    public String itemName; //제품명
    public String entpName; //업체명
    public String efcyQesitm; //효능
    public String useMethodQesitm; //사용법
    public String atpnWarnQesitm; //주의사항경고
    public String atpnQesitm; //주의사항
    public String intrcQesitm; //상호작용
    public String seQesitm; //부작용
    public String depositMethodQesitm; //보관법
    public String itemImage; //이미지
}
