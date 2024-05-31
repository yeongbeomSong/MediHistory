package com.project.MediHistory.controller;

import com.project.MediHistory.dao.RequestDrug;
import com.project.MediHistory.dao.RequestMedi;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.UUID;

@RestController
@RequestMapping("/mh")
@RequiredArgsConstructor
@CrossOrigin(origins="*", allowedHeaders = "*")
public class Controller {

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @PostMapping("/social-login")
    public String doSocialLogin(Model model)  throws IOException, InterruptedException, ParseException {

        String productUrl = "v1/kr/public/pp/nhis-treatment/information";
        String ID = "testID" + UUID.randomUUID();
        String result = RequestMedi.requestMedi();

        return "/serverconnect?result={result}";
    }

    @CrossOrigin(origins="*", allowedHeaders = "*")
    @GetMapping("/drug-search")
    public ArrayList searchDrug(@RequestParam String drugName){
        ArrayList drugList = null;
        drugList = RequestDrug.reqDrugData(drugName);
        return drugList;
    }

}
