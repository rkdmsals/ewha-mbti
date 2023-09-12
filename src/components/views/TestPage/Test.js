import "./Test.css"
import TestData from "./questions.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../Footer/Logo";
function Test() {
    const navigate = useNavigate();
    //
    // const [contents, setContents] = useState(TestData.questions);
    // const [qNumber, setQNumber] = useState(0);
    // const [progress, setProgress] = useState(0);
    // const [mId, setMId] = useState(0);
    // const [questions, setQuestions] = useState([]);
    // //
    let { num } = useParams();
    return (<div className="TestBackground">
        {TestData.questions
            ? TestData.questions.map((a => {
                //progressBar 진행상황의 경우, progressBar안에 작은 네모난 요소를 넣어서 버튼 누를 때마다 하나씩 늘어나도록
                //아니면 버튼 누를 때마다 or a.num 정보를 통해 border길이 or 안의 요소 길이 조정가능
                if (a.num == num) {
                    return <div className="TestPage">
                        <div className="TestInner">
                            <div className="ProgressText">{a.num}/12</div>
                            <div className="ProgressBar">
                            </div>
                            <div className="TestQ">Q.</div>
                            <div className="TestQuestion">{a.content}</div>
                            <button className="Answer1">{a.answer1}</button>
                            <button className="Answer2">{a.answer2}</button>
                            <Logo />
                        </div>
                    </div>
                }
            })) : <div></div>
        }

    </div>)
}

export default Test;