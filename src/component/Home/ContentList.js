import React from "react";
import { withRouter } from "react-router-dom";

import BodyContent from "./BodyContent";

// import MapContent from "./MapContent";

class ContentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.history.location.state,
    };
  }

  render() {
    return <BodyContent data={this.state.data.data.rows} />;
  }
}

// function ContentList({ rows }) {
//   return rows.map((status) => <BodyContent key={status.status} {...status} />);
// }

export default withRouter(ContentList);
