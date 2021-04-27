import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentState: 0,
        }
        // bind something   
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
                        return <li><h1> {tab.title}  </h1></li>
                    })}
                    {tabsTitle.map(tab => {
                        return <li><article> {tab.content}  </article></li>
                    })}
                </ul>
            </div>
        )
    }
}


export default Tabs;
