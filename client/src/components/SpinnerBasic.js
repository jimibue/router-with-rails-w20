import { Dimmer, Segment, Image, Loader } from "semantic-ui-react";

export default (props) => {
  return (
    <>
      <Segment inverted>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        {props.paragraph && (
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        )}
      </Segment>
    </>
  );
};
