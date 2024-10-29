
const getuser = async (req, res) => {

    try {

        const user = req.user;
        res.status(200).json({ success: true, message: 'user found', user })

    } catch (error) {
        res.status(500).json({ success: false, message: 'server error', error: error.message })
    }

}
module.exports = getuser