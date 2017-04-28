import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS, RECEIVE_REWARD_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';


const RewardsReducer = (state = {}, action) => {

  switch (action.type) {
    case "RECEIVE_REWARD":
      // const rewards = action.reward;
      // let newState = merge({}, state);

      return merge({}, state, {[action.reward.id]: action.reward});
    case "RECEIVE_ALL_REWARDS":

      const oldS = merge({}, state);
      let x =  merge({}, oldS, {[action.rewards.id]: action.rewards});

      return x;
    default:
      return state;
  }
};

export default RewardsReducer;