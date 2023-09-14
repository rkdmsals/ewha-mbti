import "./Test.css"
import TestData from "./questions.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Footer/Logo";
import axios from "axios";
function Test() {

    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    // E I N S T F P J
    const [answers, setAnswers] = useState({ "type1": [0, 0,], "type2": [0, 0,], "type3": [0, 0,], "type4": [0, 0,] });
    //결과 페이지 반환
    const ShowResult = () => {
        //그냥 이때 DB에 냅다 올리기, 나중에 id를 같이 줘서 받아오자 (result에서)
        var num = 1
        switch (answers.type1[1]) {

            case 0: case 1:
                num += 2 ** 0 * 1;
                break;

            case 2: case 3:
                num += 2 ** 0 * 0;
                break;
            default:
                break;
        }
        switch (answers.type2[1]) {

            case 0: case 1:
                num += 2 ** 1 * 1;
                break;

            case 2: case 3:
                num += 2 ** 1 * 0;
                break;
            default:
                break;
        }
        switch (answers.type3[1]) {

            case 0: case 1:
                num += 2 ** 2 * 1;
                break;

            case 2: case 3:
                num += 2 ** 2 * 0;
                break;
            default:
                break;
        }
        switch (answers.type4[1]) {

            case 0: case 1:
                num += 2 ** 3 * 1;
                break;

            case 2: case 3:
                num += 2 ** 3 * 0;
                break;
            default:
                break;
        }

        console.log(num)
        // axios
        //     .post("api/data",
        //         {
        //             // id: 1,
        //             MBTI: 1,
        //         })
        //     .then((response) => {
        //         // console.log(response.data.MBTI);
        //         navigate(`/test/result/${id}`);

        //     }).catch((error) => {
        //         console.log("An error occurred: ", error.response);
        //     });

        navigate(`/test/result/${num}`);
    }
    //답변 저장하고 페이지 넘겨주기
    const TakeAnswer = (val) => {
        var answersArr = answers;
        // 변수로 받아온 결과를 배열에 저장 후 업로드
        answersArr[page - 1] = val;
        var type = TestData.questions[page - 1].type;
        switch (type) {
            case "EandI":
                answersArr.type1[val - 1] += 1;
                break;
            case "NandS":
                answersArr.type2[val - 1] += 1;
                break;
            case "TandF":
                answersArr.type3[val - 1] += 1;
                break;
            case "PandJ":
                answersArr.type4[val - 1] += 1;
                break;
            default: break;
        }
        // console.log(answersArr);
        setAnswers(answersArr);
        setPage(page + 1);
    }

    return (<div className="TestBackground">
        {page < 7 ? TestData.questions.map((a, idx) =>
            //progressBar 진행상황의 경우, progressBar안에 작은 네모난 요소를 넣어서 버튼 누를 때마다 하나씩 늘어나도록
            //아니면 버튼 누를 때마다 or a.num 정보를 통해 border길이 or 안의 요소 길이 조정가능
            <div className="TestPage" key={idx} style={{ display: page === idx + 1 ? 'flex' : 'none' }}>
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
        ) : ShowResult()}

    </div >
    )
}

export default Test;