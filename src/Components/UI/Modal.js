import style from "./Modal.module.css";
import ReactDOM from "react-dom";

function FullScreenModal(props) {
    const id = `${props.id} ${style["modal"]}`;
    return (
        <div className={style["fullscreen-backdrop"]} onClick={props.onCancel}>
            <div className={id}>
                <div className={style["modal__message"]}>
                    <p> {props.message} </p>
                </div>
                <div classname={style["modal__children"]}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <FullScreenModal
                    id={props.id}
                    onCancel={props.onCancel}
                    message={props.message}
                >
                    {props.children}
                </FullScreenModal>,
                document.getElementById("modal-root")
            )}
        </>
    )
}