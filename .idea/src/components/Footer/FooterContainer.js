import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = (state) => ({
	itemsLeft: state.taskListReducer.itemsLeft,
	itemsActive: state.taskListReducer.itemsActive
});
const mapDispatchToProps = () => ({

});
const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;
