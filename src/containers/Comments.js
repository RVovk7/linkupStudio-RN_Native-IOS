import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getComments, postComment } from '../modules/api'
import TopBar from './TopBar';
import CommentsList from '../components/CommentsList';
import AddCommentModal from '../components/AddCommentModal';
import Spinner from '../components/Spinner';

class Comments extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        getComments: PropTypes.func.isRequired,
        postComment: PropTypes.func.isRequired,
        commentsData:  PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,
    };

    static navigationOptions = ({ navigation }) => {
        const { state: { params } } = navigation;
         return {
         header: <TopBar param={params} />
         }
     };

    state = {
        modalOpen: false 
    };

    openModal = () => {
        this.setState({
            modalOpen: true,
        })
    };

    closeModal = () => {
        this.setState({
            modalOpen: false,
        })
    };

    componentDidMount() {
        const { props:{ getComments,}, openModal } = this;
        getComments();
        this.props.navigation.setParams({
            openModal,
          });
    }

    render() {
        const {commentsData, postComment, loading, navigation: { navigate }} = this.props;
        const { modalOpen } = this.state;
            if (loading) return (<Spinner />);
        return (
            <Fragment>
                <CommentsList navigate={navigate} commentsData={commentsData}/>
                <AddCommentModal postComment={postComment} modalOpenState={modalOpen} closeModal={this.closeModal} />
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

export default connect(mapStateToProps, { getComments, postComment })(Comments);
