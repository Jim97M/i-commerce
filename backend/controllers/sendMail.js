const nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "<Your Email>",
        pass: "<Password>",
    },
});

module.exports.sendResetEmail = async (email, token) => {
  //Change First Part To Domain
  var url = "http://localhost:8000/user/reset-password?token" + token;
  await smtpTransport.sendMail({
      from: "<email>",
      to: email,
      subject: "RESET YOUR PASSWORD",
      text: `Click on this link to reset your password ${url}`,
      html: `<h3>Click on this link to reset your password : ${url} </h3>`,
  });
};

module.exports.sendVerifyEmail = async (email, token) => {
    //Change First Part To Your Domain
    var url = "http://localhost:8000/user/verifyemail?token=" + token;

    await smtpTransport.sendMail({
        from: "email",
        to: email,
        subject: "Verify Your Email",
        text: `Click on this link to verify ${url}`,
        html: `<h3> Click on this link to verify your email: ${url} </h3>`,
    });
};



