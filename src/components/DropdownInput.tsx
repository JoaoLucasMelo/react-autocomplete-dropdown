import { ChangeEvent, FC, KeyboardEvent, MouseEvent, useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";
import DropdownIcon from "../assets/DropdownIcon";

interface IDropdownInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  handleToggleDropdown: () => void;
  placeholder?: string;
  disabled?: boolean;
  styleError?: boolean | string | number;
  inputName?: string;
  tooltipPlacement?: "auto" | "top" | "bottom" | "left" | "right";
  tooltipTitle?: string;
  size?: "small" | undefined;
  isRequired?: boolean;
  className?: string | undefined;
}

const DropdownInput: FC<IDropdownInputProps> = ({
  value,
  handleInputChange,
  handleBlur,
  handleToggleDropdown,
  placeholder,
  disabled,
  styleError,
  inputName,
  tooltipPlacement,
  tooltipTitle,
  size,
  isRequired,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      inputRef.current &&
      e.key === "Backspace" &&
      inputRef.current.selectionStart === 0 &&
      inputRef.current.selectionEnd === inputRef.current.value.length
    ) {
      e.preventDefault();
      inputRef.current.value = "";
      const changeEvent = new Event("input");
      inputRef.current.dispatchEvent(changeEvent);
      handleInputChange(
        changeEvent as unknown as ChangeEvent<HTMLInputElement>
      );
      handleToggleDropdown();
    }
  };

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const handleCustomBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (inputRef.current && inputRef.current.value === "") return;
    handleBlur(e);
  };

  return (
    <InputGroup className="align-items-center flex-nowrap">
      <Form.Control
        type="text"
        onClick={(e: MouseEvent<HTMLInputElement>) => handleInputClick(e)}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          handleToggleDropdown();
          e.target.select();
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleCustomBlur(e)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
        placeholder={placeholder}
        disabled={disabled}
        name={inputName ?? ""}
        className={`${className} ${
          styleError ? "custom-autocomplete-dropdown-invalid" : "border-0"
        }`}
        autoComplete="off"
        ref={inputRef}
        data-bs-toggle={tooltipTitle ? "toggle" : undefined}
        data-bs-placement={tooltipPlacement}
        title={tooltipTitle}
        required={isRequired}
      />
      <div
        className={`px-2 custom-autocomplete-dropdown-icons${
          disabled ? "-disabled" : ""
        } ${size === "small" ? "custom-autocomplete-dropdown-small" : "p-1"}`}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          inputRef.current?.select();
        }}
        onFocus={(e: React.FocusEvent<HTMLDivElement>) =>
          handleToggleDropdown()
        }
      >
        <DropdownIcon className={size === "small" ? "mb-1" : ""} />
      </div>
    </InputGroup>
  );
};

export default DropdownInput;
