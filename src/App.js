import { render } from '@testing-library/react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import Search from './components/searchComponent/search';
import SideMenu from './components/sideMenuComponent';
import { KZ_IMG_PATH, NFACTORIAL } from "../src/components/HomeComponent/images/index"

import React, { useState } from 'react'
import Tweet from './components/HomeComponent/TweetsList/Tweet';
import SearchResultItem from './components/searchComponent/searchResults/searchResultItem/searchResulItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      content: '',
      tweets: [
        {
          id: 0,
          authorName: 'Free KZ today',
          authorUserName: '@kz',
          img: KZ_IMG_PATH,
          content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
          replies: 200,
          retweets: 1000,
          likes: 500,
          shares: 700,
        },
        {
          id: 1,
          authorName: 'nFactorial',
          authorUserName: '@nfacotrial',
          img: NFACTORIAL,
          content: 'Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius ',
          replies: 200,
          retweets: 2000,
          likes: 600,
          shares: 300,
        },
        {
          id: 2,
          authorName: 'nFactorial',
          authorUserName: '@nfacotrial',
          img: NFACTORIAL,
          content: 'Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius ',
          replies: 200,
          retweets: 2000,
          likes: 600,
          shares: 300,
        },
      ],
      results: []
    }
  }

  onChangeTextInput = (e) => {
    this.setState({
      content: e.target.value,
    })
  };
  addToTweet = () => {
    const newTweets = {
      id: this.state.tweets.length,
      authorName: 'Meirman',
      authorUserName: '@creator',
      img: KZ_IMG_PATH,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      shares: 0,
    }
    this.setState({
      tweets: [newTweets, ...this.state.tweets],
      content: ''
    });
  };
  deleteToTweet = (id) => {
    this.setState({
      tweets: this.state.tweets.filter(item => item.id !== id)
    });
  }


  render() {
    const handleInput = (value) => {
      this.state.results = [];
      if (value.length > 0) {
        if (this.state.tweets !== null && this.state.tweets.length > 0) {
          this.state.tweets.map(item => {
            if (item.content.toLowerCase().includes(value.toLowerCase())) {
              this.state.results.push(item);

            } 
          });
        }

      } 
      let arr = this.state.results;

      this.state.results = [];

      this.setState({ results: arr });

    }
    return (
      <div className="App d-flex mx-5" >
        <SideMenu />
        <div className='vertical-divider'></div>
        <HomeComponent parentState={this.state}
          contents={this.state.content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweet}
          tweets={this.state.tweets} deleteToTweet={this.deleteToTweet} />
        <div className='vertical-divider'></div>
        <Search SearchResults={this.state.results} onInputChange={handleInput} />
      </div>
    );
  }

}

export default App;
