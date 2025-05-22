import { IGenericSetState } from "../interfaces/CommonInterface";

export const toggleDropdown =
  (setShowDropdown: IGenericSetState<boolean>, disabled: boolean | undefined) =>
  () => {
    if (!disabled) {
      setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    }
  };
