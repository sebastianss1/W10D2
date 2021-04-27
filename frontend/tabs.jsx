import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentState: 0,
        }
        this.click = this.click.bind(this); 
    }

    
    render() {
        const tabsTitle = this.props.tabs;
        // console.log(tabsTitle[0]);
        // console.log(tabs);
        return (
            <div>
                <header>Tabs</header>
                <ul>
                    {tabsTitle.map(tab => {
                        return <li className="tab-title"><h1> {tab.title}  </h1></li>
                    })}
                    {tabsTitle.map( (tab, index) => {
                        return <li className="tab-content" onClick={this.click}><article> {tab.content}  </article></li>
                    })}
                </ul>
            </div>
        )
    }

    click() {
        this.setState({
            currentState: this.props.tabs.index
        }) 
        console.log(currentState);
    }
}



export default Tabs;
