import { RECEIVE_REWARD, RECEIVE_ALL_REWARDS, RECEIVE_REWARD_ERRORS, DELETE_REWARD} from '../actions/reward_actions';
import merge from 'lodash/merge';


const RewardsReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_REWARD:
      return merge({}, state, {[action.reward.id]: action.reward});
    case RECEIVE_ALL_REWARDS:
      const oldS = merge({}, state);
      if (action.rewards.id) {
        return merge({}, oldS, {[action.rewards.id]: action.rewards});
      } else {
        return state;
      }
    case DELETE_REWARD:
     let newState = merge({}, state);
      delete newState[action.reward.id];

      return newState;
    default:
      return state;
  }
};

export default RewardsReducer;
