import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <div className='grid grid-cols-1'>
        <div className='flex gap-[10rem]'>
    <StyledWrapper>
      <div className="form-control">
        <input type="value" required />
        <label>
          <span style={{transitionDelay: '0ms'}}>N</span><span style={{transitionDelay: '50ms'}}>a</span><span style={{transitionDelay: '100ms'}}>m</span><span style={{transitionDelay: '150ms'}}>e</span><span style={{transitionDelay: '200ms'}}></span><span style={{transitionDelay: '250ms'}}></span><span style={{transitionDelay: '300ms'}}></span><span style={{transitionDelay: '350ms'}}></span>
        </label>
      </div>
    </StyledWrapper>
    <StyledWrapper>
      <div className="form-control">
        <input type="value" required />
        <label>
          <span style={{transitionDelay: '0ms'}}>C</span><span style={{transitionDelay: '50ms'}}>o</span><span style={{transitionDelay: '100ms'}}>m</span><span style={{transitionDelay: '150ms'}}>p</span><span style={{transitionDelay: '200ms'}}>a</span><span style={{transitionDelay: '250ms'}}>n</span><span style={{transitionDelay: '300ms'}}>y</span><span style={{transitionDelay: '350ms'}}></span>
        </label>
      </div>
    </StyledWrapper> 
    </div>

    <div className='flex gap-[10rem]'>
    <StyledWrapper>
      <div className="form-control">
        <input type="value" required />
        <label>
          <span style={{transitionDelay: '0ms'}}>E</span><span style={{transitionDelay: '50ms'}}>m</span><span style={{transitionDelay: '100ms'}}>a</span><span style={{transitionDelay: '150ms'}}>i</span><span style={{transitionDelay: '200ms'}}>l</span><span style={{transitionDelay: '250ms'}}></span><span style={{transitionDelay: '300ms'}}></span><span style={{transitionDelay: '350ms'}}></span>
        </label>
      </div>
    </StyledWrapper>
    <StyledWrapper>
      <div className="form-control">
        <input type="value" required />
        <label>
          <span style={{transitionDelay: '0ms'}}>P</span><span style={{transitionDelay: '50ms'}}>h</span><span style={{transitionDelay: '100ms'}}>o</span><span style={{transitionDelay: '150ms'}}>n</span><span style={{transitionDelay: '200ms'}}>e</span><span style={{transitionDelay: '250ms'}}></span><span style={{transitionDelay: '300ms'}}></span><span style={{transitionDelay: '350ms'}}></span>
        </label>
      </div>
    </StyledWrapper>
    </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 190px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #000000 solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #000000;
  }

  .form-control input:focus,
  .form-control input:valid {
    outline: 0;
    border-bottom-color: #000000;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #000000;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus+label span,
  .form-control input:valid+label span {
    color: #000000;
    transform: translateY(-30px);
  }`;

export default Input;
