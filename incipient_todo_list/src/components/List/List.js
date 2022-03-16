import styles from './List.module.css';

const List = (props) => {

    const list = props.value.map((itemObj, index) => {
        return (
            <li key={index} className={itemObj.isDone ? `${styles.doneItem}` : styles.list}>

                {!itemObj.isEditing && (
                    <>
                        <div >
                            <b className={styles.listitem}>{itemObj.itemName}</b>
                        </div>

                        <button className={styles.btn} onClick={() => { props.onEditClickHandler(index) }}> Edit </button>

                        {/* Conditional rendering logic */}
                        {itemObj.isDone && (
                            <button className={styles.btn} onClick={() => { props.onDeleteClickHandler(index) }}>
                                Delete
                            </button>
                        )}

                        {!itemObj.isDone && (
                            <button className={styles.btn} onClick={() => { props.onDoneClickHandler(index) }}>
                                Done
                            </button>
                        )}



                    </>
                )}

                {itemObj.isEditing && (
                    <>
                        <div>
                            <input className={styles.edit}
                                type="text"
                                value={itemObj.editItemName}
                                onChange={(event) => {
                                    props.onEditInputChangeHandler(index, event);
                                }} />
                            <button className={styles.btn}
                                onClick={() => { props.onEditSaveHandler(index) }}>
                                Save
                            </button>
                            <button className={styles.btn}
                                onClick={() => { props.onEditCancelHandler(index) }}>
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </li>
        );
    });


    return (
        <ul>{list}</ul>
    );
};

export default List;