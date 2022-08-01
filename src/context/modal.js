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

    const openModal = (type) => {
        setOpenModal(true)
        setModalType(type)
    }

    const closeModal = () => {
        setOpenModal(false)
        setModalType('')
    }
    
    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isOpen && <ModalManager modalType={modalType} />}
        </ModalContext.Provider>
    )
}

/**
 * Hook pour appeler les différentes méthodes offertes par le Provider
 */
 export const useModal = () => {
    return useContext(ModalContext);
};