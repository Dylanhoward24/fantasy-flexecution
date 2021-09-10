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

        axios.post('/api/coming-up', {description})
            .then(() => {
                dispatch({
                    type: 'FETCH_COMING_UP'
                });
            });

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
                <tr>
                    <th>Description</th>
                    <th>Remove</th>
                </tr>
                {comingUp.map((item, i) => (
                    <tr key={i}>
                        <EditComingUpItem
                            item={item}
                        />
                    </tr>
                ))}
            </table>

          </div>
    );
}