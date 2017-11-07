import { connect } from 'react-redux';
import Application from '../App';
import { signIn, signOut } from '../actions/auth';


const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signOut() { dispatch(signOut()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);