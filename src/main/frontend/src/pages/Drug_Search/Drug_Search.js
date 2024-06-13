import React, { useState, useEffect } from 'react';
import './Drug_Search.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DrugSearch() {

    const [drugName, setDrugName] = useState(''); //의약품 이름
    const [entpName, setEntpName] = useState(''); //의약품 이름
    const [efcyQesitm, setEfcyQesitm] = useState(''); //의약품 이름
    const [drugList, setDrugList] = useState(null);

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };

    const handledrugNameChange = (event) => {
        setDrugName(event.target.value);
    };

    const handleentpNameChange = (event) => {
        setEntpName(event.target.value);
    };

    const handleefcyQesitmChange = (event) => {
        setEfcyQesitm(event.target.value);
    };

    const fetchDrugList = async () => {
        if (!drugName && !entpName && !efcyQesitm) {
            alert('검색할 정보를 입력해주세요.');
            return;
        }

        try {
            const response = await axios.get("http://localhost:8080/drug-search", {
                params: { drugName, entpName, efcyQesitm },
            });
            setDrugList(response.data);
        } catch (error) {
            console.error('Error fetching drug data:', error);
            setDrugList(null);
        }
    };

    const list = () => {
        console.log(drugList);
        if(drugList && drugList.length > 0){
            return drugList.map((drug, index) => (
                <tr className="list">
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/drug_detail`} state={{ drug }}>
                            {drug.itemName}
                        </Link>
                    </td>
                    <td>{drug.itemImage && (<img className="drugImage" src={drug.itemImage}/>)}</td>
                    <td> {drug.entpName} </td>
                    <td> {drug.efcyQesitm} </td>
                </tr>
            ));
        } else {
            return <tr height='200px'><td colspan='5'>검색 결과가 없습니다.</td></tr>;
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
                        <input className="textarea" value={drugName} onChange={handledrugNameChange} placeholder="약품명" />
                        <input className="textarea" value={entpName} onChange={handleentpNameChange} placeholder="업체명" />
                        <input className="textarea" value={efcyQesitm} onChange={handleefcyQesitmChange} placeholder="증상" />
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
