package com.project.MediHistory.dao;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.MediHistory.dto.DrugDTO;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.*;
import java.util.ArrayList;

public class RequestDrug {

    public static ArrayList<DrugDTO> reqDrugData(String drugName) {
        ArrayList<DrugDTO> drugList = new ArrayList<>();
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList"); /*URL*/
        try {
            urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=5SLJHbthLfUwbxmtzMpPvbFQ%2BNpY7Z0DceaxjnSuqxBbx6oqDv7yRNdwY%2Fa7DzN2EBaj5jCrcq6wRL5L2REsew%3D%3D"); /*Service Key*/
            urlBuilder.append("&" + URLEncoder.encode("itemName","UTF-8") + "=" + URLEncoder.encode(drugName, "UTF-8")); /*제품명*/
            urlBuilder.append("&" + URLEncoder.encode("type","UTF-8") + "=" + URLEncoder.encode("json", "UTF-8")); /*응답데이터 형식(xml/json) Default:xml*/
            URL url = new URL(urlBuilder.toString());
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response code: " + conn.getResponseCode());
            BufferedReader rd;
            if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
                rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }

            rd.close();
            conn.disconnect();
            System.out.println(sb.toString());

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(String.valueOf(sb));

            // items 추출
            JsonNode itemsNode = rootNode.path("body").path("items");

            if(rootNode.path("body").path("items").toString().equals("")) {
                System.out.println("null");
                drugList = null;
                return drugList;
            }else{
                System.out.println("not null");
            }

            System.out.println("itemNodes : " + itemsNode);

            // 결과 출력
//            System.out.println("Extracted items: " + itemsNode.toPrettyString());

            for (JsonNode itemNode : itemsNode) {
                DrugDTO drugDTO = new DrugDTO();
                drugDTO.setEntpName(itemNode.path("entpName").asText());
                drugDTO.setItemName(itemNode.path("itemName").asText());
                drugDTO.setEfcyQesitm(itemNode.path("efcyQesitm").asText());
                drugDTO.setUseMethodQesitm(itemNode.path("useMethodQesitm").asText());
                drugDTO.setAtpnWarnQesitm(itemNode.path("atpnWarnQesitm").asText());
                drugDTO.setAtpnQesitm(itemNode.path("atpnQesitm").asText());
                drugDTO.setIntrcQesitm(itemNode.path("intrcQesitm").asText());
                drugDTO.setSeQesitm(itemNode.path("seQesitm").asText());
                drugDTO.setDepositMethodQesitm(itemNode.path("depositMethodQesitm").asText());
                drugDTO.setItemImage(itemNode.path("itemImage").asText(null)); // null 처리
                drugList.add(drugDTO);
            }

            for (DrugDTO drug : drugList) {
                System.out.println("Extracted DrugDTO: " + drug);
            }

        } catch (UnsupportedEncodingException | ProtocolException e) {
            throw new RuntimeException(e);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return drugList;
    }

}
