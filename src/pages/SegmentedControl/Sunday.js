import React, { Component } from 'react';
import sunday from '../../static/sunday.json';
import sundayLD from '../../static/ld/sunday.json';
import sundayJL from '../../static/jl/sunday.json';
import Currency from '../../components/Currency/Currency';
import QueueAnim from 'rc-queue-anim';
import { FetchGet } from '../../modular/Common'
export default class Sunday extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sunday: null
        };
    }
    componentDidMount() {
        this.onGetSameDay();
    }
    onGetSameDay = () => {
        let { shiftID, siteData, slideIndex } = this.props;
        let responseData = async () => {
            let responseData = await FetchGet(shiftID, 'Sunday');
            this.setState({ sunday: responseData });
        };
        responseData();
        //this.setState({ sunday: SUNDAY[this.props.shiftID] });
    }
    render() {
        return <div style={{ flex: 1 }}>
            <QueueAnim className="demo-content">
                <Currency data={this.state.sunday} siteData={this.props.siteData} />
            </QueueAnim>
        </div>
    }
}
const SUNDAY = {
    "1": sunday,
    "2": sundayLD,
    "3": sundayJL
};