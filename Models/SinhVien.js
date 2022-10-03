const db = require("../Dbconnection");

const SinhVien = {
  getAllSinhVien: (callback) => {
    return db.query("Select * from sinhvien", callback);
  },
  getSinhVienById: (id, callback) => {
    return db.query("select * from sinhvien where Id=?", [id], callback);
  },
  addSV: (sinhvien, callback) => {
    return db.query(
      "Insert into sinhvien(name,class,dob) values(?,?,?)",
      [sinhvien.name, sinhvien.class, sinhvien.dob],
      callback
    );
  },
  deleteSV: (id, callback) => {
    return db.query("delete from sinhvien where Id=?", [id], callback);
  },
  updateSV: (id, sinhvien, callback) => {
    return db.query(
      "update sinhvien set name=?,class=?,dob=? where Id=?",
      [sinhvien.name, sinhvien.class, sinhvien.dob, id],
      callback
    );
  },
};
module.exports = SinhVien;
