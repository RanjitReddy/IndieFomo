import React from 'react';
import { Link, withRouter } from 'react-router';


class EditCampaign extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      user_id: this.props.user.id,
      title: this.props.title,
      target_amount: this.props.target_amount,
      descriptions: this.props.descriptions,
      category_id: null,
      image_url: null,
      end_date: null,
      tagline: "",
      imageFile: null,
      imageUrl: null
    };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("campaign[image]", this.state.imageFile);
    const newCamp = this.state
    debugger
    this.props.updateCampaign(newCamp).then((camp) => {
      // const url = `campaigns/${camp.campaign.id}`;
      const url = `/yolo`;
      debugger
      this.props.router.push(url);
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (this.props.user) {
      return(
        <div className="edit-campaign">
          <h1>Let's get some more details.</h1>
          <div className="campaign-edit-form">
            <form className="c-form"  onSubmit={this.handleSubmit}>

              <div className="campaign-description">
                <h2>Tell us a little bit about your Campaign!</h2>
                <input type="text"
                  placeholder={this.state.descriptions}
                  onChange={this.update("descriptions")}>
                </input>
              </div>

              <div className="tagline">
                <h1>Tagline: </h1>
                <h2>Give us your best pitch! </h2>
                <input type="text"
                  placeholder={this.state.target_amount}
                  onChange={this.update("tagline")}>
                </input>
              </div>

              <div className="category_dropdown">
                <h2>Tag it with a Category!</h2>
                  <select name="category">
                    <option value="1">Travel&Outdoors</option>
                    <option value="2">Film</option>
                    <option value="3">Community Projects</option>
                    <option value="4">Music</option>
                    <option value="5">Technology</option>
                    <option value="6">Materialism</option>
                  </select>
              </div>

              <div  className="campaign-img-preview">
                <div className="user-img">
                  <img  src={this.state.imageUrl}/>
                </div>

                 <div className="file-upload">
                  <input type="file"
                    onChange={this.updateFile}
                    onClick={this.handleSubmit}/>
                </div>
              </div>

              <div className="submit-button">
                <input type="submit"
                        value="submit">
                </input>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return(
        <h1> Nothing </h1>
      );
    }

  }
}

export default withRouter(EditCampaign);
