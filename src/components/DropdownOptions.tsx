import { FC, useRef, useEffect } from "react";

interface IDropdownOptionsProps {
  options: { [key: string]: any }[];
  highlightedIndex: number;
  handleOptionClick: (option: object) => void;
  nameKey: string;
  openUpwards: boolean;
  setHighlightedIndex: (index: number) => void;
  closeDropdown: () => void;
}

const DropdownOptions: FC<IDropdownOptionsProps> = ({
  options,
  highlightedIndex,
  handleOptionClick,
  nameKey,
  openUpwards,
  setHighlightedIndex,
  closeDropdown,
}) => {
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const optionRef = optionRefs.current[highlightedIndex];
    if (optionRef) {
      optionRef.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  return (
    <ul
      className={`position-absolute custom-autocomplete-dropdown list-group list-group-hover list-group-striped bg-white border p-0 m-0 shadow ${
        openUpwards ? "dropdown-upwards" : ""
      }`}
    >
      {options.length === 0 ? (
        <li className="p-2 list-group-item" onClick={closeDropdown}>
          <i className="fs-6 text-muted">No options available.</i>
        </li>
      ) : (
        options.map((option, index) => (
          <li
            ref={(el) => {
              optionRefs.current[index] = el;
            }}
            role="button"
            key={index}
            className={`px-3 py-2 list-group-item-action pe-auto ${
              index === highlightedIndex ? "active" : ""
            }`}
            onMouseDown={(event) => {
              event.preventDefault();

              handleOptionClick(option);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            {option[nameKey] as string}
          </li>
        ))
      )}
    </ul>
  );
};

export default DropdownOptions;
