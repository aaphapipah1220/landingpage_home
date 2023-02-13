import React from "react";
import { Link } from "react-router-dom";

const BodyContent = (props) => {
  let data = props.data;

  if (!data.length) {
    return <p className="body__content-null">Belum ada tiket</p>;
  }

  return (
    <section className="container">
      <div className="body__content-container">
        {data.map((rows) => {
          return (
            <div className="body__content">
              <p className="body__content-status">
                <b>{rows.status}</b>
              </p>
              <p className="body__content-noticket">
                <Link to={`/ticket/${rows.noTicket}`}>{rows.noTicket}</Link>
              </p>
              <p className="body__content-customer">{rows.customer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BodyContent;
