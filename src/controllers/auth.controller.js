const { jwtSign } = require("../utils/token.utils");

exports.login = async (req, res) => {
    try {
        
        const {password, name} = req.body;
    
        const payload = {
            ...req.user
        }

        const token = jwtSign(payload);
        if(token) {
            payload['token'] = token;
        }

        return res.status(200).send({message : "Logged in successfully", data: payload});

    } catch (error) {
        return res.status(500).send({error : "Internal Server Error"})
    }
}