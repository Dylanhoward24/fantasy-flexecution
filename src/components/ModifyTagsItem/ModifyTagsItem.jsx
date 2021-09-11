export default function ModifyTagsItem( {tag} ) {
    return (
        <>
            <td>{tag.tag}</td>
            <td>{tag.description}</td>
            <td>
                <button>Delete</button>
            </td>
        </>
    );
}