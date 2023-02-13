import React from "react";

function FiturWhatsapp() {
  return (
    <div className="landingpage__fitur-chat">
      <a
        href="https://api.whatsapp.com/send/?phone=6285775564845&text=Harap+lengkapi+data+dibawah+yaa..%0aNama+:%0aPerusahaan+:%0aPesan+:&type=phone_number&app_absent=0"
        className="whatsApp-logo"
        style={{ color: "green" }}
      >
        <i class="fab fa-whatsapp fa-3x"></i>
      </a>
    </div>
  );
}

export default FiturWhatsapp;
