import React from 'react';

function Fa(props) {
  const {kind, size, spin} = props

  // The above is the same as this...
  // const kind = props.kind
  // const size = props.size
  // const spin = props.spin

  const fontAwesome = function() {
    let iconKind

    if (kind) { iconKind = `fa-${kind}`}

    return `fa ${iconKind}`
  }

  return (
    <div>
      <i className={fontAwesome()} />
    </div>
  )
}

export default Fa;
