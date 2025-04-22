

function RegisterUI() {
    return (
        <div className="form__container">
            <div className="form__content">
                <div className="form__logo">Disgame</div>
                <div className="form__title">Create an account</div>
                <div className="form__subtitle">Fill in the details to register</div>
                
                <form>
                    <div className="form__group form__group-mb">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form__control" />
                    </div>

                    <div className="form__group form__group-mb">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form__control" />
                    </div>

                    <div className="form__group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" className="form__control" />
                    </div>

                    <input type="submit" className="form__button" value="Register" />
                </form>
                
                <div className="form__infos">Already have an account? <a href="#">Login</a></div>
            </div>
        </div>
    );
}

export default RegisterUI;