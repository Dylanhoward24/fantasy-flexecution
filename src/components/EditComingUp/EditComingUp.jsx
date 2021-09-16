import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import EditComingUpItem from "../EditComingUpItem/EditComingUpItem";
import './EditComingUp.css';

export default function EditComingUp() {
    const dispatch = useDispatch();

    let [description, setDescription] = useState('');
    const comingUp = useSelector(store => store.comingUp);

    function addComingUp(e) {
        e.preventDefault();

        // post local state to the db
        axios.post('/api/coming-up', {description})
            .then(() => {
                // then shout to fetch/set global state
                // equal to the new db values after post
                dispatch({
                    type: 'FETCH_COMING_UP'
                });
            });
        
        // clear the input field
        setDescription('');
    }

    return (
          <div className="container">
            <h2>Edit Coming Up</h2>
            <h4>Add new</h4>
            <form onSubmit={addComingUp}>
                <textarea value={description} placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button>Add</button>
            </form>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {comingUp.map((item, i) => (
                    <tr key={i}>
                        <EditComingUpItem
                            item={item}
                        />
                    </tr>
                ))}
                </tbody>
            </table>

          </div>
    );
}