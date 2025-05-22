import { ChangeEvent, useEffect } from "react";
import { IGenericSetState } from "../interfaces/CommonInterface";

export const handleInputChange =
  (
    setInputValue: IGenericSetState<string>,
    setShowDropdown: IGenericSetState<boolean>,
    setIsInputChanged: IGenericSetState<boolean>
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowDropdown(true);
    setIsInputChanged(true);
  };

export const handleClearInput =
  (handleOptionClick: (option: object) => void, disabled = false) =>
  (
    setInputValue: IGenericSetState<string>,
    setIsInputCleared: IGenericSetState<boolean>,
    nameKey: string,
    valueKey: string
  ) => {
    if (!disabled) {
      setInputValue("");
      setIsInputCleared(true);
      handleOptionClick({ [nameKey]: "", [valueKey]: "" });
    }
  };

export function useResetOnSelectedChange({
  options,
  nameKey,
  valueKey,
  selected,
  isInputChanged,
  isInputCleared,
  setInputValue,
  setIsInputCleared,
  handleClearInputCallback,
}: {
  options: Array<Record<string, any>>;
  nameKey: string;
  valueKey: string;
  selected: any;
  isInputChanged: boolean;
  isInputCleared: boolean;
  setInputValue: IGenericSetState<string>;
  setIsInputCleared: IGenericSetState<boolean>;
  handleClearInputCallback: (
    setInputValue: IGenericSetState<string>,
    setIsInputCleared: IGenericSetState<boolean>,
    nameKey: string,
    valueKey: string
  ) => void;
}) {
  useEffect(() => {
    const selectedOption = options?.find(
      (option) => option[valueKey]?.toString() === selected?.toString()
    );
    if (!isInputChanged && !isInputCleared) {
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
    if (isInputCleared) {
      setIsInputCleared(false);
    }
  }, [
    handleClearInputCallback,
    options,
    nameKey,
    valueKey,
    isInputChanged,
    isInputCleared,
    selected,
    setInputValue,
    setIsInputCleared,
  ]);
}
