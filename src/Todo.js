import React , {Component,PropTypes} from 'react';

export class Todo extends Component {

    static propTypes = {
      buttonColor: PropTypes.string.isRequired,
    }

    state = {
        inputText: '',
        cal1 : '',
        cal2 : '',
        totalResult : 0,
        listItem : []
    }



    deleteListAtIndex = (index) => {
        const result = this.state.listItem;
        result.splice(index, 1);
        this.setState({listItem: result});
    }

    submitList = () => {
      this.setState({
        listItem: this.state.listItem.concat([this.state.inputText]),
        inputText: ''
      })
    }

    handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        this.submitList();
      }
    }

    storeCal1 = (event) => {
        this.setState({cal1: event.target.value});
        console.log('this is cal1 ' + this.state.cal1);

    }

    storeCal2 = (event) => {
        this.setState({cal2: event.target.value});
        console.log('this is cal2 ' + this.state.cal2);

    }

    calculateResult = () => {
        this.state.totalResult = parseInt(this.state.cal1) + parseInt(this.state.cal2) ;
        console.log(this.state.totalResult);
        this.forceUpdate();
    }

    logEvent = () => {
        console.log(this.state.inputText);
    }

    handleChangeText = (event) => {

        this.setState({inputText: event.target.value});
    }

    render() {
        return(
            <div className="card clearfix" style={{background: this.props.buttonColor}}>
            <div className="to-do-box">
                <h1 className="title">To-do-list</h1>
                <div className="form-box">
                    <input className="input input" type="text"
                        onChange={this.handleChangeText}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.inputText}
                        />
                    <button className="bb-input button" onClick={this.submitList}>Add</button>
                    <div class="block">
                            {this.state.listItem.map((value, index) => {
                            return (

                              <span key={index + value} className="tag is-success">
                                {value}
                                <button className="delete is-small" onClick={this.deleteListAtIndex.bind(this, index)}></button>
                              </span>

                            );
                        })}
                    </div>

                    <p className="control">
                        <a className="button is-info" id="btnCalculate" onClick={this.calculateResult}>
                        Calculate
                        </a>
                    </p>


                    <input className="input input" type="text" onChange={this.storeCal1}/>
                    <input className="input input" type="text" onChange={this.storeCal2}/>
                    <input className="input input" type="text" value={this.state.totalResult}/>



                </div>



            </div>
        </div>
        )
    }
}