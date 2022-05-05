import AdminServices from "../services/AdminServices";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let teacherData = await AdminServices.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: teacherData.errCode,
        message: teacherData.errMessage,
        user: teacherData.user ? teacherData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin,
}