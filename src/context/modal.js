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
    const [modalType, setModalType] = useState('')

    const openModal = (type) => setModalType(type)
    const closeModal = () => setModalType('')
    
    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <ModalManager modalType={modalType} />
        </ModalContext.Provider>
    )
}

/**
 * Hook pour appeler les différentes méthodes offertes par le Provider
 */
 export const useModal = () => {
    return useContext(ModalContext);
};