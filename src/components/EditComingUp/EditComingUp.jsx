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
            <h1>Edit Coming Up</h1>
            <center>
                <div>
                    <form onSubmit={addComingUp}>
                        <input className="editComingUpForm" type="text" value={description} placeholder="Coming Up"
                            onChange={(e) => setDescription(e.target.value)}/>
                        <button className="btn">Add</button>
                    </form>
                </div>
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
            </center>
        </div>
    );
}