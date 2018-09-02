import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getComments ,CommentsSearch } from '../modules/comments';
import TopBar from '../components/TopBar';
import CommentsList from '../components/CommentsList';
import AddCommentModal from '../components/AddCommentModal';
import Spinner from '../components/Spinner';

class Comments extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        getComments: PropTypes.func.isRequired,
        CommentsSearch: PropTypes.func.isRequired,
        commentsData:  PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,

    }

    constructor(props){
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    openModal = () => {
        console.log('click')
        this.setState({
            modalOpen: true,
        })
    }

    componentDidMount() {
        const { props:{ getComments, CommentsSearch }, openModal } = this;
        getComments();
        this.props.navigation.setParams({
            CommentsSearch,
            openModal
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
        const { modalOpen } = this.state;
            if (loading) return (<Spinner />);
        return (
            <Fragment>
                <CommentsList navigate={navigate} commentsData={commentsData}/>
                <AddCommentModal modalOpen={modalOpen} />
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
