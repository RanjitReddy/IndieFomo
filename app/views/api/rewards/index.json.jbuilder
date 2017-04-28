
if @campaign
  #  
  @campaign.rewards.each do |reward|
    json.id reward.id
    json.title reward.title
    json.description reward.description
    json.price reward.price
    json.image reward.image
    json.campaign_id reward.campaign_id
  end
else
  nil
end