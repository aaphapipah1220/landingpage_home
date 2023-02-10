import React from "react";

const TicketDetail = (props) => {
  let data = props.data.rows[0];
  console.log(data);
  return (
    <section>
      <div className="container ticket__item">
        <ul>
          <li className="ticket__item-list-noTicket">
            No Tiket: {data.noTicket}
          </li>
          <li className="ticket__item-list">
            Tanggal Tiket: {data.resiAccepted}
          </li>
          <li className="ticket__item-list-status">Status: {data.status}</li>
          <li className="ticket__item-list">Pelanggan: {data.customer}</li>
          <li className="ticket__item-list">
            Detail Pelanggan: {data.detailCustomer}
          </li>
          <li className="ticket__item-list">Tipe: {data.type}</li>
          <li className="ticket__item-list">Masalah: {data.case}</li>
          <li className="ticket__item-list">Catatan: {data.remark}</li>
          {/* <li>Masa Garansi: {props.data.status}</li> */}
        </ul>
      </div>
    </section>
  );
};

export default TicketDetail;
