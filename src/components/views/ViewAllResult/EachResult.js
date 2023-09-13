import "./EachResult.css"
function EachResult(props) {
    var result_name = props.name;
    var img_path = props.img_path;
    var subname = props.subname

    return (<div className="EachResult">
        <div className="Position1"><div className="Circle"></div><div className="Circle"></div></div>

        <img className="ViewImg" alt="결과 이미지" src={img_path} />
        <div className="ViewSubName">{subname}</div>
        <div className="ViewName">{result_name}</div>

        <div className="Position2"><div className="Circle"></div><div className="Circle"></div></div>
    </div>)
}
export default EachResult;