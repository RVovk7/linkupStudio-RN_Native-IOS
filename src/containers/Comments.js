import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getComments ,CommentsSearch } from '../modules/comments';
import TopBar from '../components/TopBar';
import CommentsList from '../components/CommentsList';
import Spinner from '../components/Spinner';

class Comments extends Component {
    static propTypes = {}

    componentDidMount() {
        const {getComments, CommentsSearch  } = this.props;
        getComments();
        this.props.navigation.setParams({
            CommentsSearch,
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
    let commentsData =  state.commentsReducer.data;
    if (state.commentsReducer.dataFilt ){
        commentsData = state.commentsReducer.dataFilt
    }
    return{
        commentsData,
        loading: state.commentsReducer.loading,
    }
};


export default connect(mapStateToProps, { getComments, CommentsSearch })(Comments);
