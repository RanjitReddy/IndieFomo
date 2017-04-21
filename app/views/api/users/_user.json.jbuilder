# json.extract! user, :first_name, :last_name, :email,
# :id, asset_path(:image[:url])

json.set! @user.id do
  json.id @user.id
  json.first_name @user.first_name
  json.last_name @user.last_name
  json.email @user.email
  json.image_url asset_path(@user.image.url)
  json.about_me @user.about_me
end
