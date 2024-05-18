const con = require("./../config/db");
const { validationResult } = require('express-validator');
 module.exports = async (req,res,next) => {
    try {
        const {email, phone} = req.body;
      
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

      
        if(!req.file) {
            return res.status(400).send({errors : [{
                "type": "field",
                "msg": "Photo field cannot be empty",
                "path": "photo",
                "location": "req.file"
            }]})
        }
        const sql = 'SELECT * FROM patient WHERE email = ? OR phone = ? ';
        const rows = await query(sql, [email, phone]);
        
        if(rows.length) {
            return res.status(404).send({error : "Patient already registered"})
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
