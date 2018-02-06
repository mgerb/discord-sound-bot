import React from 'react';
import axios from 'axios';

import { SoundList, SoundType } from '../../components/SoundList';

interface Props {}

interface State {
  clipList: SoundType[];
}

export class Clips extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      clipList: [],
    };
  }

  componentDidMount() {
    this.getClipList();
  }

  private getClipList() {
    axios
      .get('/api/cliplist')
      .then(response => {
        this.setState({
          clipList: response.data,
        });
      })
      .catch((error: any) => {
        console.error(error.response.data);
      });
  }

  render() {
    return (
      <div className="Soundboard">
        <div className="column">
          <SoundList soundList={this.state.clipList} type="Clips"/>
        </div>
      </div>
    );
  }
}