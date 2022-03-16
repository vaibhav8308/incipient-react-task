import '../Button/Button.css'
const Button = (props) => {
    return (
        <div >
            <button className="btn"
                onClick={props.onClickHandler}
            >Add Task
            </button>
        </div>
    );
};
export default Button;
