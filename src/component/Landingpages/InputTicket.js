import React from "react";
import { withRouter } from "react-router-dom";
import { getTicketNoToken } from "../../utils/api";

class InputTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async onSubmitHandler(event) {
    event.preventDefault();
    const ticket = await getTicketNoToken(this.state.keyword);
    console.log(ticket.data);
    this.props.history.push({
      pathname: `/ticket-item-page`,
      state: {
        data: ticket.data,
      },
    });
  }

  onKeywordChangeHandler(event) {
    const { value } = event.target;
    console.log(this.state.keyword);

    this.setState(() => {
      return {
        keyword: value,
      };
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center container mb-3 pb-3 input-ticket">
        <div>
          <div>
            <form onSubmit={this.onSubmitHandler}>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Masukkan nomor tiket"
                value={this.state.keyword}
                onChange={this.onKeywordChangeHandler}
              />
              <button
                type="submit"
                className="btn btn-primary d-flex justify-content-center align-items-center container mt-3"
              >
                Cek
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InputTicket);
