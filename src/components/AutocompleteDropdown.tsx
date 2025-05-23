import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  useCallback,
  useMemo,
} from "react";
import {
  useHandleArrowDown,
  useHandleArrowUp,
  useHandleEnter,
} from "./keyHandlers";
import {
  handleClearInput,
  useResetOnSelectedChange,
} from "./handleSelectChangeFunctions";
import { toggleDropdown } from "./dropdownFunctions";
import useUpdateOnSelected from "./useUpdateOnSelected";
import useScrollOnHighlight from "./useScrollOnHighlight";
import DropdownInput from "./DropdownInput";
import useOutsideClick from "./useOutsideClick";
import DropdownOptions from "./DropdownOptions";
import "../styles/autocomplete-dropdown.css";

export interface ICustomInputProps<T extends Record<string, any> = any> {
  options: T[];
  staticOptions?: T[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  shouldMatchOption?: boolean;
  placeholder?: string;
  disabled?: boolean;
  styleError?: boolean | string | number;
  selected?: string | number;
  inputName?: string;
  nameKey: string;
  valueKey: string;
  tooltipPlacement?: "auto" | "top" | "bottom" | "left" | "right";
  tooltipTitle?: string;
  size?: "small" | undefined;
  isRequired?: boolean;
  useHighlightBorder?: boolean;
  className?: string | undefined;
  allowZeroValue?: boolean;
  allowNonOptionValue?: boolean;
}

const AutocompleteDropdown = <T extends Record<string, any> = any>({
  options,
  onChange,
  onBlur,
  shouldMatchOption = true,
  disabled,
  styleError,
  selected,
  placeholder,
  inputName,
  nameKey,
  valueKey,
  staticOptions,
  tooltipPlacement,
  tooltipTitle,
  size,
  isRequired,
  useHighlightBorder = false,
  className,
  allowZeroValue,
}: ICustomInputProps<T>) => {
  const [inputValue, setInputValue] = useState(
    selected?.toString() ?? (options.length === 1 ? options[0][nameKey] : "")
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [filterValue, setFilterValue] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [openUpwards, setOpenUpwards] = useState(false);
  const [isInputCleared, setIsInputCleared] = useState(false);
  const [isInputChanged, setIsInputChanged] = useState(false);
  const blurTriggered = useRef(false);

  useUpdateOnSelected(
    selected,
    options,
    setInputValue,
    nameKey,
    valueKey,
    allowZeroValue,
    shouldMatchOption
  );
  useScrollOnHighlight(highlightedIndex, optionRefs);
  useOutsideClick(inputRef as React.RefObject<HTMLElement>, () =>
    setShowDropdown(false)
  );

  const handleOptionClick = useCallback(
    (option: T) => {
      if (blurTriggered.current) return;
      blurTriggered.current = true;
      if (
        option &&
        Object.prototype.hasOwnProperty.call(option, nameKey) &&
        option[nameKey] !== inputValue
      ) {
        setInputValue(option[nameKey]);
        setShowDropdown(false);
        const event = new Event("input");
        const inputElement = inputRef.current?.querySelector("input");
        if (inputElement) {
          inputElement.value = allowZeroValue
            ? option[valueKey] != null
              ? option[valueKey].toString()
              : ""
            : option[valueKey]
            ? option[valueKey].toString()
            : "";
          inputElement.dispatchEvent(event);
          onChange(event as unknown as ChangeEvent<HTMLInputElement>);
        }
      } else {
        setShowDropdown(false);
      }
      setTimeout(() => {
        blurTriggered.current = false;
      }, 0);
    },
    [onChange, nameKey, valueKey]
  );

  const handleClearInputCallback = handleClearInput(
    handleOptionClick as (option: object) => void,
    disabled
  );

  useResetOnSelectedChange({
    options,
    nameKey,
    valueKey,
    selected,
    isInputChanged,
    isInputCleared,
    setInputValue,
    setIsInputCleared,
    handleClearInputCallback,
  });

  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setInputValue(inputValue);
      setFilterValue(inputValue);
      setShowDropdown(true);
      setIsInputChanged(true);
      setHighlightedIndex(0);

      if (inputValue === "") {
        handleClearInputCallback(
          setInputValue,
          setIsInputCleared,
          nameKey,
          valueKey
        );
      }
    },
    [
      setInputValue,
      setShowDropdown,
      nameKey,
      valueKey,
      handleClearInputCallback,
    ]
  );

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const spaceTop = rect.top;
      const spaceBottom = window.innerHeight - rect.bottom;
      setOpenUpwards(spaceBottom < 400 && spaceTop > spaceBottom);
    }
  }, [showDropdown]);

  const toggleDropdownCallback = toggleDropdown(setShowDropdown, disabled);

  const defaultHandleBlurCallback = useCallback(() => {
    closeDropdown();

    if (blurTriggered.current) return;
    const matchedOption = options.find(
      (option) => option[nameKey]?.toString() === inputValue
    );
    if (matchedOption) {
      handleOptionClick(matchedOption);
      setFilterValue("");
    } else if (filteredOptions.length === 1) {
      handleOptionClick(filteredOptions[0]);
      setFilterValue("");
    } else {
      const selectedOption = options.find(
        (option) => option[valueKey]?.toString() === selected?.toString()
      );
      if (
        selectedOption &&
        Object.prototype.hasOwnProperty.call(selectedOption, nameKey)
      ) {
        setInputValue(selectedOption[nameKey]);
        setFilterValue("");
      } else {
        setInputValue("");
        setFilterValue("");
      }
    }
  }, [options, inputValue, handleOptionClick, nameKey, valueKey, selected]);

  const handleOptionClickRef = useRef(handleOptionClick);
  handleOptionClickRef.current = handleOptionClick;

  const filterOptionsWithoutCallback = () => {
    const searchText = filterValue.toLowerCase();
    const startsWithFilter = options.filter((option) =>
      option[nameKey]?.toString().toLowerCase().startsWith(searchText)
    );
    const containsFilter = options.filter(
      (option) =>
        !option[nameKey]?.toString().toLowerCase().startsWith(searchText) &&
        option[nameKey]?.toString().toLowerCase().includes(searchText)
    );

    startsWithFilter.sort((a, b) =>
      a[nameKey].toString().localeCompare(b[nameKey].toString())
    );
    containsFilter.sort((a, b) =>
      a[nameKey].toString().localeCompare(b[nameKey].toString())
    );

    const filtered = [...startsWithFilter, ...containsFilter];

    if (staticOptions) {
      filtered.unshift(...staticOptions);
    }

    return filtered;
  };

  const filterOptionsWithCallback = useCallback(() => {
    return filterOptionsWithoutCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue, nameKey, options, staticOptions]);

  const filterOptions = filterOptionsWithCallback;

  const allOptionsWithCallback = useCallback(() => {
    return allOptionsWithoutCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, staticOptions]);

  const allOptionsWithoutCallback = () => {
    return staticOptions ? [...staticOptions, ...options] : options;
  };

  const allOptions = allOptionsWithCallback;

  const filteredOptionsWithoutMemo =
    filterValue === "" ? allOptions() : filterOptions();

  const filteredOptionsWithMemo = useMemo(
    () => filteredOptionsWithoutMemo,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allOptions, filterOptions, filterValue]
  );

  const filteredOptions = filteredOptionsWithMemo;

  useEffect(() => {
    const selectedOption = options?.find(
      (option) => option[valueKey]?.toString() === selected?.toString()
    );

    if (!isInputChanged) {
      if (
        selectedOption &&
        selectedOption[nameKey].toLowerCase().includes("create")
      ) {
        handleClearInputCallback(
          setInputValue,
          setIsInputCleared,
          nameKey,
          valueKey
        );
      } else {
        setInputValue(selectedOption ? selectedOption[nameKey] : "");
      }
    }
  }, [
    handleClearInputCallback,
    options,
    nameKey,
    valueKey,
    isInputChanged,
    selected,
  ]);

  const handleArrowDownEvent = useHandleArrowDown(
    setShowDropdown,
    setHighlightedIndex,
    filteredOptions,
    showDropdown
  );
  const handleArrowUpEvent = useHandleArrowUp(setHighlightedIndex);

  const handleEnterEvent = useHandleEnter(
    handleOptionClick as (option: object) => void,
    filteredOptions,
    highlightedIndex,
    setShowDropdown
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const dropdown = inputRef.current?.querySelector(
        ".custom-autocomplete-dropdown"
      ) as HTMLElement;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          handleArrowDownEvent(dropdown);
          break;
        case "ArrowUp":
          event.preventDefault();
          handleArrowUpEvent(dropdown);
          break;
        case "Enter":
          event.preventDefault();
          handleEnterEvent();
          break;
        case "Tab":
          shouldMatchOption ? handleEnterEvent() : setShowDropdown(false);
          break;
      }
    },
    [handleArrowDownEvent, handleArrowUpEvent, handleEnterEvent]
  );

  useEffect(() => {
    const inputElement = inputRef.current?.querySelector("input");

    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (showDropdown) {
      setHighlightedIndex(0);
    }
  }, [showDropdown]);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    if (showDropdown) {
      const selectedOptionIndex = filteredOptions.findIndex(
        (option) => option[valueKey]?.toString() === selected?.toString()
      );
      setHighlightedIndex(
        selectedOptionIndex !== -1 ? selectedOptionIndex : -1
      );
      if (optionRefs.current[selectedOptionIndex]) {
        optionRefs.current[selectedOptionIndex]?.scrollIntoView({
          block: "nearest",
        });
      }
    } else {
      setHighlightedIndex(-1);
    }
  }, [showDropdown, options, filteredOptions, selected, valueKey]);

  return (
    <div
      className={`position-relative select-w-100 ${
        useHighlightBorder ? "highlight-border" : ""
      }`}
      ref={inputRef}
    >
      <DropdownInput
        handleBlur={onBlur ?? defaultHandleBlurCallback}
        handleInputChange={onChangeCallback}
        handleToggleDropdown={toggleDropdownCallback}
        value={inputValue}
        disabled={disabled}
        inputName={inputName}
        placeholder={placeholder}
        styleError={styleError}
        tooltipPlacement={tooltipPlacement}
        tooltipTitle={tooltipTitle}
        size={size}
        isRequired={isRequired}
        className={className}
      />
      {!disabled && showDropdown && (
        <DropdownOptions
          options={filteredOptions}
          highlightedIndex={highlightedIndex}
          handleOptionClick={handleOptionClick as (option: object) => void}
          nameKey={nameKey}
          openUpwards={openUpwards}
          setHighlightedIndex={setHighlightedIndex}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  );
};

export default AutocompleteDropdown;
