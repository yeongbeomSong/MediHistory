package io.codef.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;

public class requestThread extends Thread{
    private EasyCodef codef;
    private HashMap<String, Object> parameterMap;
    private String result;

    public requestThread(EasyCodef codef, HashMap<String, Object> parameterMap) {
        this.codef = codef;
        this.parameterMap = parameterMap;
    }

    @Override
    public void run() {

        /** #7.코드에프 정보 조회 요청 - 서비스타입(API:정식, DEMO:데모, SANDBOX:샌드박스) */
        String productUrl = "v1/kr/public/pp/nhis-treatment/information";
        String code;
        boolean continue2Way = false;

        try {
            result = codef.requestProduct(productUrl, EasyCodefServiceType.DEMO, parameterMap);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        HashMap<String, Object> responseMap = null;
        try {
            responseMap = new ObjectMapper().readValue(result, HashMap.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        HashMap<String, Object> resultMap = (HashMap<String, Object>)responseMap.get("result");

        //추가 인증이 필요한 경우 result 객체의 응답코드가 CF-03002
        code = (String)resultMap.get("code");
        System.out.println("응답코드 : " + code);

        HashMap<String, Object> dataMap = (HashMap<String, Object>)responseMap.get("data");
        HashMap<String, Object> extraInfoMap = (HashMap<String, Object>) dataMap.get("extraInfo");

        // data객체에 continue2Way 필드가 존재하는지 확인
        if (dataMap.containsKey("continue2Way")) {
            continue2Way = Boolean.valueOf((boolean)dataMap.get("continue2Way"));
        }

        if (code.equals("CF-03002") && continue2Way){
        }

        /** #8.결과값 확인 */
        System.out.println(" result : " + result);
    }
}