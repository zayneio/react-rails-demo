import React from 'react'

class FormCsrfInput extends React.Component {
  render() {
    const token = $('meta[name="csrf-token"]').attr('content');

    return (
      <input type="hidden" name="authenticity_token" value={token} readOnly={true} />
    )
  }
}

export default FormCsrfInput