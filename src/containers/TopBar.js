import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CommentsSearch} from '../modules/comments/actions';
import {
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text
} from 'native-base';
import TopBarView from '../components/TopBarView';

class TopBar extends Component {

  static propTypes = {
    searchText: PropTypes.string.isRequired,
    CommentsSearch: PropTypes.func.isRequired,

  
};

    openModal = () => {
       const {param: { openModal }} = this.props;
    openModal();
    };

    render() {
        const {
            props: {  searchText, CommentsSearch }, openModal } = this;
        return (<TopBarView
            searchText={searchText}
            CommentsSearch={CommentsSearch}
            openModal={openModal}/>)
    }
}

const mapStateToProps = state => ({searchText: state.commentsReducer.searchText})

export default connect(mapStateToProps, {CommentsSearch})(TopBar);