import React from "react";
import { createContext } from "react";

interface Props {
    readonly open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
const ContainerContext = createContext<Props>({
    open: [false, open => void open]
});
export default ContainerContext;
