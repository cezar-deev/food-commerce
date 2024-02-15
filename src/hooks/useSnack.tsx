import { useContext } from "react";
import { SnackContext } from "../contexts/SnackContexts";

export function useSnack () {
  return useContext(SnackContext)
}
