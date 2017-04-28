import React from 'react';
import { connect } from 'react-redux';
import { getAllRewards } from '../../../actions/reward_actions';

class RewardsShowPage extends React.Component {
  constructor(props) {
    super(props);

  }
  //
  // componentWillMount() {
  //   this.props.getAllRewards(this.props.campaignId);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (newProps != this.props) {
  //     this.state.rewards = this.props.rewards;
  //   }
  // }

  render() {
    let rewardTiles = null;

    rewardTiles= this.props.rewards.map((rew, idx) => {
      if (rew.campaign_id === parseInt(this.props.campaignId)) {
        return(
          <div className="rewards-item" key={idx}>
            <div className="rew-img">
              <img src={rew.image}/>
            </div>

            <div className="rewards-details">
            <div className="rewards-price">${rew.price} <span>USD</span></div>
              <div className="reward--title">{rew.title}</div>
              <div className="rewards-title">{rew.description}</div>
            </div>
          </div>
        );
      } else {
        return (<div/>);
      }
    });


    if (this.props.rewards.length > 0 && this.props.rewards[0].campaign_id === parseInt(this.props.campaignId)) {

      return(
        <div className="rewards-show-page">
          { rewardTiles }
        </div>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  }
}

// const mapStateToProps = (state, ownProps) => {
//
//   let campaignId = ownProps.params ? ownProps.params.id : state.campaigns.campaign.id;
//   return {
//     campaignId: campaignId
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllRewards: (id) => dispatch(getAllRewards(id))
//   };
// };

export default RewardsShowPage;
