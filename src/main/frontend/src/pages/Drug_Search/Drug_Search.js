import React, { useState, useEffect } from 'react';
import './Drug_Search.css';
import axios from 'axios';

function DrugSearch() {

    const [drugName, setDrugName] = useState('');
    const [drugList, setDrugList] = useState(null);

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };

    const handleInputChange = (event) => {
        setDrugName(event.target.value);
    };

    const fetchDrugList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/mh/drug-search", {
                params: { drugName },
            });
            setDrugList(response.data);
        } catch (error) {
            console.error('Error fetching drug data:', error);
            setDrugList(null);
        }
    };

    const list = () => {
        if(drugList != null){
            return drugList.map((drug, index) => (
                <tr className="list">
                    <td>{index + 1}</td>
                    <td><a href="/drug_detail"> {drug.itemName} </a></td>
                    <td>{drug.itemImage && (<img className="drugImage" src={drug.itemImage}/>)}</td>
                    <td> {drug.entpName} </td>
                    <td> {drug.efcyQesitm} </td>
                </tr>
            ));
        } else {
            return ;
        }
    };

    const page = () => {
        const result = [];

        result.push(<td><a href="#!">&lt;</a></td>);

        for(let i = 1; i <= 10; i++){
            result.push(<td><a href="#!">{i}</a></td>);
        }

        result.push(<td><a href="#!">&gt;</a></td>);

        return result;

    }

    return (
        <div>
            <div className="select">
                <table>
                   <tr align="center">
                      <td className="not_selected">
                        <h2 style={{color:"#5679E4"}}><a href="/medi_history">진료 내역 조회</a></h2>
                      </td>
                      <td className="selected" style={{backgroundColor:"#5679E4"}}>
                        <h2 style={{color:"#ffffff"}}><a href="#!">의약품 검색</a></h2>
                      </td>
                   </tr>
                </table>
            </div>
            <div className="title">
                <h1 style={{color:"#5679E4"}}>의약품 상세 정보</h1>
            </div>
            <div className="search">
                <table>
                    <td align="center" className="label"><h3>약품 검색</h3></td>
                    <td>
                        <input className="textarea" value={drugName} onChange={handleInputChange} placeholder="약품명을 입력하세요." />
                        <button className="btn" onClick={fetchDrugList}>검색</button>
                    </td>
                </table>
            </div>
            <div className="list_table">
                <table>
                    <tr className="list_title" height="50px">
                        <td width="7%">순번</td>
                        <td width="20%">약품명</td>
                        <td width="20%">약품사진</td>
                        <td width="20%">업체명</td>
                        <td width="30%">효능</td>
                    </tr>
                    {list()}
                </table>
            </div>
            <div>
                <table className="page_btn">
                </table>
            </div>
        </div>
    );
}

export default DrugSearch;