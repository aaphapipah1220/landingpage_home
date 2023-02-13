import React from "react";

const TicketItem = (props) => {
  return (
    <section>
      <div className="container ticket__item">
        <ul>
          <li className="ticket__item-list-noTicket">
            <b>No Tiket: {props.data.noTicket}</b>
          </li>
          <li className="ticket__item-list">
            Tanggal Tiket: {props.data.resiAccepted}
          </li>
          <li className="ticket__item-list">
            Masa Garansi: {props.data.guaranteeDate}
          </li>
          <li className="ticket__item-list">
            Pelanggan: {props.data.customer}
          </li>
          <li className="ticket__item-list-status">
            <b>Status: {props.data.status}</b>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TicketItem;
