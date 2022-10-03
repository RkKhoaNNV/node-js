var express = require("express");
var router = express.Router();
var SinhVien = require("./Models/SinhVien");

router.get("/:id?", function (req, res, next) {
  if (req.params.id) {
    SinhVien.getSinhVienById(req.params.id, function (err, rows) {
      if (err) {
        res.jsonp({
          payload: err,
          status: res.statusCode,
          message: "Error",
        });
      } else {
        res.jsonp({
          payload: rows,
          status: res.statusCode,
          message: "OK",
        });
      }
    });
  } else {
    SinhVien.getAllSinhVien(function (err, rows) {
      if (err) {
        res.jsonp({
          payload: err,
          status: res.statusCode,
          message: "Error",
        });
      } else {
        res.jsonp({
          payload: rows,
          status: res.statusCode,
          message: "OK",
        });
      }
    });
  }
});

router.post("/", function (req, res, next) {
  SinhVien.addSV(req.body, function (err, count) {
    if (err) {
      res.jsonp({
        payload: err,
        status: res.statusCode,
        message: "Error",
      });
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  SinhVien.deleteSV(req.params.id, function (err, count) {
    if (err) {
      res.jsonp({
        payload: err,
        status: res.statusCode,
        message: "Error",
      });
    } else {
      res.jsonp({
        status: res.statusCode,
        message: "Successfully",
      });
    }
  });
});

router.put("/:id", function (req, res, next) {
  SinhVien.updateSV(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.jsonp({
        payload: err,
        status: res.statusCode,
        message: "Error",
      });
    } else {
      res.jsonp({
        payload: rows,
        status: res.statusCode,
        message: "OK",
      });
    }
  });
});
module.exports = router;
