import '../Input/Input.css'
const Input = (props) => {
    return (
        <div >
            <input className="input" type="text" placeholder='Enter the task' value={props.value}
                onChange={props.onChangeHandler}
                onKeyUp={props.onKeyHandler} />
        </div>
    );
};
export default Input;