import './Drug_Detail.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DrugDetail() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            navigate('/drug_search');
        }
    }, [location.state, navigate]);

    console.log("location.state = ",location.state);

    if (!location.state) {
        return null; // navigate가 호출될 때까지 아무것도 렌더링하지 않습니다.
    }

    const { drug } = location.state;
//    const drug = document.getElementById("drug");

    const ele = [
            { key: '제품사진', value: drug.itemImage ? <img src={drug.itemImage} alt={drug.itemName} /> : 'N/A' },
            { key: '제품명', value: drug.itemName },
            { key: '업체명', value: drug.entpName },
            { key: '효능', value: drug.efcyQesitm },
            { key: '사용법', value: drug.useMethodQesitm },
            { key: '주의사항경고', value: drug.atpnWarnQesitm },
            { key: '주의사항', value: drug.atpnQesitm },
            { key: '상호작용', value: drug.intrcQesitm },
            { key: '부작용', value: drug.seQesitm },
            { key: '보관법', value: drug.depositMethodQesitm }
        ];

        const list = () => {
            return ele.map((item, index) => (
                <tr key={index} className="list" height={item.height}>
                    <td>{item.key}</td>
                    <td>{item.value}</td>
                </tr>
            ));
        };

    return (
        <div>
            <div className="select">
                <table>
                   <tr align="center">
                      <td className="not_selected">
                        <h2 style={{color:"#5679E4"}}><a href="/medi_history">진료 내역 조회</a></h2>
                      </td>
                      <td className="selected" style={{backgroundColor:"#5679E4"}}>
                        <h2 style={{color:"#ffffff"}}><a href="/drug_search">의약품 검색</a></h2>
                      </td>
                   </tr>
                </table>
            </div>
            <div className="title">
                <h1 style={{color:"#5679E4"}}><a href="/drug_search">의약품 상세 정보</a> > (약품명)</h1>
            </div>
            <div className="list_table">
                <table>
                    <tr className="list_title" height="50px">
                        <td width="10%">속성</td>
                        <td>내용</td>
                    </tr>
                    {list()}
                </table>
            </div>
        </div>
    );
}

export default DrugDetail;