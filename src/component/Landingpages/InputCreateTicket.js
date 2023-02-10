import React from 'react';
import { useRef } from 'react';

import emailjs from 'emailjs-com';


const InputCreateTicket = () => {
    const form = useRef();

    const sendEmail = (e) => {
        alert('Permintaan kamu sudah kami terima. Kami akan menghubungi kamu kembali. Terima kasih!')
        e.preventDefault();

        emailjs.sendForm('service_lmpwq3g', 'template_imfokg1', form.current, '7RakILCW1_Kp8M7yn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
      e.target.reset()
    };

    return (
        <section className='container-fluid mt-3 '>
            <form ref={form} onSubmit={sendEmail}>
            <div class="form-group">
            <label>Nama</label>
            <input id='name' type='text' class="form-control" name='name' placeholder='Nama lengkap' required />
            </div>
            <div class="form-group">
            <label>Email</label>
            <input id='email' type='email' class="form-control" name='email' placeholder='Email' required />
            </div>
            <div class="form-group">
            <label>No Handphone</label>
            <input id='number' type='number' class="form-control" name='number' placeholder='Nomor Telpon atau WhatsApp' required />
            </div>
            <div class="form-group">
            <label>Problem</label>
            <textarea id='message' class="form-control" name='message' rows='9' placeholder='Pesan atau keluhan yang dihadapi' required></textarea>
            </div>
            <div class="form-group">
            <label>Company</label>
            <input id='company' type='text' class="form-control" name='company' placeholder='Nama Perusahaan' required />
            </div>
                <button type='submit' className='btn btn-info'>
                    Create Ticket
                </button>
            </form>  
        </section>
    )
}

export default InputCreateTicket;
