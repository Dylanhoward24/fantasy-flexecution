import axios from "axios";
import { useDispatch } from "react-redux";

export default function EditComingUpItem( {item} ) {
    const dispatch = useDispatch();

    // get id of item passed through local props
    let id = item.id;

    function deleteComingUp() {
        axios.delete(`/api/coming-up/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_COMING_UP'
                });
            });
    }

    return (
        <>
            <td>{item.description}</td>
            <td>
                <button onClick={deleteComingUp}>Delete</button>
            </td>
        </>
    );
}