import React from "react";

function Form() {
    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Username</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlPassword" className="form-label">Password</label>
                <input className="form-control" id="exampleFormControlPassword" placeholder= "Password" />

            </div>
            <h3>Log In</h3>

        </div>
    )

}


export default Form;