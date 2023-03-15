function SavedSearchBtn({ value, handleClick }) {
    return (
        <>
        <button onClick={handleClick} value={value}>{value}</button>
        </>
    )
}

export default SavedSearchBtn;