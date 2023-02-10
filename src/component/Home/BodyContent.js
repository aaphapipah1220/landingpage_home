import React from "react";
import { Link } from "react-router-dom";

const BodyContent = (props) => {
  let data = props.data;

  if (!data.length) {
    return <p>Belum ada tiket</p>;
  }

  return (
    <section>
      <div>
        {data.map((rows) => {
          return (
            <ul>
              <li className="body__content-status">
                <b>{rows.status}</b>
              </li>
              <li>
                <Link to={`/ticket/${rows.noTicket}`}>{rows.noTicket}</Link>
              </li>
              <li>{rows.customer}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default BodyContent;
