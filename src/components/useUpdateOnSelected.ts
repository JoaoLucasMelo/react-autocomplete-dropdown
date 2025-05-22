import { useEffect } from "react";
import { IGenericSetState } from "../interfaces/CommonInterface";

const useUpdateOnSelected = (
  selected: string | number | undefined,
  options: Array<Record<string, any>>,
  setInputValue: IGenericSetState<string>,
  nameKey: string,
  valueKey: string | number,
  allowZeroValue?: boolean,
  shouldMatchOption?: boolean
) => {
  useEffect(() => {
    if (selected || (allowZeroValue && selected === 0)) {
      const selectedOption = options.find(
        (option) =>
          option[valueKey as keyof typeof option]?.toString() ===
          selected?.toString()
      );
      if (selectedOption) {
        setInputValue(selectedOption[nameKey]);
      }
    } else if (shouldMatchOption) {
      setInputValue("");
    }
  }, [selected, options, nameKey, valueKey, setInputValue]);
};

export default useUpdateOnSelected;
