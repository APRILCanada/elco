import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useModal } from '../../context/modal'
import Overlay from './Overlay'

const Modal = ({ children }) => {
    const { setOpenModal } = useModal()

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    const handleKeyDown = e => {
        if (e.key === 'Escape' || e.keyCode === 27) {
            setOpenModal(false)
        }
    }

    return (
        <Overlay onClick={() => setOpenModal(false)}>
            <BoxModal
                role="dialog"
                aria-modal="true"
                onClick={e => e.stopPropagation()} // empêcher la fermeture du modal au clic dessus
            >
                {children}
            </BoxModal>
        </Overlay>
    )
}

export default Modal

// CSS
const BoxModal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 2px 2px 15px rgba(79, 81, 80, 0.1);
    width: 60%;
    height: 90%;
    z-index: 1111;
    text-align: center;
    overflow-y: scroll;
`