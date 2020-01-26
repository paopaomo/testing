import React, { PureComponent } from 'react'

class Demo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            value: props.value
        }
    }

    static getDerivedStateFromProps(props) {
       return {
           title: props.title
       }
    }

    add = () => {
      this.setState({
          value: this.state.value + 1
      });
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return <div className='container'>
            <h1>{this.state.title}</h1>
            <div className='counter'>{this.state.value}</div>
            <input value={this.state.value} onChange={this.onChange} />
            <button onClick={this.add}>Value ++</button>
        </div>
    }
}

Demo.defaultProps = {
  title: 'This is a Demo',
  value: 0
};

export default Demo
