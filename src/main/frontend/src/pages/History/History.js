import './History.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function History() {
    const [selectedPeriod, setSelectedPeriod] = useState('전체'); // 초기 선택은 '전체'
    const [mediData, setMediData] = useState({});
    const [name, setName] = useState('');
    const navigate = useNavigate();

     useEffect(() => {
             // 서버로부터 데이터 fetch
             fetch('http://localhost:8080/get-medi-list', {
                 method: 'GET',
                 credentials: 'include'
             })
             .then(response => response.json())
             .then(data => {
                 setMediData(data);
             })
             .catch(error => {
                 console.error("There was an error fetching the data!", error);
             });
     }, [])



    const handlePeriodClick = (period) => {
        setSelectedPeriod(period);
    };

    const repeatPeriodButtons = () => {
        const periods = ['전체', '1주', '1개월', '3개월', '6개월', '1년'];
        return periods.map((period, index) => (
            <button
                key={index}
                className={selectedPeriod === period ? 'periodButton selected' : 'periodButton'}
                onClick={() => handlePeriodClick(period)}
            >
                {period}
            </button>
        ));
    };

    const handleDetailClick = (data) => {
        navigate(`/medi_detail?data=${encodeURIComponent(JSON.stringify(data))}`);
    };

    const repeatList = () => {
        console.log(mediData);
        if(mediData && mediData.length > 0) {
            return mediData.map((m, index) => (
                <tr className="list">
                    <td>{index + 1}</td>
                    <td>{m.resTreatStartDate}</td>
                    <td>{m.resHospitalName}</td>
                    <td>{m.resTreatType}</td>
                    <td>{m.resPrescribeCnt}</td>
                    <td>
                        <button className='detail-btn' onClick={() => handleDetailClick(m.resMediDetailList)}>
                            <img src={process.env.PUBLIC_URL + '/go.png'} alt="" />
                        </button>
                    </td>
                </tr>
            ));
        } else {
            return <tr height='200px'><td colSpan='6'>검색 결과가 없습니다.</td></tr>;
        }
    };

    const repeatNum = () => {
        const result2 = [];

        result2.push(<td key="prev"><a href="#!">&lt;</a></td>);

        for (let i = 1; i <= 10; i++) {
            result2.push(<td key={i}><a href="#!">{i}</a></td>);
        }

        result2.push(<td key="next"><a href="#!">&gt;</a></td>);

        return result2;
    };

    return (
        <div>
            <div className="select">
                <table>
                    <tbody>
                        <tr align="center" border="3px">
                            <td className="selected">
                                <h2 style={{ color: "#5679E4" }}><a href="#!">진료 내역 조회</a></h2>
                            </td>
                            <td className="not_selected">
                                <h2 style={{ color: "#5679E4" }}><a href="/drug_search">의약품 검색</a></h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="title">
                <h1 style={{ color: "#5679E4", fontWeight: "bolder" }}>{name}님의 진료 내역</h1>
            </div>


            <div className="check">
                <style className="width_line"></style>

                <h1>조회 기간</h1>
                
                    <style className="height_line"></style>
                <div className="periodButtons">{repeatPeriodButtons()}</div>
                <style className="width_line"></style>
            </div> 

            <div className="list_table">
                <table>
                    <tbody>
                        <tr className="list_title">
                            <td><h3>순번</h3></td>
                            <td><h3>진료날짜</h3></td>
                            <td><h3>진료병원</h3></td>
                            <td><h3>진료형태</h3></td>
                            <td><h3>처방횟수</h3></td>
                            <td><h3>투약상세내역</h3></td>
                        </tr>
                        {repeatList()}
                    </tbody>
                </table>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <table className="page_btn">
                    <tbody>
                        <tr>
                            {repeatNum()}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;
