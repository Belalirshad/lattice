const con = require("./../config/db");
const { validationResult } = require('express-validator');
 module.exports = async (req,res,next) => {
    try {
        const {name} = req.body;
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const sql = 'SELECT * FROM psychiatrist WHERE name = ?';
        const rows = await query(sql, [name]);
        console.log(rows);
        if(!rows.length) {
            return res.status(404).send({error : "Psychiatrist not found"})
        }
        req.user = rows[0];
        next();
    } catch (error) {
        return res.status(500).send({error : "Internal Server Error"})
    }
  }


  function query(sql, args) {
    return new Promise((resolve, reject) => {
        con.query(sql, args, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}
