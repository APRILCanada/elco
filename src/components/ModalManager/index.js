import React from 'react'
import { useModal } from '../../context/modal'

//import modal components
import PrivacyPolicy from '../PrivacyPolicy'
import TermsConditions from '../TermsConditions'

const MODAL_COMPONENTS = {
  PRIVACY_MODAL: PrivacyPolicy,
  TERMS_CONDITIONS_MODAL: TermsConditions
}

const ModalManager = () => {
  const { modalType, modalProps } = useModal()

  if (!modalType) {
    return null
  }

  const ModalComponent = MODAL_COMPONENTS[modalType]

  return <ModalComponent {...modalProps} />
}

export default ModalManager