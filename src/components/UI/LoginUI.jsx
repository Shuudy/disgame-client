

function LoginUI() {
    return (
        <div className="form__container">
            <div className="form__content">
                <div className="form__logo">Disgame</div>
                <div className="form__title">Welcome back</div>
                <div className="form__subtitle">Enter your credentials to access your account</div>
                
                <form>
                    <div className="form__group form__group-mb">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form__control" />
                    </div>

                    <div className="form__group">
                        <div className="form__label-container">
                            <label htmlFor="password">Password</label>
                            <a className="form__forgot-password" href="#">Forgot password?</a>
                        </div>
                        
                        <input type="password" id="password" className="form__control" />
                    </div>

                    <input type="submit" className="form__button" value="Login" />
                </form>
                
                <div className="form__infos">Don’t have an account? <a href="#">Register</a></div>
            </div>
        </div>
    );
}

export default LoginUI;