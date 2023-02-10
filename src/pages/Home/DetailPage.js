import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

import TicketDetail from "../../component/Home/TicketDetail";

import { getTicket } from "../../utils/api";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: null,
      initializing: false,
    };
  }

  async componentDidMount() {
    const { data } = await getTicket(this.props.id);
    if (data.error) {
      this.setState(() => {
        return {
          initializing: true,
        };
      });
    } else {
      this.setState(() => {
        return {
          ticket: { data },
          initializing: false,
        };
      });
    }
  }

  render() {
    if (this.state.initializing) {
      return <p>Tidak ada Tiket</p>;
    }

    if (this.state.ticket) {
      return (
        <section>
          <TicketDetail data={this.state.ticket.data} />
        </section>
      );
    }
  }
}

export default withRouter(DetailPageWrapper);
