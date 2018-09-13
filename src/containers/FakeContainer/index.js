// import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
// import { connect } from 'react-redux';
// import { fakeAction } from '../../actions';
// class FakeContainer extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.props.fakeAction();
//             alert('FAKE');
//           }}
//         >
//           {' '}
//           FAKE{' '}
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ fake }) => ({ fake });
// const mapDispatchToProps = dispatch => ({
//   fakeAction: () => dispatch(fakeAction())
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FakeContainer);

// FakeContainer.propTypes = {
//   fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };
