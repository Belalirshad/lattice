
const con = require("./../config/db");
const bcryptjs = require("bcryptjs");
const cloudinary = require("./../utils/cloudinary.utils")


const SALT = Number(process.env.SALT);
exports.create = async (req, res) => {
  try {
   

    const { name, email, password,address, photo, phone } = req.body;
    const { p_id } = req.user;

   
    const result = await cloudinary.uploader.upload(req.file.path);
    
   
    const imageurl = result?.secure_url;
    
    // encrypting the password
    var salt = bcryptjs.genSaltSync(SALT);
    var hash = bcryptjs.hashSync(password, salt);
    const sql =
      "INSERT INTO PATIENT (name, email,password,address, photo, phone,p_id) VALUES (?, ?,?,?,?,?,?)";
    con.query(
      sql,
      [name, email, hash, address, imageurl, phone, p_id],
      (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          return;
        }
        console.log("Data inserted successfully. Insert ID:", result.insertId);
        con.query("UPDATE psychiatrist SET count = count + 1 WHERE p_id  = ?", [p_id])
        return res
          .status(201)
          .send({ message: "Patient created successfully", data: result });
      }
    );
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
exports.getPsychatristList = async (req, res) => {
  try {
    // const sql = "SELECT psychiatrist.hospital_id, hospital.name AS hospital_name, COUNT(psychiatrist.p_id) AS total_psychiatrists, SUM(psychiatrist.count) AS total_patient, GROUP_CONCAT(CONCAT AS psychiatristDetails FROM psychiatrist LEFT JOIN hospital ON psychiatrist.hospital_id = hospital.hospital_id GROUP BY psychiatrist.hospital_id, hospital.name;";
    const sql = "SELECT psychiatrist.hospital_id, hospital.name AS hospital_name, COUNT(psychiatrist.p_id) AS total_psychiatrists, SUM(psychiatrist.count) AS total_patient, JSON_ARRAYAGG(JSON_OBJECT('Id', psychiatrist.p_id, 'Name', psychiatrist.name, 'Patients count', psychiatrist.count)) AS psychiatristDetails FROM psychiatrist LEFT JOIN hospital ON psychiatrist.hospital_id = hospital.hospital_id GROUP BY psychiatrist.hospital_id, hospital.name;";

    let data = [];
    con.query(sql, (err, result) => {
      if (err) {
        console.error("Error:", err);
        res.status(500).send({ error: "Internal server error" });
      } else {
       
        console.log(result);
         result.map((r) => {
           data.push({
  
             "Hospital Name": r.hospital_name,
             "Total Psychiatrist count": r.total_psychiatrists,
             "Total patients count": r.total_patient,
             "Psychiatrist Details": JSON.parse(r.psychiatristDetails)
           })
         })
         res.status(200).json(data);
      }
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
