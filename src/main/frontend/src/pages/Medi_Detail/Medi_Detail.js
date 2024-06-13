import './Medi_Detail.css';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MediDetail() {

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const detailList = JSON.parse(decodeURIComponent(query.get('data')));

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const repeatList = () => {
  console.log(detailList);
    const result1 =[];
    if(detailList && detailList.length > 0) {
        return detailList.map((m, index) => (
            <tr className="list">
                <td width='3%'>{index+1}</td>
                <td width='5%'>{m.resPrescribeDrugName}</td>
                <td width='2%'>
                    <img src={m.resDrugImageLink} />
                </td>
                <td width='5%'>{m.resPrescribeDrugEffect}</td>
                <td width='5%'>{m.resPrescribeDays}</td>
                <td width='15%' dangerouslySetInnerHTML={{ __html: m.resMedicationDirection }} />
                <td width='5%'>
                    <img src={process.env.PUBLIC_URL+'/compose_icon.png'} onClick={()=> setModalIsOpen(true)} alt="etc"/>
                </td>
            </tr>
        ));
    }else {
        return <tr height='200px'><td colspan='7'>검색 결과가 없습니다.</td></tr>;
    }
  };

  const repeatNum = () => {
      const result2 =[];

      result2.push(<td><a href="#!">&lt;</a></td>)

      for(let i = 1; i <= 10; i++) {
        result2.push(<td><a href="#!">{i}</a></td>);
      }

      result2.push(<td><a href="#!">&gt;</a></td>)

      return result2;
    };

  return (
    <div>
      <div className="select">
        <table>
          <tr align="center" border="3px">
            <td className="selected">
                <h2 style={{color:"#5679E4" }}><a href="/medi_history">진료 내역 조회</a></h2>
            </td>
            <td className="not_selected">
                <h2 style={{color:"#5679E4"}}><a href="/drug_search">의약품 검색</a></h2>
            </td>
          </tr>
        </table>
      </div>
      <div className="title">
        <h1 style={{color:"#5679E4", weight:"bolder"}}>투약 상세 내역</h1>
      </div>
      <div className="list_table">
        <table>
          <tr className="list_title">
            <td><h3>순번</h3></td>
            <td><h3>약품명</h3></td>
            <td><h3>약품사진</h3></td>
            <td><h3>효능</h3></td>
            <td><h3>투약일수</h3></td>
            <td><h3>복약안내</h3></td>
            <td><h3>메모</h3></td>
          </tr>
              {repeatList()}
        </table>
      </div>
      <div>
      <p></p>
      </div>
        <div className="dimmed">
                <Modal
                    className="memo-background"
                    isOpen={modalIsOpen}
                >
                    <div className="memo-title">메모</div>
                    <div>
                        <textarea className="memo" placeholder="메모" />
                    </div>
                    <div align="center">
                        <button className="cancel-btn" onMouseUp={() => setModalIsOpen(false)}>취소</button>
                        <button className="regist-btn" onMouseUp={() => setModalIsOpen(false)}>확인</button>
                    </div>
                </Modal>
            </div>
    </div>
  );
}

export default MediDetail;
