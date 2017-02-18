import React from 'react'
import { ReactDOM } from 'react'
import DOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from './NavLink'

class DropDown extends React.Component{
    
    constructor(props){
      super(props);

      this.state = {toggled: false};

      this.Toggle = this.Toggle.bind(this);
    }

    Toggle(){
     this.setState((prev) =>({
        toggled: !prev.toggled
      })
     )
    }
    
    render() {
      let open = this.state.toggled;
        return (
          <div className="drop">
            <div className="horizontal" onClick={this.Toggle} >
              <Link to={this.props.path} activeClassName="active" > {this.props.name}</ Link>
              <span className={(open)?"arrow_carrot-down": "arrow_carrot-right"}></span>
            </div>
            <ul className="dropdown" className={(open) ? "show": "hide"}>
              {this.props.children}
            </ul>
          </div>
        )
    }  
}

export default DropDown