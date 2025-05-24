const express = require('express');
const router = express.Router();
const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
//dang nhap co the tao session, token -> dung post(get truyen qua URL)
router.post("/admin", async (req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username});
        if(admin.password !== password){
            return res.status(401).json({message: "Invalid password"});
        }
        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role}, 
        JWT_SECRET_KEY, {expiresIn: '1h'});
        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role,
            }
        });
    } catch (error) {
        console.error("Failed to login as admin", error);
        res.status(500).json({message: "Failed to login as admin"});
    }
})

module.exports = router;
