const { generateJWTToken } = require('../helpers/JWTToken');
const service = require('../services/loginService');

const login = async (req, res, next) => {
    try {
       const { email } = req.body;
       const data = await service.checkEmailLogin(req.body);
       if (data) {
          const token = generateJWTToken({ email });
          return res.status(200).json({ token });
       }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
};