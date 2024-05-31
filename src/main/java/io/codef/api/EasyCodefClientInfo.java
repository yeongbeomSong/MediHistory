package io.codef.api;

/**
 * <pre>
 * io.codef.easycodef
 *   |  EasyCodefClientInfo.java
 * </pre>
 * 
 * Desc : EasyCodef 발급 클라이언트 정보 설정 클래스
 * @Company : ©CODEF corp.
 * @Author  : notfound404@codef.io
 * @Date    : Jun 26, 2020 3:42:11 PM
 * @Version : 1.0.1
 */
public class EasyCodefClientInfo {

	/**	
	 * TODO :	사용자는 코드에프 가입을 통해 발급 받은 클라이언트 정보와 RSA 공개키 정보를 설정해야 함.
	 * 			설정하지 않은 상태에서는 SANDBOX 테스트만 사용 가능.
	 */
	public static final String DEMO_CLIENT_ID = "b4096f01-f9b3-454c-890e-7e6a881a1093";
	public static final String DEMO_CLIENT_SECRET = "d9d6e536-6ef9-42a0-ab4a-748ea270913a";
	
	public static final String CLIENT_ID = "코드에프 데모 서비스 신청 후 발급 받은 정식버전 클라이언트 아이디 설정";
	public static final String CLIENT_SECRET = "코드에프 데모 서비스 신청 후 발급 받은 정식버전 클라이언트 아이디 설정";
	
	/**  임시로 설정된 PUBLIC_KEY를 제거하고 코드에프 가입을 통해 발급 받은 본인 계정의 RSA 공개키 정보 설정 필요. */
	public static final String PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtB9Iq0kH1c6nTLuAzC70JNjuOIGD5/AYxTKslpfmc6V7FwOuiDUevWWDF9kRA+kDvHz5w5AVuHIo10X+iUJ2c7nk79GCbjXXkzFHnx4hkRkF2hVvrT4g6+067jHteAlvAMAAL5suz93bb4Da+ta+fXNefKZxgwruWI21Cm5DElB/Re4gkMHlDZWR+fap18pI/c9PonttjsAHy3VSvx6EVGnIu2yqoAECQoQiTF/fFgbiWX5P8+jw3NdblYcE0hDlOvYmTk+Z3yrxKVbjK7frHX4cRcmh1i4mTmbvvmCGaJ7A11cgcdCVIfaX0jnpIgnKWlOrdiWM9pdx+h3Y14ZmkQIDAQAB";

}
