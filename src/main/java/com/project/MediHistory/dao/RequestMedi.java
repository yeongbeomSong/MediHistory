package com.project.MediHistory.dao;

import io.codef.api.EasyCodef;
import io.codef.api.EasyCodefServiceType;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static io.codef.api.EasyCodefClientInfo.*;

public class RequestMedi {

    public static HashMap<String, Object> requestMedi(Map<String, Object> userData) throws IOException, InterruptedException, ParseException {

        String productUrl = "/v1/kr/public/pp/nhis-treatment/information";
        String ID = "testID" + UUID.randomUUID();
        String password = "testPWD";
        String result;
        String userName = (String) userData.get("name");
        String phoneNo = (String) userData.get("phoneNumber");
        String identity = (String) userData.get("birthdate");
        String loginTypeLevel = (String) userData.get("loginTypeLevel");

        System.out.println(userName+" "+phoneNo+" "+identity+" "+loginTypeLevel);

        EasyCodef codef = new EasyCodef();
        codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);
        codef.setPublicKey(PUBLIC_KEY);

/** #2.추가인증 입력부 파라미터 설정 */
        HashMap<String, Object> parameterMap = new HashMap<String, Object>();
        parameterMap.put("organization", "0002"); //기관코드 필수 입력
        parameterMap.put("id", ID); //식별아이디 필수 입력

        parameterMap.put("loginType", "5"); // "0":(공동/금융)인증서 "5":간편인증
        parameterMap.put("loginTypeLevel", loginTypeLevel);  // 1:카카오톡, 2:페이코, 3:삼성패스, 4:KB모바일, 5:통신사(PASS), 6:네이버, 7:신한인증서, 8: toss
        parameterMap.put("userName", userName);
        parameterMap.put("phoneNo", phoneNo);
        parameterMap.put("identity", identity);
        parameterMap.put("type", "1");
        parameterMap.put("drugImageYN", "1");
        parameterMap.put("medicationDirectionYN", "1");
        parameterMap.put("detailYN", "1");

        JSONParser parser = new JSONParser();

        result = codef.requestProduct(productUrl, EasyCodefServiceType.DEMO, parameterMap);

        System.out.println(result);

        JSONObject resultJSON = (JSONObject) parser.parse(result);

        System.out.println(resultJSON.get("data").toString());

        String dataToString = resultJSON.get("data").toString();

        System.out.println("data = " + dataToString);

        JSONObject data = (JSONObject) parser.parse(dataToString);

        int jobIndex = Integer.parseInt(String.valueOf(data.get("jobIndex")));
        int threadIndex = Integer.parseInt(String.valueOf(data.get("threadIndex")));
        String jti = (String)data.get("jti");
        Long twoWayTimestamp = (Long)data.get("twoWayTimestamp");
        boolean is2Way = (boolean) data.get("continue2Way");

        System.out.println(jobIndex);
        System.out.println(threadIndex);
        System.out.println(jti);
        System.out.println(twoWayTimestamp);

//간편인증 추가인증 입력부
        parameterMap.put("is2Way", is2Way);

/** #3.twoWayInfo 파라미터 설정*/
        parameterMap.put("jobIndex", jobIndex);
        parameterMap.put("threadIndex", threadIndex);
        parameterMap.put("jti", jti);
        parameterMap.put("twoWayTimestamp", twoWayTimestamp);


        return parameterMap;
    }

}
