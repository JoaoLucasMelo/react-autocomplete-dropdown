import { useCallback } from "react";
import { IGenericSetState } from "../interfaces/CommonInterface";

export const scrollDropdown = (
  dropdown: HTMLElement,
  optionElement: HTMLElement,
  isArrowDown: boolean
) => {
  const rect = optionElement.getBoundingClientRect();
  const dropdownRect = dropdown.getBoundingClientRect();

  if (isArrowDown) {
    if (rect.bottom > dropdownRect.bottom) {
      dropdown.scrollTop =
        optionElement.offsetTop -
        dropdown.clientHeight +
        optionElement.clientHeight;
    }
  } else {
    if (rect.top < dropdownRect.top) {
      dropdown.scrollTop = optionElement.offsetTop;
    }
  }
};

export const useHandleArrowDown = (
  setShowDropdown: IGenericSetState<boolean>,
  setHighlightedIndex: IGenericSetState<number>,
  filteredOptions: object[],
  showDropdown: boolean
) =>
  useCallback(
    (dropdown: HTMLElement) => {
      if (!showDropdown) {
        setShowDropdown(true);
      } else {
        setHighlightedIndex((prevState) => {
          const newIndex =
            prevState < filteredOptions?.length - 1 ? prevState + 1 : prevState;

          if (dropdown && dropdown.children[newIndex]) {
            const optionElement = dropdown.children[newIndex] as HTMLElement;

            scrollDropdown(dropdown, optionElement, true);
          }

          return newIndex;
        });
      }
    },
    [
      filteredOptions?.length,
      setHighlightedIndex,
      setShowDropdown,
      showDropdown,
    ]
  );

export const useHandleArrowUp = (
  setHighlightedIndex: IGenericSetState<number>
) =>
  useCallback(
    (dropdown: HTMLElement) => {
      setHighlightedIndex((prevState) => {
        const newIndex = prevState > 0 ? prevState - 1 : prevState;
        if (dropdown && dropdown.children[newIndex]) {
          const optionElement = dropdown.children[newIndex] as HTMLElement;

          scrollDropdown(dropdown, optionElement, false);
        }
        return newIndex;
      });
    },
    [setHighlightedIndex]
  );

export const useHandleEnter = (
  handleOptionClick: (option: object) => void,
  filteredOptions: object[],
  highlightedIndex: number,
  setShowDropdown: (showDropdown: boolean) => void
) =>
  useCallback(() => {
    const selectedOption = filteredOptions[highlightedIndex];
    if (selectedOption) {
      handleOptionClick(selectedOption);
    } else {
      setShowDropdown(false);
    }
  }, [filteredOptions, handleOptionClick, highlightedIndex]);
