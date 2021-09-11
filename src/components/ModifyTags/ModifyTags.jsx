import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ModifyTagsItem from "../ModifyTagsItem/ModifyTagsItem";

export default function ModifyTags() {
    const dispatch = useDispatch();

    let [tag, setTag] = useState('');
    let [description, setDescription] = useState('');
    const tags = useSelector((store) => store.tags);

    function addNewTag(e) {
        e.preventDefault();

        // post local state to the db
        axios.post('/api/tags', {tag, description})
            .then(() => {
                // then shout to fetch/set global state
                // equal to the new db values after post
                dispatch({
                    type: 'FETCH_TAGS'
                });
            });
        
        // clear the input field
        setDescription('');
    }

    return (
        <div className="container">
            <center>
                <h2>Modify Tags</h2>
            </center>
            <h4>Add a new tag</h4>
            <form onSubmit={addNewTag}>
                <textarea value={description} placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input type="text" value={tag} placeholder="Tag" 
                    onChange={(e) => setTag(e.target.value)}/>
                <button>Add</button>
            </form>
            <h4>Current Tags</h4>
            <table>
                <tr>
                    <th>Tag</th>
                    <th>Description</th>
                    <th>Remove</th>
                </tr>
                {tags.map((tag, i) => (
                    <tr key={i}>
                        <ModifyTagsItem
                            tag={tag}
                        />
                    </tr>
                ))}
            </table>
        </div>
    );
}