import React, { Component } from 'react';
import './styles.css';
import { searchVideos } from '../../api';
import TextInput from '../../components/TextInput';
import CardList from '../../components/CardList';

export default class Search extends Component {
  state = {
    videos: [],
    searchValue: '',
  }

  handleChange = async ({ target: { value } }) => {
    this.setState({ searchValue: value });
  }

  handleKeyUp = async ({ key }) => {
    if (key === 'Enter') {
      try {
        const videos = await searchVideos(this.state.searchValue);
        this.setState({ videos });
      } catch(e) {
        alert('fetch error');
      }
      
    }
  }

  removeVideo = (id) => {
    this.setState(prevState => ({
      videos: prevState.videos.filter(video => video.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <div className="app-searchbar">
            <TextInput
              label="Search"
              value={this.state.searchValue}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}
            />
          </div>
        </header>
        <CardList videos={this.state.videos} onRemoveClick={this.removeVideo}/>
      </div>
    );
  }
}
