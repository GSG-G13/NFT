import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState)
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('/api/login', formData)
            location.href = '/main'
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
        <Nav type='login'/>
        <div className="container auth">
            <div className="auth-box">
                <h2>LogIn</h2>
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
                        <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} />
                        <label>Password</label>
                    </div>
                    <button className="btn">Log In</button>
                </form>
                <p className="haveAcount">I dont have an account <Link to='/Signup'>Sign-up</Link></p>
                <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
            </div>
        </div>
        </>
    )
}
export default Login