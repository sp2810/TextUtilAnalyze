import './App.css';
import Navbar from './Component/Navbar';
// import About from './Component/About';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import Footer from './Component/Footer';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const tAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const removebodyclass = ()=> {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-light');
  // }
  // const toggleMode = (clt) => {
  //   removebodyclass();
  //   console.log(clt);
  //   document.body.classList.add('bg-'+clt);
  //   if (mode === 'light') {
  //     setmode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     tAlert("Dark Mode has been enabled", "success");
  //     document.title = "TextUtil Dark Mode";
  //     setTimeout(() => {
  //       document.title = "TextUtil";
  //     }, 2000);
  //   } else {
  //     setmode('light');
  //     document.body.style.backgroundColor = 'white';
  //     tAlert("Light Mode has been enabled", "success");
  //     document.title = "TextUtil Light Mode";
  //     setTimeout(() => {
  //       document.title = "TextUtil";
  //     }, 2000);
  //   }
  // };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      tAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtil Dark Mode";
      setTimeout(() => {
        
        document.title = "TextUtil";
      }, 2000);
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      tAlert("Light Mode has been enabled", "success");
      document.title = "TextUtil Light Mode";
      setTimeout(() => {
        document.title = "TextUtil";
      }, 2000);
    }
  };

  return (
    <div>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm tAlert={tAlert} heading="Enter your Text for Analyze" mode={mode} />
      <Footer />
    </div>
  );
}
export default App;