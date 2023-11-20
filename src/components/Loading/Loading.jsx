import style from "./Loading.module.css"
import loading from "../../assets/loading.gif";

const Loading = () => {
    return (
        <div className={style.loading}  role="status">
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loading;