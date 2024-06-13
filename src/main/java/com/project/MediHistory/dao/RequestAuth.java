package com.project.MediHistory.dao;

import io.codef.api.EasyCodef;
import io.codef.api.EasyCodefServiceType;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.HashMap;
import java.util.UUID;

import static io.codef.api.EasyCodefClientInfo.*;

public class RequestAuth {

    public static String requestAuth(HashMap<String, Object> parameterMap) throws IOException, InterruptedException, ParseException {
        HashMap<String, Object> twoWayInfo = new HashMap<String, Object>();

        parameterMap.replace("organization", (String) parameterMap.get("organization")); //기관코드 필수 입력
        parameterMap.replace("id", (String) parameterMap.get("id")); //식별아이디 필수 입력

        parameterMap.replace("loginType", (String) parameterMap.get("loginType")); // "0":(공동/금융)인증서 "5":간편인증
        parameterMap.replace("loginTypeLevel", (String) parameterMap.get("loginTypeLevel"));  // 1:카카오톡, 2:페이코, 3:삼성패스, 4:KB모바일, 5:통신사(PASS), 6:네이버, 7:신한인증서, 8: toss
        parameterMap.replace("userName", (String) parameterMap.get("userName"));
        parameterMap.replace("phoneNo", (String) parameterMap.get("phoneNo"));
        parameterMap.replace("identity", (String) parameterMap.get("identity"));
        parameterMap.replace("type", (String) parameterMap.get("type"));
        parameterMap.replace("drugImageYN", (String) parameterMap.get("drugImageYN"));
        parameterMap.replace("medicationDirectionYN", (String) parameterMap.get("medicationDirectionYN"));
        parameterMap.replace("detailYN", (String) parameterMap.get("detailYN"));
        parameterMap.replace("simpleAuth", (String) parameterMap.get("simpleAuth"));
        parameterMap.replace("is2Way", Boolean.parseBoolean((String) parameterMap.get("is2Way")));

        int jobIndex = Integer.parseInt(parameterMap.get("jobIndex").toString());
        System.out.println(parameterMap.remove("jobIndex"));
        twoWayInfo.put("jobIndex", jobIndex);

        int threadIndex = Integer.parseInt(parameterMap.get("threadIndex").toString());
        System.out.println(parameterMap.remove("threadIndex"));
        twoWayInfo.put("threadIndex", threadIndex);

        String jti = (String) parameterMap.get("jti");
        System.out.println(parameterMap.remove("jti"));
        twoWayInfo.put("jti", jti);

        Long twoWayTimestamp = Long.parseLong(parameterMap.get("twoWayTimestamp").toString());
        System.out.println(parameterMap.remove("twoWayTimestamp"));
        twoWayInfo.put("twoWayTimestamp", twoWayTimestamp);

        System.out.println("parameterMap : " + parameterMap);
        System.out.println("twoWayInfo : " + twoWayInfo);
        parameterMap.put("twoWayInfo", twoWayInfo);
        System.out.println("parameterMap + twoWayInfo : " + parameterMap);

        String productUrl = "/v1/kr/public/pp/nhis-treatment/information";
        String result;

        EasyCodef codef = new EasyCodef();
        codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);
        codef.setPublicKey(PUBLIC_KEY);

        result = codef.requestCertification(productUrl, EasyCodefServiceType.DEMO, parameterMap);

/** #4.결과값 확인 */

        System.out.println("추가 인증 : " + result);

        return result;
    }

}
