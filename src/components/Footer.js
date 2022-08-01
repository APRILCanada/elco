import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import FacebookIcon from '../assets/icons/facebook'
import LinkedinIcon from '../assets/icons/linkedin'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <Logo>
                <StaticImage
                    src='../assets/images/logo-elco-social.jpg'
                    alt='Elco logo'
                    width={65}
                    height={65}
                    placeholder='tracedSVG'
                    layout='fixed'
                    imgStyle={{ borderRadius: "50%" }}
                />
            </Logo>
            <Address>
                <b>Elco Assurances</b><br />
                3250 boul. Lapinière, suite 105<br />
                Brossard, Québec J4Z 3T8<br />
                +1 800-993-7070
            </Address>
            <OpeningHours>
                {t('openingHours')}
            </OpeningHours>
            <Socials>
                <a href="https://www.facebook.com/ElcoAssurances/" target="_blank" rel="noreferrer" aria-label={t('facebookPage')}>
                    <FacebookIcon />
                </a>

                <a href="https://www.linkedin.com/company/elco-assurances-inc/?originalSubdomain=ca" target="_blank" rel="noreferrer" aria-label={t('linkedinPage')}>
                    <LinkedinIcon />
                </a>
            </Socials>
            <Legal>
                <small>&copy; 2022 Elco All Rights Reserved</small>
                <small>Policy Policy</small>
                <small>Terms and Conditions</small>
            </Legal>
        </Wrapper>
    )
}
export default Footer


// CSS
const Wrapper = styled.footer`
    display: grid;
    grid-template-columns: 65px 1fr;
    column-gap: var(--spacing-l);
    padding: var(--spacing-m);
    background-color: var(--color-tertiary);
    color: var(--color-white);
    height: fit-content;
`

const Logo = styled.div``

const Address = styled.p`
    grid-column: 2;
    margin: 0;
`

const OpeningHours = styled.p`
    grid-column: 2;
    color: var(--color-secondary);
`

const Socials = styled.div`
    grid-column: 2;

    svg {
        margin-right: 1rem;
    }
`

const Legal = styled.div`
    grid-column: 1 / 3;
    align-items: center;
    margin-top: var(--spacing-m);
    padding-top: var(--spacing-s);
    border-top: 1px solid white;
    font-size: 0.9rem;

    & > small {
        margin-right: var(--spacing-m);
        &:not(:first-child) {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
