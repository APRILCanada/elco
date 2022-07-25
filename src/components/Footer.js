import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import media from '../styles/breakpoints'

const Footer = () => {
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
                Nos bureaux sont ouverts du lundi
                au vendredi de 8h30 à 17h.
            </OpeningHours>
            <Socials>
                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5698C0 18.7844 4.51354 23.9521 10.4167 25V15.9719H7.29167V12.5H10.4167V9.72188C10.4167 6.59687 12.4302 4.86146 15.2781 4.86146C16.1802 4.86146 17.1531 5 18.0552 5.13854V8.33333H16.4583C14.9302 8.33333 14.5833 9.09687 14.5833 10.0698V12.5H17.9167L17.3615 15.9719H14.5833V25C20.4865 23.9521 25 18.7854 25 12.5698C25 5.65625 19.375 0 12.5 0C5.625 0 0 5.65625 0 12.5698Z" fill="white" />
                </svg>

                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.90159 0.00634766C2.20867 0.00634766 0.00466919 2.2103 0.00466919 4.90327V20.0993C0.00466919 22.7922 2.20862 24.9954 4.90159 24.9954H20.0976C22.7906 24.9954 24.9937 22.7922 24.9937 20.0993V4.90327C24.9937 2.21035 22.7906 0.00634766 20.0976 0.00634766H4.90159ZM6.13324 4.13005C7.42444 4.13005 8.21977 4.9777 8.24432 6.09192C8.24432 7.18155 7.42439 8.05302 6.10827 8.05302H6.08404C4.81742 8.05302 3.99874 7.1816 3.99874 6.09192C3.99874 4.97772 4.84219 4.13005 6.13322 4.13005H6.13324ZM17.2602 9.3378C19.7435 9.3378 21.605 10.9608 21.605 14.4487V20.9599H17.8312V14.8852C17.8312 13.3587 17.285 12.3173 15.9193 12.3173C14.8767 12.3173 14.2552 13.0192 13.9824 13.6973C13.8827 13.9399 13.8582 14.2788 13.8582 14.6181V20.9599H10.0844C10.0844 20.9599 10.1339 10.6696 10.0844 9.6041H13.859V11.2122C14.3605 10.4384 15.2575 9.33777 17.2602 9.33777V9.3378ZM4.22134 9.60492H7.99517V20.96H4.22134V9.60492Z" fill="white" />
                </svg>

            </Socials>
        </Wrapper>
    )
}

export default Footer


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
        width: 25px;
        margin-right: 1rem;
    }

    ${media.m`
        svg {
            width: 35px;
        }
    `}
`
