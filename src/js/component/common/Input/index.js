import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Input = (props) => {
  const { id, className, type, name, placeholder, value, onChange, required, label } = props
  return (
    <div className='input-container'>
      {label && <label for={id} className='input-label'>{label}</label>}
      <input
        id={id}
        className={`input-box ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        required={required}
      />
    </div>
  )
}

Input.defaultProps = {
  id: 'input',
  className: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => { },
  required: false,
  label: '',
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
}

export default Input
