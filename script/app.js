class Sidebar extends React.Component {
    render () {
        return (
            <div class="navDiv">
            <ul>
                <li>Dashboard</li>
                <li>Widget</li>
                <li>Reviews</li>
                <li>Customers</li>
                <li>Online Analysis</li>
                <li>Settings</li>
            </ul>
            </div>
        )
    }
}



class RightSide extends React.Component {
    render () {
        return (
            <div class="threeBoxTop">
                <div class="reviewsDiv">
                    <h1>Reviews     </h1>
                    
                    <h2>1,281</h2>
                </div>
                <div class="reviewsDiv">
                    <h1>Average Rating</h1>
                        <div class="avgRating">
                            <h2>4.6</h2>
                        </div>
                </div>
                <div class="reviewsDiv">
                    <h1>Sentiment Analysis</h1>
                    <div class="sentimentNumbers">
                        <h2>
                            960
                            <br></br>
                            122
                            <br></br>
                            321
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

class Detail extends React.Component {
    render () {
        return (
            <div class="detail">
                <h1>Reviews</h1>
                <s>200</s>
            </div>
        )
    }
}

class WebVisitors extends React.Component {
    render() {
        return (
            <div class="visitors">
                <h1>Website Visitors</h1>
            </div>
        )
    }
}

class VisitorsData extends React.Component {
    render() {
        return (
            <div class="visitorsData">
                <h1>Visitors Data</h1>
            </div>
        )
    }
}

class ContentBox extends React.Component {
    render() {
        return (
            <div class="visitDiv">
                <h1>Website Visitors</h1>
                <div class="visitNumber">
                    <h2>821</h2>
                </div>
                
            </div>
            
        )
    }
}


class App extends React.Component {
    render () {
        return (
            <div>
                <Sidebar />,
                <RightSide />,
                <ContentBox />,
                
                
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    
    document.querySelector('.main')

);


