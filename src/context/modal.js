import React, { createContext, useState, useContext } from "react";
import ModalManager from "../components/ModalManager";

/**
 * Création du contexte Modal
 */
const ModalContext = createContext()

/**
 * Création du Provider Modal
 */
export const ModalProvider = ({ children }) => {
    const [isOpen, setOpenModal] = useState(false)
    const [modalType, setModalType] = useState('')
    
    return (
        <ModalContext.Provider value={{ setOpenModal, setModalType, modalType }}>
            {children}
            {isOpen && <ModalManager isOpen={isOpen} modalType={modalType} />}
        </ModalContext.Provider>
    )
}

/**
 * Hook pour appeler les différentes méthodes offertes par le Provider
 */
 export const useModal = () => {
    return useContext(ModalContext);
};