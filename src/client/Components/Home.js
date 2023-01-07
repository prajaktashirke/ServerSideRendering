import React, { Fragment } from "react";

const Home = () => {
    return (
        <div>
            <div> I am on home page</div>
            <button onClick={() => console.log("press me")}>Press Me!</button>
        </div>
    )
}

export default Home;