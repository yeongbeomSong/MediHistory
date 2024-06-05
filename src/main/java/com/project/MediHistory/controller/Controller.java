package com.project.MediHistory.controller;

import com.project.MediHistory.dao.RequestAuth;
import com.project.MediHistory.dao.RequestDrug;
import com.project.MediHistory.dao.RequestMedi;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/mh")
@RequiredArgsConstructor
@CrossOrigin(origins="*", allowedHeaders = "*")
public class Controller {

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @PostMapping("/social-login")
    public HashMap<String, Object> doSocialLogin(@RequestBody Map<String, Object> userData)  throws IOException, InterruptedException, ParseException {

        HashMap<String, Object> response = new HashMap<>();

        System.out.println(userData);

        response = RequestMedi.requestMedi(userData);

        System.out.println(response);

        return response;
    }

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @PostMapping("/simple-auth")
    public HashMap<String, Object> doSimpleAuth(@RequestBody HashMap<String, Object> requestData)  throws IOException, InterruptedException, ParseException {

        HashMap<String, Object> response = new HashMap<>();

        String productUrl = "v1/kr/public/pp/nhis-treatment/information";
        String ID = "testID" + UUID.randomUUID();
        String result = RequestAuth.requestAuth(requestData, "1");

        System.out.println(result);

        return response;
    }

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @PostMapping("/cancel-auth")
    public void cancelAuth(@RequestBody HashMap<String, Object> requestData)  throws IOException, InterruptedException, ParseException {

        HashMap<String, Object> response = new HashMap<>();

        String productUrl = "v1/kr/public/pp/nhis-treatment/information";
        String ID = "testID" + UUID.randomUUID();
        String result = RequestAuth.requestAuth(requestData, "0");

    }

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @GetMapping("/drug-search")
    public ArrayList searchDrug(@RequestParam String drugName){
        ArrayList drugList = null;
        drugList = RequestDrug.reqDrugData(drugName);
        return drugList;
    }

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @GetMapping("/drug-detail/{drugName}")
    public String detailDrug(@RequestParam String drugName, Model model) {
        ArrayList drugList = null;
        drugList = RequestDrug.reqDrugData(drugName);
        System.out.println(drugList.get(0));
        model.addAttribute("drug",drugList.get(0));
        return "/drug_detail";
    }

}
