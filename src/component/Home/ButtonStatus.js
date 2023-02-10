import React from "react";
import { withRouter } from "react-router-dom";

import {
  getStatusOpen,
  getStatusPending,
  getStatusClosed,
  getStatusSuccess,
} from "../../utils/api";

class ButtonStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTikcet: "",
    };

    this.onClickButtonOpenHandler = this.onClickButtonOpenHandler.bind(this);
    this.onClickButtonPendingHandler =
      this.onClickButtonPendingHandler.bind(this);
    this.onClickButtonClosedHandler =
      this.onClickButtonClosedHandler.bind(this);
    this.onClickButtonSuccessHandler =
      this.onClickButtonSuccessHandler.bind(this);
  }

  async onClickButtonOpenHandler(event) {
    event.preventDefault();
    const statusTicket = await getStatusOpen("open");
    console.log(statusTicket.data);

    this.props.history.push({
      pathname: `/content-list`,
      state: {
        data: statusTicket.data,
      },
    });
  }

  async onClickButtonSuccessHandler(event) {
    event.preventDefault();
    const statusTicket = await getStatusSuccess("success");
    console.log(statusTicket.data);

    this.props.history.push({
      pathname: `/content-list`,
      state: {
        data: statusTicket.data,
      },
    });
  }

  async onClickButtonPendingHandler(event) {
    event.preventDefault();
    const statusTicket = await getStatusPending("pending");
    console.log(statusTicket.data);

    this.props.history.push({
      pathname: `/content-list`,
      state: {
        data: statusTicket.data,
      },
    });
  }

  async onClickButtonClosedHandler(event) {
    event.preventDefault();
    const statusTicket = await getStatusClosed("closed");
    console.log(statusTicket.data);

    this.props.history.push({
      pathname: `/content-list`,
      state: {
        data: statusTicket.data,
      },
    });
  }

  render() {
    return (
      <section>
        <div>
          <card onClick={this.onClickButtonOpenHandler}>Tiket Baru</card>
        </div>
        <div>
          <card onClick={this.onClickButtonSuccessHandler}>Tiket Sukses</card>
        </div>
        <div>
          <card onClick={this.onClickButtonPendingHandler}>Tiket Tertunda</card>
        </div>
        <div>
          <card onClick={this.onClickButtonClosedHandler}>Tiket Selesai</card>
        </div>
        ;
      </section>
    );
  }
}

export default withRouter(ButtonStatus);
