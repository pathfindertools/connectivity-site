import React, { useState, useEffect, useRef } from 'react';

import ColorPicker from './widgets/ColorPicker';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function ColorControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState(input.value);

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    input.value = color;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [color, inputRef.current]);

  function handleSetColor(value: string) {
    setColor(value)
  }

  return (
    <>
      <FieldLabel label={field.label} />
      <ColorPicker width={120} value={input.value} onClick={handleSetColor} />
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
