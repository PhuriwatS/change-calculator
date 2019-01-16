import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Input = (props) => {
  const { id, className, type, name, placeholder, value, onChange, required, readOnly, label } = props
  return (
    <div className='input-container'>
      {label && <label htmlFor={id} className='input-label'>{label}</label>}
      <input
        id={id}
        className={`input-box ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        required={required}
        readOnly={readOnly}
      />
    </div>
  )
}

Input.defaultProps = {
  id: 'input',
  className: '',
  type: 'number',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => { },
  required: false,
  readOnly: false,
  label: '',
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
}

export default Input
