import React, { Component } from "react";
import axios from "axios";

class IdeaPage extends Component {
  state = {
    ideas: [
      {
        title: "",
        description: ""
      }
    ],
    user: {
      name: "",
      _id: ""
    }
  };

  componentDidMount() {
    this.getIdeas();
  }

  getIdeas = () => {
    const userId = this.props.match.params.userId;
    console.log(userId);
    axios.get(`/api/users/${userId}`).then(res => {
      const user = {
        _id: res.data._id,
        name: res.data.name
      };
      console.log(user);
      const ideas = res.data.ideas;
      console.log(ideas);
      this.setState({ user, ideas });
    });
  };

  createIdea = () => {
    const payload = {
        title: this.state.idea.title,
        description: this.state.idea.description
    }
    axios.post(`/api/users/${this.state.user._id}/ideas`, payload).then(res => {
      const newIdeas = [...this.state.idea];
      newIdeas.unshift(res.data);
      this.setState({ ideas: newIdeas });
    });
  };

  handleChange = (e) => {
    const idea = {...this.state.idea}
    idea[e.target.name] = e.target.value
    console.log(idea)
    this.setState({ idea })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.createIdea()
      this.getIdeas()
  }

  render() {
    return (
      <div>
        <p>
          {this.state.user.name}
          's idea page
        </p>
        <div>
          <h3>Ideas</h3>
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input
                onChange={this.handleChange}
                name="title"
                type="text"
                value={this.state.ideas.title}
              />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <input
                onChange={this.handleChange}
                name="description"
                type="text"
                value={this.state.ideas.description}
              />
            </div>
            <button onClick={this.handleSubmit}>New Idea</button>
          </form>
          {this.state.ideas.map(idea => {
            return (
              <div>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default IdeaPage;
