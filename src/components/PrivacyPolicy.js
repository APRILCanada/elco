import React from 'react'
import Modal from './Modal'
import { useI18next } from 'gatsby-plugin-react-i18next'

const PrivacyPolicy = (() => {
    const { language } = useI18next();

    return language === 'en' ?
        (
            <Modal>
                <h1>Privacy Policy</h1>
                <h2>External Privacy Statement</h2>
                <p>At ELCO, we highly respect and value your right to privacy and we want you to feel comfortable about any private information that you provide to us.
                    To achieve this, and in order to comply with privacy legislation, we have developed this Privacy Policy.</p>

                <p>This Privacy Policy guides our conduct in the collection, use and disclosure of personal information we obtain in the course of our business of providing
                    insurance products to you.</p>

                <p>For the purposes of this policy, “personal information” means information that is personally identifiable to individuals.
                    “Non-identifiable information” means information that cannot be associated with or traced to an individual.</p>

                <p>ELCO collects, uses and discloses Personal Information for the following purposes:
                    <ul>
                        <li>communicating with individuals about their insurance;</li>
                        <li>understanding individual insurance needs;</li>
                        <li>offering and providing insurance and related products and services;</li>
                        <li>verifying the identity and the accuracy of personal information with government agencies, industry associations, or other Insurers;</li>
                        <li>analyzing, assessing and underwriting risks on a prudent basis;</li>
                        <li>investigating and paying insurance claims;</li>
                        <li>detecting and preventing fraud or other illegal activities;</li>
                        <li>compiling statistics;</li>
                        <li>complying with the laws or the requests of law enforcement agencies or regulators.</li>
                        <li>conducting, processing and completing transactions with customers of ELCO</li>
                    </ul>
                </p>

                <p>We do not sell, rent or trade personal information that we collect andwe will not knowingly disclose personal information to any third parties.</p>

                <p>We restrict access to non-public personal information about you, which we hold, to those employees and others who need to know that information to provide
                    products or services to you. Their right to further use the non-public personal information about you is limited by our employee code of conduct,
                    applicable law and non-disclosure agreements where appropriate.</p>

                <p>We will protect your Personal Information by various physical, technological, and organizational safeguards.
                    Safeguards will vary depending on the sensitivity, format, location and storage of the Personal Information.</p>

                <p>We will only collect, use, or disclose Personal Information that is necessary for the Identified Purposes, and will retain your Personal Information only as long
                    as necessary to accomplish the identified Purposes or to satisfy our legal or business obligations.</p>

                <p>ELCO relies on Insurance Brokers to obtain your consent to provide us with your Personal Information so that we can use it for the purposes outlined in this
                    Privacy Policy.</p>

                <p>If you do not consent to how your Personal Information will be used by ELCO, then please either inform your
                    insurance broker when asking them for insurance, or advice us directly at the address below.
                    Please note that this may limit our ability to provide you with insurance.</p >

                <p>ELCO prides itself on its compliance with the Canadian Anti-Spam Legislation(CASL) and will seek your express consent for any communications that fall
                    outside of the purposes of this Privacy Policy.If you have received communication from us that you feel is outside of the scope of this Policy, or if you wish
                    to remove your consent from future communications, please also contact our Privacy Officer at the address below.</p>

                <p>Any complaints or inquiries regarding this policy should be directed to:</p>
                <p>
                    ELCO<br />
                    3250, Blvd Lapinière, suite 100,<br />
                    Brossard, Québec J4Z 3T8<br />
                    1 800-993-707<br />
                </p>

                <p>Attention: Privacy Officer</p>

                <p>Email: privacy@elco.ca</p>

                <p>If you are not satisfied with ELCO's response to a privacy related inquiry or complaint, you may contact the Office of the Privacy
                    Commissioner of Canada during business hours at 1-800-282-1376 or at www.privcom.gc.ca.</p>
            </Modal >
        )
        : <Modal>
            <h1>Politique de confidentialité</h1>
            <h2>Déclaration de confidentialité externe</h2>
            <p>Chez ELCO, nous respectons et apprécions hautement votre droit à la vie privée et nous voulons que vous vous sentiez à l'aise avec toutes les informations privées que vous nous fournissez.
                Pour y parvenir, et afin de nous conformer à la législation sur la confidentialité, nous avons élaboré cette politique de confidentialité.</p>

            <p>Cette politique de confidentialité guide notre conduite dans la collecte, l'utilisation et la divulgation des informations personnelles que nous obtenons dans le cadre de nos activités de fourniture
                produits d'assurance pour vous.</p>

            <p>Aux fins de cette politique, les "informations personnelles" désignent les informations personnellement identifiables par des individus.
                « Informations non identifiables » signifie des informations qui ne peuvent pas être associées ou retracées à un individu.</p>

            <p>ELCO collecte, utilise et divulgue des informations personnelles aux fins suivantes :
                <ul>
                    <li>communiquer avec les particuliers au sujet de leur assurance ;</li>
                    <li>comprendre les besoins d'assurance individuels ;</li>
                    <li>offrir et fournir des assurances et des produits et services connexes ;</li>
                    <li>vérifier l'identité et l'exactitude des informations personnelles auprès des agences gouvernementales, des associations professionnelles ou d'autres assureurs ;</li>
                    <li>analyser, évaluer et souscrire les risques de manière prudente ;</li>
                    <li>enquêter et payer les réclamations d'assurance ;</li>
                    <li>détecter et prévenir la fraude ou d'autres activités illégales ;</li>
                    <li>compiler des statistiques ;</li>
                    <li>se conformer aux lois ou aux demandes des organismes chargés de l'application de la loi ou des régulateurs.</li>
                    <li>réaliser, traiter et finaliser les transactions avec les clients d'ELCO</li>
                </ul>
            </p>

            <p>Nous ne vendons, ne louons ni n'échangeons les informations personnelles que nous collectons et nous ne divulguerons pas sciemment d'informations personnelles à des tiers.</p>

            <p>Nous limitons l'accès aux informations personnelles non publiques vous concernant, que nous détenons, aux employés et autres personnes qui ont besoin de connaître ces informations pour fournir
                produits ou services pour vous. Leur droit d'utiliser ultérieurement les informations personnelles non publiques vous concernant est limité par notre code de conduite des employés,
                la loi applicable et les accords de non-divulgation, le cas échéant.</p>

            <p>Nous protégerons vos informations personnelles par diverses mesures de protection physiques, technologiques et organisationnelles.
                Les garanties varieront en fonction de la sensibilité, du format, de l'emplacement et du stockage des informations personnelles.</p>

            <p>Nous ne collecterons, n'utiliserons ou ne divulguerons que les informations personnelles nécessaires aux fins identifiées, et ne conserverons vos informations personnelles qu'aussi longtemps
                si nécessaire pour accomplir les Objectifs identifiés ou pour satisfaire nos obligations légales ou commerciales.</p>

            <p>ELCO compte sur les courtiers d'assurance pour obtenir votre consentement afin de nous fournir vos informations personnelles afin que nous puissions les utiliser aux fins décrites dans ce
                Politique de confidentialité.</p>

            <p>Si vous ne consentez pas à la manière dont vos informations personnelles seront utilisées par ELCO, veuillez en informer votre
                courtier d'assurance lors de leur demande d'assurance, ou nous conseiller directement à l'adresse ci-dessous.
                Veuillez noter que cela peut limiter notre capacité à vous fournir une assurance.</p >

            <p>ELCO est fière de sa conformité à la législation canadienne anti-pourriel (LCAP) et demandera votre consentement exprès pour toute communication qui tombe
                en dehors des objectifs de cette politique de confidentialité. Si vous avez reçu une communication de notre part qui, selon vous, ne relève pas du champ d'application de cette politique, ou si vous le souhaitez
                pour retirer votre consentement des communications futures, veuillez également contacter notre responsable de la confidentialité à l'adresse ci-dessous.</p>

            <p>Toute plainte ou demande concernant cette politique doit être adressée à :</p>
            <p>
                ELCO<br />
                3250, boul. Lapinière, bureau 100,<br />
                Brossard, Québec J4Z 3T8<br />
                1 800-993-707<br />
            </p>

            <p>Attention : responsable de la confidentialité</p>

            <p>Courriel : privacy@elco.ca</p>

            <p>Si vous n'êtes pas satisfait de la réponse d'ELCO à une demande ou à une plainte relative à la confidentialité, vous pouvez contacter le Bureau de la protection de la vie privée
                Commissaire du Canada pendant les heures d'ouverture au 1-800-282-1376 ou au www.privcom.gc.ca.</p>
        </Modal>
})

export default PrivacyPolicy