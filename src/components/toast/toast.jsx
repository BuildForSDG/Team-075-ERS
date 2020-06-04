import React from 'react';
import { ToastContainer,  Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
  
function Toast({ user, report }){
  // const toastId = React.useRef(null);

  // const notify = () => toastId.current = toast("Lorem ipsum dolor");

  // const dismiss = () =>  toast.dismiss(toastId.current);

  // const dismissAll = () =>  toast.dismiss();
  console.log(user.isLoading)
  return (
    <div>
      <div>

       {
         user.isLoading || report.isPending || (report.reportMessage === 200) ?
          <ToastContainer 
          position="top-center"
          autoClose={user.isLoading ? 5000 : report.isPending ? 5000 : 5000}
          hideProgressBar={true}
          transition={Slide}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        :
        null
        }
         
             
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  report: state.report
});

export default connect(mapStateToProps)(Toast);