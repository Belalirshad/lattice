exports.create = async (req,res) => {
    try {
        const patients = [];
        res.send({data : patients})
    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"})
    }
}
exports.getPsychatrist = async (req,res) => {
    try {
        const patients = [];
        res.send({data : patients})
    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"})
    }
}