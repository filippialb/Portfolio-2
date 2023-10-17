import './App.css';



  function Hire() {
    const openNewTab = () => {
      window.open(process.env.PUBLIC_URL + 'hire-me-landing-page/index.html', '_blank');
    };

    return (
      <div>
        <button onClick={openNewTab}>Open New Tab</button>
      </div>
    );
  };




export default Hire;
