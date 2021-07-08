import React from "react";

import { Input } from "./styles";

export default function InvisibleInput({
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
    />
  );
}
