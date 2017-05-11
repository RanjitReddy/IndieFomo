import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN, RECEIVE_CAMPAIGN_ERRORS} from '../actions/campaign_actions';
import merge from 'lodash/merge';
import { RECEIVE_CONTRIBUTION } from '../actions/contribution_actions';

let _oldState = Object.freeze({
  campaign: null,
  errors: null
});


const CampaignsReducer = (state = _oldState, action) => {

  switch(action.type) {
    case RECEIVE_CAMPAIGNS:

      const allCampaigns = action.campaigns;
      const oldS = merge({}, state);
      let x =  merge({}, oldS, {campaign: action.campaigns});
      return action.campaigns
    case RECEIVE_CAMPAIGN:

      const newState = merge({}, state);
      let y = merge(newState, {campaign: action.campaign});
      return y;
    case RECEIVE_CAMPAIGN_ERRORS:

      const old = merge({}, state);
      return merge(old, {errors: action.errors.responseText});
    case "RECEIVE_CONTRIBUTION":

      let z = merge({}, state);
      let updated = merge(z, {campaign: action.campaign});
      let newAmount = updated.campaign.total_contributions + action.contribution.amount;
      let newCount = updated.campaign.num_contributions + 1;
      updated.campaign.total_contributions = newAmount;
      updated.campaign.num_contributions = newCount;
      return updated;
    default:
      return state;
  }
};

export default CampaignsReducer;
