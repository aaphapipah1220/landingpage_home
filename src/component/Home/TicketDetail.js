import React from "react";

const TicketDetail = (props) => {
  let data = props.data.rows[0];
  console.log(data);
  return (
    <section>
      <div className="container">
        <div className="ticket__detail-container">
          <h5 className="ticket__detail-list-noTicket">
            No Tiket: {data.noTicket}
          </h5>
          <p className="ticket__detail-list">
            Tanggal Tiket: {data.resiAccepted}
          </p>
          <p className="ticket__detail-list-status">Status: {data.status}</p>
          <p className="ticket__detail-list">Pelanggan: {data.customer}</p>
          <p className="ticket__detail-list">
            Detail Pelanggan: {data.detailCustomer}
          </p>
          <p className="ticket__detail-list">Tipe: {data.type}</p>
          <p className="ticket__detail-list">Masalah: {data.case}</p>
          <p className="ticket__detail-list">Catatan: {data.remark}</p>
          <p className="ticket__detail-list">
            Masa Garansi: {data.guaranteeDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TicketDetail;
