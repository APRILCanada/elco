import React from 'react'

// modal components
import PrivacyPolicyModal from '../PrivacyPolicy'
import TermsConditionsModal from '../TermsConditions'

const MODAL_COMPONENTS = {
  PRIVACY_MODAL: PrivacyPolicyModal,
  TERMS_CONDITIONS_MODAL: TermsConditionsModal
}

const ModalManager = ({ modalType }) => {

  if (!modalType) {
    return null
  }

  const ModalComponent = MODAL_COMPONENTS[modalType]

  return <ModalComponent />
}

export default ModalManager