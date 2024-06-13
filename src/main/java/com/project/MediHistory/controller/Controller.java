package com.project.MediHistory.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.MediHistory.dao.MediResult;
import com.project.MediHistory.dao.RequestAuth;
import com.project.MediHistory.dao.RequestDrug;
import com.project.MediHistory.dao.RequestMedi;
import com.project.MediHistory.dto.MediDTO;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000", allowedHeaders = "*")
public class Controller {

    //API 요청
    @CrossOrigin(origins="http://localhost:3000", allowedHeaders = "*")
    @GetMapping("/social-login")
    public HashMap<String, Object> doSocialLogin(@RequestParam Map<String, Object> userData)  throws IOException, InterruptedException, ParseException {

        HashMap<String, Object> response = new HashMap<>();

        System.out.println("받은 개인 정보 : " + userData);

        Thread.sleep(100);

        response = RequestMedi.requestMedi(userData);

        System.out.println("추가인증 출력부 : "+ response);

        return response;
    }

    //간편인증
    @CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
    @GetMapping("/simple-auth")
    public void doSimpleAuth(@RequestParam HashMap<String, Object> params, HttpSession session , HttpServletResponse httpServletResponse)  throws IOException, InterruptedException, ParseException {
        ;
        System.out.println("requestAuth");
        System.out.println("authData : " + params);
        String result = RequestAuth.requestAuth(params);
        String name = URLEncoder.encode((String) params.get("userName"), "UTF-8");
        System.out.println("사용자 이름 : " + name);

        Thread.sleep(100);

        System.out.println("추가인증 결과 : " + result);

        ArrayList<MediDTO> mediList = MediResult.mediResult(result);

        session.setAttribute("mediList", mediList);


        httpServletResponse.sendRedirect("http://localhost:3000/medi_history");
    }

    //진료내역
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping("/get-medi-list")
    public List<MediDTO> getMediList(HttpSession session) {
        List<MediDTO> mediList = (List<MediDTO>) session.getAttribute("mediList");
        return mediList != null ? mediList : new ArrayList<>();
    }

    //상세투약정보
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @GetMapping("/medi-list-detail")
    public List<MediDTO> getMediDetailList(HttpSession session) {
        List<MediDTO> mediList = (List<MediDTO>) session.getAttribute("mediList");
        return mediList != null ? mediList : new ArrayList<>();
    }

    //
    @CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
    @GetMapping("/cancel-auth")
    public void cancelAuth(@RequestParam HashMap<String, Object> authData)  throws IOException, InterruptedException, ParseException {

        System.out.println("cancelAuth");
        System.out.println("authData : "+authData);
        String result = RequestAuth.requestAuth(authData);

    }

    @CrossOrigin(origins="http://localhost:3000", allowedHeaders = "*")
    @GetMapping("/drug-search")
    public ArrayList searchDrug(@RequestParam String drugName, @RequestParam String entpName, @RequestParam String efcyQesitm){
        ArrayList drugList = null;
        System.out.println("의약품명 : " + drugName + ", 업체명 : " + entpName + ", 증상 : " + efcyQesitm);
        drugList = RequestDrug.reqDrugData(drugName, entpName, efcyQesitm);
        return drugList;
    }

//    @CrossOrigin(origins="http://localhost:3000", allowedHeaders = "*")
//    @GetMapping("/drug-detail/{drugName}")
//    public String detailDrug(@RequestParam String drugName, Model model) {
//        ArrayList drugList = null;
//        drugList = RequestDrug.reqDrugData(drugName);
//        System.out.println(drugList.get(0));
//        model.addAttribute("drug",drugList.get(0));
//        return "/drug_detail";
//    }

}
