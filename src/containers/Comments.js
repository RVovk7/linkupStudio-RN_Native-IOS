import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getComments ,CommentsSearch, SearchClear } from '../modules/comments';
import TopBar from '../components/TopBar';
import CommentsList from '../components/CommentsList';
import Spinner from '../components/Spinner';

class Comments extends Component {
    static propTypes = {}

    componentDidMount() {
        const {getComments, CommentsSearch , SearchClear } = this.props;
        getComments();
        this.props.navigation.setParams({
            CommentsSearch,
            SearchClear,
          });
    }

    static navigationOptions = ({ navigation }) => {
       const { state: { params } } = navigation;
        return {
        header: <TopBar param={params} />
        }
    }
    
  
    render() {
        const {commentsData, loading, navigation: { navigate }} = this.props;
            if (loading) return (<Spinner />);
        return (
            <Fragment>
                <CommentsList navigate={navigate} commentsData={commentsData}/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    console.log(state.commentsReducer.clear);
    let commentsData =  state.commentsReducer.data;
    if (state.commentsReducer.dataFilt ){
        commentsData = state.commentsReducer.dataFilt
    }
    if (state.commentsReducer.clear){
        commentsData =  state.commentsReducer.data
    }
    return{
        commentsData,
        loading: state.commentsReducer.loading,
    }
};


export default connect(mapStateToProps, { getComments, CommentsSearch , SearchClear })(Comments);
