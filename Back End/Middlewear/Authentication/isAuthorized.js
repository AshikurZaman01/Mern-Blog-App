
const isAuthorized = (...roles) => {
    
    return (req, res, next) => {
    
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({ message: `${req.user.role} is not allowed to access this resource.` });
        }

        next();
        
    };
};

module.exports = isAuthorized;
