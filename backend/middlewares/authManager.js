import jwt from 'jsonwebtoken'

//manager authentication middleware

const authManager = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({
                success: false,
                message: "not authorized"
            })
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)

        req.body.manId = token_decode.id
        req.user = {id: token_decode.id}

        next()

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

export default authManager