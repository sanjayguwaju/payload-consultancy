import { useEffect } from "react"

export const useFocusManagement = (
    sidebarRef: React.RefObject<HTMLElement>,
    isOpen: boolean,
    toggleButtonRef: React.RefObject<HTMLButtonElement>
) => {
    useEffect(() => {
        if (isOpen && sidebarRef.current) {
            const firstFocusableElement = sidebarRef.current.querySelector<HTMLElement>(
                'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
            )
            firstFocusableElement?.focus()
        } else if (!isOpen && toggleButtonRef.current) {
            toggleButtonRef.current.focus()
        }
    }, [isOpen, sidebarRef, toggleButtonRef])
}