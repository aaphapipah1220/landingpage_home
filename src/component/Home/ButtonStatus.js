import React from "react";
import { withRouter } from "react-router-dom";

import {
  getStatusOpen,
  getStatusPending,
  getStatusClosed,
  getStatusSuccess,
  getCountStatusTicket,
} from "../../utils/api";

class ButtonStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: "",
      pending: "",
      closed: "",
      success: "",
    };

    this.onClickButtonOpenHandler = this.onClickButtonOpenHandler.bind(this);
    this.onClickButtonPendingHandler =
      this.onClickButtonPendingHandler.bind(this);
    this.onClickButtonClosedHandler =
      this.onClickButtonClosedHandler.bind(this);
    this.onClickButtonSuccessHandler =
      this.onClickButtonSuccessHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getCountStatusTicket();

    this.setState(() => {
      return {
        open: data[0].open,
        pending: data[0].pending,
        success: data[0].success,
        closed: data[0].closed,
      };
    });
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
          <card
            onClick={this.onClickButtonOpenHandler}
            {...this.state.countTicket}
          >
            Tiket Baru <div>{this.state.open}</div>
          </card>
        </div>
        <div>
          <card onClick={this.onClickButtonSuccessHandler}>
            Tiket Sukses <div>{this.state.success}</div>
          </card>
        </div>
        <div>
          <card onClick={this.onClickButtonPendingHandler}>
            Tiket Tertunda <div>{this.state.pending}</div>
          </card>
        </div>
        <div>
          <card onClick={this.onClickButtonClosedHandler}>
            Tiket Selesai <div>{this.state.closed}</div>
          </card>
        </div>
        ;
      </section>
    );
  }
}

export default withRouter(ButtonStatus);
