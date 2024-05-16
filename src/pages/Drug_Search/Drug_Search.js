import './Drug_Search.css';

function Drug_Search() {

    const list = () => {
        const result = [];

        for(let i = 1; i <= 5; i++){
            result.push(<tr className="list">
                <td>{i}</td>
                <td><a href="/drug_detail">약품명</a></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>);
        }

        return result;
    };

    const page = () => {
        const result = [];

        result.push(<td><a href="">&lt;</a></td>);

        for(let i = 1; i <= 10; i++){
            result.push(<td><a href="">{i}</a></td>);
        }

        result.push(<td><a href="">&gt;</a></td>);

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
                        <h2 style={{color:"#ffffff"}}><a href="">의약품 검색</a></h2>
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
                        <input className="textarea" placeholder="약품명을 입력하세요." />
                        <button className="btn">검색</button>
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
                    {page()}
                </table>
            </div>
        </div>
    );
}

export default Drug_Search;