import style from "./Modal.module.css";

export default function Modal(props) {
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