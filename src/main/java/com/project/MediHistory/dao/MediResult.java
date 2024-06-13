package com.project.MediHistory.dao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.MediHistory.dto.MediDTO;
import com.project.MediHistory.dto.MediDetailDTO;

import java.io.IOException;
import java.util.ArrayList;

public class MediResult {
    public static ArrayList<MediDTO> mediResult(String result) {
        ArrayList<MediDTO> mdtoList = new ArrayList<>();
        ObjectMapper om = new ObjectMapper();

        try {
            JsonNode rootNode = om.readTree(result);
            JsonNode dataNode = rootNode.path("data");

            for (JsonNode node : dataNode) {
                MediDTO mdto;
                ArrayList<MediDetailDTO> mddtoList = new ArrayList<>();

                System.out.println("Treatment Start Date: " + node.path("resTreatStartDate").asText());
                String date = node.path("resTreatStartDate").asText();
                System.out.println("Hospital Name: " + node.path("resHospitalName").asText());
                String hosName = node.path("resHospitalName").asText();
                System.out.println("Treatment Type: " + node.path("resTreatType").asText());
                String treatType = node.path("resTreatType").asText();
                System.out.println("Prescription Count: " + node.path("resPrescribeCnt").asText());
                String preCnt = node.path("resPrescribeCnt").asText();

                JsonNode mediDetailList = node.path("resMediDetailList");
                for (JsonNode mediDetail : mediDetailList) {
                    MediDetailDTO mddto = new MediDetailDTO();

                    System.out.println("  Drug Name: " + mediDetail.path("resPrescribeDrugName").asText());
                    mddto.setResPrescribeDrugName(mediDetail.path("resPrescribeDrugName").asText());
                    System.out.println("  Drug Image Link: " + mediDetail.path("resDrugImageLink").asText());
                    mddto.setResDrugImageLink(mediDetail.path("resDrugImageLink").asText());
                    System.out.println("  Drug Effect: " + mediDetail.path("resPrescribeDrugEffect").asText());
                    mddto.setResPrescribeDrugEffect(mediDetail.path("resPrescribeDrugEffect").asText());
                    System.out.println("  Prescription Days: " + mediDetail.path("resPrescribeDays").asText());
                    mddto.setResPrescribeDays(mediDetail.path("resPrescribeDays").asText());
                    System.out.println("  Medication Direction: " + mediDetail.path("resMedicationDirection").asText());
                    mddto.setResMedicationDirection(mediDetail.path("resMedicationDirection").asText());

                    mddtoList.add(mddto);
                }
                mdto = new MediDTO(date, hosName, treatType, preCnt, mddtoList);
                mdtoList.add(mdto);

                System.out.println();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("투약 내역 : " + mdtoList);

        return mdtoList;
    }
}
