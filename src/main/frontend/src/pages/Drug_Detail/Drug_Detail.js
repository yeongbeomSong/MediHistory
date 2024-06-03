import './Drug_Detail.css';

function DrugDetail() {
    var attr = ["제품사진","제품명","업체명","효능","사용법","주의사항경고","주의사항","상호작용","부작용","보관법"];
    var h = ["300px","20px","20px","150px","150px","150px","150px","150px","150px","150px"];

    const list = () => {
        const result = [];

        for(let i = 0; i < attr.length; i++){
            result.push(<tr className="list">
                <td>{attr[i]}</td>
                <td height={h[i]}></td>
            </tr>);
        }

        return result;
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