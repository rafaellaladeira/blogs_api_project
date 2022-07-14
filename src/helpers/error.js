const error = [
    {
        status: 400,
        message: 'Some required fields are missing', // [0]
    },
    {
        status: 400,
        message: 'Invalid fields', // [1]
    },
    {
        status: 400,
        message: '"displayName" length must be at least 8 characters long', // [2]
    },
    {
        status: 400,
        message: '"email" must be a valid email', // [3]
    },
    {
        status: 400,
        message: '"password" length must be at least 6 characters long', // [4]
    },
    {
        status: 409,
        message: 'User already registered', // [5]
    },
    {
        status: 401,
        message: 'Token not found', // [6]
    },
    {
        status: 401,
        message: 'Expired or invalid token', // [7]
    },
    {
        status: 404,
        message: 'User does not exist', // [8]
    },
];

module.exports = error;