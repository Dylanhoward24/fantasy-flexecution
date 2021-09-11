import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function EditAddPlayers() {
    const dispatch = useDispatch();

    // local state
    let [newPlayer, setNewPlayer] = useState({
        firstName: '', lastName: '', position: 0, team: 0, tags: 0
    });
    // global state
    const positions = useSelector((store) => store.positions);
    // const teams = useSelector((store) => store.teams);
    const tags = useSelector((store) => store.tags);

    function addNewPlayer() {

    }

    return (
        <div className="container">
            <center>
                <h2>Add Player</h2>

                <pre>{JSON.stringify(newPlayer)}</pre>
                <form onSubmit={addNewPlayer}>
                    <input type="text" value={newPlayer.firstName} placeholder="First Name"
                        onChange={(e) => setNewPlayer({...newPlayer, firstName: e.target.value})}/>
                    <input type="text" value={newPlayer.lastName} placeholder="Last Name"
                        onChange={(e) => setNewPlayer({...newPlayer, lastName: e.target.value})}/>
                </form>
            </center>

        </div>
    );
}