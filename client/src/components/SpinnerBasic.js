import { Dimmer, Segment, Image, Loader } from "semantic-ui-react";

export default (props) => {
  return (
    <>
      <Segment inverted>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        {props.paragraph && (
          <div class="ui placeholder">
            <div class="image header">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="paragraph">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        )}
      </Segment>
    </>
  );
};
