import "./Test.css"
import TestData from "./questions.json";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Logo from "../../Footer/Logo";
import axios from "axios";
function Test() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    //처음에 12개 질문 답 모두 0으로 지정해두기
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);

    //결과 페이지 반환
    const ShowResult = (answers) => {
        //여기서 EvI 등의 비율 결정, Mbti 결정 후 result페이지에 전달
        navigate("/test/result");
        // navigate(`/test/result/${id}`);
    }

    //답변 저장하고 페이지 넘겨주기
    const TakeAnswer = (val) => {
        var answersArr = answers;
        // 변수로 받아온 결과를 배열에 저장 후 업로드
        answersArr[page - 1] = val;
        // console.log(answersArr);
        setAnswers(answersArr);
        setPage(page + 1)
    }

    return (<div className="TestBackground">
        {
            TestData.questions
                ? TestData.questions.map((a => {
                    //progressBar 진행상황의 경우, progressBar안에 작은 네모난 요소를 넣어서 버튼 누를 때마다 하나씩 늘어나도록
                    //아니면 버튼 누를 때마다 or a.num 정보를 통해 border길이 or 안의 요소 길이 조정가능
                    if (a.num == page) {
                        return <div className="TestPage">
                            <div className="TestInner">
                                <div className="ProgressText">{a.num}/12</div>
                                <div className="ProgressBar">
                                </div>
                                <div className="TestQ">Q.</div>
                                <div className="TestQuestion">{a.content}</div>
                                {/* 만약 1을 택하면 1, 2를 택하면 2가 배열에 들어가도록 */}
                                <button className="Answer1" onClick={() => TakeAnswer(1)}>{a.answer1}</button>
                                <button className="Answer2" onClick={() => TakeAnswer(2)}>{a.answer2}</button>
                                <Logo />
                            </div>
                        </div>
                    }
                })) : <div></div>
        }
        {page == TestData.questions.length ? ShowResult(answers) : <div></div>}

    </div>)
}

export default Test;