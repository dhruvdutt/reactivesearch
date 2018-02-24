import React, { Component } from 'react';
import {
	ReactiveBase,
	DataSearch,
} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleState = () => {
		const { visible } = this.state;
		this.setState({
			visible: !visible,
		});
	};

	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<DataSearch
					className="datasearch"
					componentId="mainSearch"
					dataField={[
						'original_title',
						'original_title.search',
						'authors',
						'authors.search',
					]}
					queryFormat="and"
					placeholder="Search for a book title or an author"
					innerClass={{
						input: 'searchbox',
						list: 'suggestionlist',
					}}
					autosuggest={false}
					iconPosition="left"
					filterLabel="search"
				/>
			</ReactiveBase>
		);
	}
}

export default App;
