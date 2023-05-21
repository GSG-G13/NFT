import { useState } from "react"

const Signup = () => {
    const initialState = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return (
        <div className="container">
            <div className="login-box">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange} />
                        <label>Username</label>
                    </div>

                    <div className="input-box">
                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                        <label>Password</label>
                    </div>
                    <div className="input-box">
                        <input type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange} />
                        <label>Confirm password</label>
                    </div>
                    <button className="btn">Sign Up</button>
                </form>

            </div>
        </div>
    )
}
export default Signup