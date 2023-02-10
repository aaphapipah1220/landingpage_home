import React from "react";
import { withRouter } from "react-router-dom";

import BodyContent from "./BodyContent";

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

export default withRouter(ContentList);
