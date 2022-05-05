const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "46ac05c918d986",
      pass: "81c0c7665069ef"
    }
  });

  module.exports = transport