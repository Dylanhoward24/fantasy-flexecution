import axios from "axios";
import { useDispatch } from "react-redux";

export default function ModifyTagsItem( {tag} ) {
    const dispatch = useDispatch();

    // get id of tag passed through local props
    let id = tag.id;

    function deleteTag() {
        axios.delete(`/api/tags/${id}`)
            .then(() => {
                dispatch({
                    type: 'FETCH_TAGS'
                });
            });
    }

    return (
        <>
            <td>{tag.tag}</td>
            <td>{tag.description}</td>
            <td>
                <button onClick={deleteTag}>Delete</button>
            </td>
        </>
    );
}