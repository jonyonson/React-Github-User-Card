import React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
  render() {
    const { name, username, imageUrl } = this.props;
    return (
      <StyledCard>
        <Avatar src={imageUrl} alt="" />
        <div>
          <div>{name}</div>
          <div>{username}</div>
        </div>
      </StyledCard>
    );
  }
}

export default Card;

const StyledCard = styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 600px;
  max-width: 80%;
  margin: 20px auto;
  display: flex;
`;

const Avatar = styled.img`
  width: 100px;
  margin-right: 10px;
`;
