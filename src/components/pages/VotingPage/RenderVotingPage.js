import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { VotingForm } from '../../common';
import EmojiContainer from '../../common/EmojiContainer';

const RenderVotingPage = props => {
  console.log(props);
  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" displayMenu={true} />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <img
                className="WritingandDrawingIcon"
                src={props.votes.Submission1.ImgURL}
                alt="writing submission"
              />
            </div>
            <EmojiContainer
              submissionId={props.votes.Submission1.ID}
              sender={props.child.id}
            />
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <img
                className="WritingandDrawingIcon"
                src={props.votes.Submission2.ImgURL}
                alt="writing submission"
              />
            </div>
            <EmojiContainer
              submissionId={props.votes.Submission2.ID}
              sender={props.child.id}
            />
            <VotingForm
              FaceoffID={props.votes.ID}
              MemberID={props.child.memberId}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
