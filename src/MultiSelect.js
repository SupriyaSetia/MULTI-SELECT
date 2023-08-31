import React, {useRef} from 'react'
import ReactSelect from 'react-select'

export const MultiSelect = (props) => {
    const valueRef = useRef(props.value);
  valueRef.current = props.value;

  const selectAllOption = {
    value: "<SELECT_ALL>",
    label: "Select All"
  };

  const isSelectAllSelected = () =>
    valueRef.current.length === props.options.length;

  const isOptionSelected = option =>
    valueRef.current.some(({ value }) => value === option.value) ||
    isSelectAllSelected();

  const getOptions = () => [selectAllOption, ...props.options];

  const getValue = () =>
    isSelectAllSelected() ? [selectAllOption] : props.value;

  const onChange = (newValue, data_info) => {
    const { action, option, removedValue } = data_info;
    console.log("data_info", data_info)
    if (action === "select-option" && option.value === selectAllOption.value) {
      props.onChange(props.options, data_info);
    } else if ((action === "deselect-option" && option.value === selectAllOption.value) ||
      (action === "remove-value" && removedValue.value === selectAllOption.value)) {
      props.onChange([], data_info);
    } else if (data_info.action === "deselect-option" && isSelectAllSelected()) {
      props.onChange(props.options.filter(({ value }) => value !== option.value),data_info);
    } else {
      props.onChange(newValue || [], data_info);
    }
  };
  return (
    <div>
        <ReactSelect
            isOptionSelected={isOptionSelected}
            options={getOptions()}
            value={getValue()}
            onChange={onChange}
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
            isMulti
        />
    </div>
  )
}
