import React from 'react';

const Form = ({ data }) => {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted");
}
  return (
    <React.Fragment>
        <h2 className="center">React Form Generator</h2>
        <div className="container">{data.map((el, key) => {
          return (
            <form onSubmit={handleSubmit}>
                <label className="input" key = {key}>
                { el.label }
                </label>
                  <input  type={el.type}    />
              </form>
          )
        })}
          </div>
      <input className="btn-lg submit btn btn-dark " value="SUBMIT" type="button" onClick={handleSubmit}/>      
    </React.Fragment>
    );
}

export default Form;