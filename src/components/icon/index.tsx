import type { IconProps } from "typesrc/components/icons";

export default function Icon({
    className = "",
    children
}: IconProps) {

    return (
        <span className={`material-symbols-rounded ${className}`}>
            {children}
        </span>
    )
}