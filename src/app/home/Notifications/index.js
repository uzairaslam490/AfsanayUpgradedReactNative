/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Notification from './Notifications';
import { getNotifications, setNotifications } from './actions';

const mapStateToProps = (store)=>{
    return {
        notifications: store.notifications.notifications,
        isFetching: store.notifications.isFetching,
        hasMore: store.notifications.hasMore,
        isFetched: store.notifications.isFetched,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: (reset) => dispatch(getNotifications(reset)),
        setNotifications: (params) => dispatch(setNotifications(params)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Notification);
