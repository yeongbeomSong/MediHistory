import './History.css';
import React, { useState } from 'react';

function History() {
    const [selectedPeriod, setSelectedPeriod] = useState('전체'); // 초기 선택은 '전체'

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

    const repeatList = () => {
        const result1 = [];
        for (let i = 1; i <= 10; i++) {
            result1.push(
                <tr className="list" key={i}>
                    <td width="5%"><h4>{i}</h4></td>
                    <td width="19%"></td>
                    <td width="19%"></td>
                    <td width="19%"></td>
                    <td width="19%"></td>
                    <td width="19%">
                        <a href="#!">
                            <img src={process.env.PUBLIC_URL + '/go.png'} alt="" />
                        </a>
                    </td>
                </tr>
            );
        }
        return result1;
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
                <h1 style={{ color: "#5679E4", fontWeight: "bolder" }}>ㅇㅇㅇ님의 진료 내역</h1>
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
