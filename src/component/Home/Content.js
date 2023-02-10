import React from "react";
// import BodyContent from "./BodyContent";

import ButtonStatus from "./ButtonStatus";
// import ContentList from "./ContentList";

class Content extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: this.props.history.state,
  //   };
  // }

  render() {
    return (
      <section>
        <div>
          <ButtonStatus />
        </div>
        {/* <div>
          <BodyContent data={this.state.data.data} />;
        </div> */}
      </section>
    );
  }
}

export default Content;
