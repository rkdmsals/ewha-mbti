import "./Logo.css"
function Logo() {
    return (<div className="Logo">
        {/* 여러 페이지에 import 되는 페이지는 상대경로(/img)로 작성하기 */}
        <img className="FooterImg" src="/img/Footer/Footer_logo.png" />
    </div>)
}
export default Logo;