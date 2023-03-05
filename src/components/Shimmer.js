const Shimmer=()=>{
    return(
        <div className="shimmer-container">
            <div className="restaurant-list">
                {Array(10).fill("").map(e=><div className="shimmer-card"></div>)}
            </div>
        </div>
    )
}

export default Shimmer;