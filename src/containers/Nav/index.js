import React from 'react';
import { connect } from 'umi';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${require('../../../public/background.png')}) repeat center;
  background-size: cover;
  font-size: 70px;
  font-weight: bold;
  .title {
    color: #000;
  }
`;

class Nav extends React.Component {
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'app/save',
    //   payload: {
    //     projectName: 'My GitHub Page',
    //   },
    // });
  }

  render() {
    const { projectName, link } = this.props;
    return (
      <Wrapper>
        <div className={'title'}>Welcome to</div>
        <a href={link}>{projectName}</a>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  projectName: state.app.projectName,
  link: state.app.link,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Nav);
