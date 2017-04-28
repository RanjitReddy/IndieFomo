import * as RewardsApiUtil from '../util/rewards_api_util';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';
export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const CLEAR_REWARD = 'CLEAR_REWARD';

export const receiveReward = (reward) => {
  return {
    type: RECEIVE_REWARD,
    reward: reward
  };
};

export const clearReward = () => {
  return {
    type: CLEAR_REWARD,
  };
};

export const receiveAllRewards = (rewards) => {
  return {
    type: RECEIVE_ALL_REWARDS,
    rewards: rewards
  };
};

export const receiveRewardErrors = (errors) => {
  return {
    type: RECEIVE_REWARD_ERRORS,
    errors: errors
  };
};

export const createReward = (reward) => (dispatch) => {

  return RewardsApiUtil.createReward(reward)
    .then((rew) => dispatch(receiveReward(rew)),
      (err) => dispatch(receiveRewardErrors(err)));
};

export const editReward = (reward) => (dispatch) => {
  return RewardsApiUtil.editReward(reward)
    .then((rew) => dispatch(receiveReward(rew)),
    (err) => dispatch(receiveRewardErrors(err)));
};

export const deleteReward = (reward) => (dispatch) => {
  return RewardsApiUtil.deleteReward(reward)
    .then((rew) => dispatch(receiveReward(rew)),
    (err) => dispatch(receiveRewardErrors(err)));
};

export const getReward = (reward) => (dispatch) => {
  return RewardsApiUtil.getReward(reward)
    .then((rew) => dispatch(receiveReward(rew)),
    (err) => dispatch(receiveRewardErrors(err)));
};

export const getAllRewards = (id) => (dispatch) => {
  return RewardsApiUtil.getAllRewards(id)
    .then((rewards) => dispatch(receiveAllRewards(rewards),
    (err) => dispatch(receiveAllRewards)));
};
