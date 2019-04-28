import News from "./news";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;