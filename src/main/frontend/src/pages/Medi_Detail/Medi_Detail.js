import './Medi_Detail.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

function MediDetail() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const repeatList = () => {
    const result1 =[];
    for(let i = 1; i <= 5; i++) {
      result1.push(<tr className="list">
                                  <td width="5%"><h4>{i}</h4></td>
                                  <td width="19%"><a href="/drug_detail">약품명</a></td>
                                  <td width="19%"></td>
                                  <td width="19%"></td>
                                  <td width="19%"></td>
                                  <td width="19%">
                                    <img src={process.env.PUBLIC_URL+'/compose_icon.png'} onClick={()=> setModalIsOpen(true)} alt="etc"/>
                                  </td>
                                </tr>);
    }
    return result1;
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
            <td><h3>복약안내</h3></td>
            <td><h3>투약일수</h3></td>
            <td><h3>메모</h3></td>
          </tr>
              {repeatList()}
        </table>
      </div>
      <div>
      <p></p>
      </div>
      <div>
            <table className="page_btn">
                {repeatNum()}
            </table>
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
