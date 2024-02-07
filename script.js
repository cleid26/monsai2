function SendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_249v3zz", "template_rn6691u", params)
    .then(function (res) {
      alert("Email Sent" + res.status);
    });
}
