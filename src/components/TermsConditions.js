import React from 'react'
import Modal from './Modal'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'

const TermsConditions = (() => {
    const { language } = useI18next()

    return language === "en" ? (
        <Modal>
            <h1>Terms and conditions</h1>
            <h2>Terms of use</h2>
            <p>This contract is a legal agreement between the user of this Site and Elco regarding the website www.elco.ca (Site).</p>

            <p><b>PLEASE READ CAREFULLY BEFORE ANY NAVIGATION</b></p>

            <p>By surfing the Site, you agree to be bound by the terms and conditions of this contract, and this,
                as long as you are on the Site or bound by the Site after making a purchase.</p>

            <p><b>IF YOU DO NOT WANT TO BE BOUND BY THIS AGREEMENT, DO NOT NAVIGATE ON THIS SITE.</b>
                The modalities and terms of the contract may change at any time and shall come into force automatically.
                Therefore, please check regularly to see if they were amended. No warnings will be issued following the change of terms of the contract.
                We consider that you accept a change in the terms of use if you continue to use the Site after publication of any amendment.</p>

            <p><b>PROPERTY RIGHTS</b></p>
            <p>You acknowledge and agree that all of the content and features available on this Site - especially, but not limited to, text, programs and software, databases,
                photos, movies, sounds, music, presentation and logos - are protected by copyrights, rights protection database, trademarks, service marks, patents, trade secrets
                or other rights and property laws. The content and materials available are either exclusively owned and controlled by April or used under license.
                These conditions apply to all content and all elements available on the Site.</p>

            <p><b>NO UNLAWFUL OR PROHIBITED USE</b></p>
            <p>As a condition of your use of the Site, you warrant to ELCO that you will not use the Site for any purpose that is unlawful or prohibited by these terms,
                conditions, and notices. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and
                enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not
                intentionally made available or provided for through the Site.</p>

            <p><b>USE OF THIS SITE</b></p>
            <p>The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and / or other message or communication
                facilities designed to enable you to communicate with the public at large or with a group(collectively, 'Communication Services'), you agree to use
                the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.By way of example,
                and not as a limitation, you agree that when using a Communication Service, you will not:</p>
            <p><ul>
                <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights(such as rights of privacy and publicity) of others.</li>
                <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information.</li>
                <li>Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
                <li>Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer.</li>
                <li>Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages.</li>
                <li>Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>
                <li>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.</li>
                <li>Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li>
                <li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li>
                <li>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li>
                <li>Harvest or otherwise collect information about others, including e - mail addresses, without their consent.</li>
                <li>Violate any applicable laws or regulations.</li>
            </ul></p>

            <p>ELCO has no obligation to monitor the Communication Services.However, ELCO reserves the right to review materials posted to a Communication Service and to remove
                any materials in its sole discretion. ELCO reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any
                reason whatsoever.</p>

            <p>ELCO reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request,
                or to edit, refuse to post or to remove any information or materials, in whole or in part, in Elco'sole discretion.</p>

            <p>Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service.April does not control
                or endorse the content, messages or information found in any Communication Service and, therefore, April specifically disclaims any liability with regard to
                the Communication Services and any actions resulting from your participation in any Communication Service.Managers and hosts are not authorized April spokespersons,
                and their views do not necessarily reflect those of ELCO.</p>

            <p>Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and / or dissemination.You are responsible
                for adhering to such limitations if you download the materials.</p>

            <p><b>MATERIALS PROVIDED TO ELCO OR POSTED AT ANY APRIL WEB SITE</b></p>
            <p>ELCO does not claim ownership of the materials you provide to ELCO(including feedback and suggestions) or post, upload, input or submit to any Site or its associated
                services(collectively 'Submissions').However, by posting, uploading, inputting, providing or submitting your Submission you are granting eLCO, its affiliated
                companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including,
                without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and
                to publish your name in connection with your Submission.</p>

            <p>No compensation will be paid with respect to the use of your Submission, as provided herein. ELCO is under no obligation to post or use any Submission
                you may provide and may remove any Submission at any time in Elco' sole discretion.</p>

            <p>By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your
                Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.</p>

            <p><b>LIABILITY DISCLAIMER</b></p>

            <p><b>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY
                ADDED TO THE INFORMATION HEREIN. ELCO AND / OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND / OR CHANGES IN THE SITE AT ANY TIME. ADVICE RECEIVED VIA THE SITE SHOULD
                NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED
                TO YOUR SITUATION.</b></p>

            <p><b>ELCO AND / OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE,
                PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE STIE FOR ANY PURPOSE.TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE,
                PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. ELCO AND / OR ITS SUPPLIERS HEREBY DISCLAIM ALL
                WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON - INFRINGEMENT.</b></p>

            <p><b>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ELCO AND / OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL
                SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY
                WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
                PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE
                USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF ELCO OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF
                THE POSSIBILITY OF DAMAGES.BECAUSE SOME PROVINCES / STATES / JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
                INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE,
                YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.</b></p>

            <p><b>LINKS TO THIRD PARTY SITES</b></p>
            <p>The Site may contain links to other Web Sites(“Linked Sites”).The Linked Sites are not under the control of ELCO and ELCO
                is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site,
                or any changes or updates to a Linked Site. ELCO is not responsible for webcasting or any other form of transmission received
                from any Linked Site. ELCO is providing these links to you only as a convenience, and the inclusion of any link does not
                imply endorsement by ELCO of the Linked Site or any association with its operators.</p>

            <p><b>TERMINATION / ACCESS RESTRICTION</b></p>
            <p>ELCO reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice.
                To the maximum extent permitted by law, this agreement is governed by the laws of the Province of Quebec and you hereby consent to the exclusive jurisdiction and venue
                of courts in Longueuil, Quebec, in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give
                effect to all provisions of these terms and conditions, including without limitation this paragraph. You agree that no joint venture, partnership, employment, or
                agency relationship exists between you and ELCO as a result of this agreement or use of the Site. ELCO' performance of this agreement is subject to existing laws
                and legal process, and nothing contained in this agreement is in derogation of ELCO' right to comply with governmental, court and law enforcement requests or
                requirements relating to your use of the Site or information provided to or gathered by ELCO with respect to such use. If any part of this agreement is determined
                to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above,
                then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original
                provision and the remainder of the agreement shall continue in effect. Unless otherwise specified herein, this agreement constitutes the entire agreement
                between the user and ELCO with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral
                or written, between the user and ELCO with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall
                be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent an d subject to the same conditions
                as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement
                and all related documents be drawn up in English</p>

            <p><b>Privacy Policy</b></p>
            <p>ELCO adheres to very strict principles regarding privacy protection.</p>

            <p><b>Here is an outline or our policy.</b></p>

            <p>Information that we collect</p>
            <p>ELCO collects two types of information relating to Site visitors. The first type is personal data, such as your name, addresses, phone number, email address, etc.,
                which is communicated voluntarily. Most of this information is collected when you purchase a product or service from ELCO or when you contact us by email
                or by submitting a form on our Site. We may keep your name, email and / or any other personal information that you voluntarily submit to ELCO in order to
                identify you for future communications and to personalize the service we provide.</p>

            <p>The second type of information we collect is general information, such as the number of visitors on our sites, the visited pages, etc.</p>

            <p>In general, we do not require your personal information prior to your visit on our Site. However, you may not have access to view certain site pages without disclosing your
                identity.</p>

            <p>Why do we collect this information ?</p>
            <p>ELCO collects personal information in order to identify visitors interested in buying its products and services. The information is also collected to enable us
                to personalize your access to our Site. With it, we are able to customize the content of our Site to improve your experience and ensure your satisfaction.</p>

            <p>ELCO has no intention of using the information you submitted to contact you without prior authorization. You can modify your preferences at any time by
                contacting us using the contact form available on this Site.</p>

            <p><b>Cookies</b></p>
            <p>ELCO may place cookies on your hard disk in order to obtain non - personal data. Cookies are files that your browser places on your hard disk when you visit
                a Site. Browsers may be configured to accept cookies automatically but you may also configure them to request your approval before placing a cookie.</p>

            <p>These cookies allow us to personalize your visits and recognize you every time you return to our Site.</p>

            <p><Link href='https://policies.google.com/privacy?hl=en-US' target='_blank' rel="noopener noreferrer">To have more information on Google Analytics privacy policy.</Link></p>
            <p><Link href='https://tools.google.com/dlpage/gaoptout' target='_blank' rel="noopener noreferrer">To Opt - out from Google Analytics.</Link></p>

            <p><b>Data transmission to third parties</b></p>
            <p>ELCO will not reveal or sell the data it has collected to third parties without your prior authorization, except where required by the law.</p>

            <p><b>DATA_SECURTITY</b></p>
            <p>ELCO will store all data it collects in a safe and secure location.In addition, we will take all precautions necessary to protect your data against loss, fraud
                or unwanted use.</p>

            <p>ELCO Site contains links to other websites.April is not responsible for the practices of said websites with regards to privacy protection.</p>
            <p>ELCO will store all data it collects in a safe and secure location. In addition, we will take all precautions necessary to protect your data against loss, fraud or
                unwanted use.</p>

            <p><b>COPYRIGHT AND TRADEMARK NOTICES</b></p>
            <p>ELCO All rights reserved.</p>

            <p><b>TRADEMARKS</b></p>
            <p>The names and logos of actual companies and products mentioned herein may be the trademarks of their respective owners.</p>

            <p>The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person,
                or event is intended or should be inferred.</p>

            <p>Any rights not expressly granted herein are reserved.</p>

            <p><b>CONTACT</b></p>
            <p>For more information on the legal issues contained in these terms of use, or any questions or problems about this service, please write to us using the contact
                form available on this Site.</p>
        </Modal >
    ) :

        (<Modal>
            <h1>Termes et conditions</h1>
            <h2>Conditions d'utilisation</h2>
            <p>Ce contrat est un accord légal entre l'utilisateur de ce Site et Elco concernant le site Web www.elco.ca (Site).</p>

            <p><b>MERCI DE LIRE ATTENTIVEMENT AVANT TOUTE NAVIGATION</b></p>

            <p>En naviguant sur le Site, vous acceptez d'être lié par les termes et conditions de ce contrat, et ce,
                tant que vous êtes sur le Site ou lié par le Site après avoir effectué un achat.</p>

            <p><b>SI VOUS NE VOULEZ PAS ÊTRE LIÉ PAR CET ACCORD, NE NAVIGUEZ PAS SUR CE SITE.</b>
                Les modalités et termes du contrat peuvent changer à tout moment et entrent en vigueur automatiquement.
                Par conséquent, veuillez vérifier régulièrement si elles ont été modifiées. Aucun avertissement ne sera émis suite à la modification des termes du contrat.
                Nous considérons que vous acceptez une modification des conditions d'utilisation si vous continuez à utiliser le Site après publication de toute modification.</p>

            <p><b>DROITS DE PROPRIÉTÉ</b></p>
            <p>Vous reconnaissez et acceptez que l'ensemble du contenu et des fonctionnalités disponibles sur ce Site - en particulier, mais sans s'y limiter, les textes, programmes et logiciels, bases de données,
                photos, films, sons, musique, présentation et logos - sont protégés par des droits d'auteur, une base de données de protection des droits, des marques déposées, des marques de service, des brevets, des secrets commerciaux
                ou d'autres lois sur les droits et la propriété. Le contenu et les éléments disponibles sont soit exclusivement détenus et contrôlés par April, soit utilisés sous licence.
                Ces conditions s'appliquent à tous les contenus et tous les éléments disponibles sur le Site.</p>

            <p><b>AUCUNE UTILISATION ILLÉGALE OU INTERDITE</b></p>
            <p>Comme condition de votre utilisation du Site, vous garantissez à ELCO que vous n'utiliserez pas le Site à des fins illégales ou interdites par les présentes conditions,
                conditions et avis. Vous ne pouvez pas utiliser le site d'une manière qui pourrait endommager, désactiver, surcharger ou détériorer le site ou interférer avec l'utilisation et
                jouissance du Site. Vous ne pouvez pas obtenir ou tenter d'obtenir des documents ou des informations par des moyens non
                intentionnellement mis à disposition ou fourni via le Site.</p>

            <p><b>UTILISATION DE CE SITE</b></p>
            <p>Le Site peut contenir des services de tableau d'affichage, des zones de discussion, des groupes de discussion, des forums, des communautés, des pages Web personnelles, des calendriers et/ou d'autres messages ou communications
                installations conçues pour vous permettre de communiquer avec le grand public ou avec un groupe (collectivement, les « services de communication »), vous acceptez d'utiliser
                les Services de communication uniquement pour publier, envoyer et recevoir des messages et du matériel qui sont appropriés et liés au Service de communication particulier. À titre d'exemple,
                et non à titre limitatif, vous acceptez qu'en utilisant un Service de communication, vous ne :</p>

            <p><ul>
                <li> Diffamer, abuser, harceler, traquer, menacer ou autrement violer les droits légaux (tels que les droits à la vie privée et à la publicité) d'autrui.</li>
                <li>Publier, publier, télécharger, distribuer ou diffuser tout sujet, nom, matériel ou information inapproprié, profane, diffamatoire, contrefait, obscène, indécent ou illégal.</li>
                <li>Téléchargez des fichiers contenant des logiciels ou d'autres éléments protégés par les lois sur la propriété intellectuelle (ou par des droits de confidentialité ou de publicité), sauf si vous possédez ou contrôlez les droits y afférents ou si vous avez reçu tous les consentements nécessaires.</li>
                <li>Téléchargez des fichiers contenant des virus, des fichiers corrompus ou tout autre logiciel ou programme similaire susceptible d'endommager le fonctionnement de l'ordinateur d'un tiers.</li>
                <li>Faire de la publicité ou proposer de vendre ou d'acheter des biens ou des services à des fins commerciales, à moins que ce service de communication n'autorise spécifiquement de tels messages.</li>
                <li>Réaliser ou transmettre des enquêtes, des concours, des systèmes pyramidaux ou des chaînes de lettres</li>
                <li>Téléchargez tout fichier publié par un autre utilisateur d'un service de communication dont vous savez, ou devriez raisonnablement savoir, qu'il ne peut pas être légalement distribué de cette manière.</li>
                <li>Falsifier ou supprimer les attributions d'auteur, les avis légaux ou autres avis appropriés ou les désignations ou étiquettes de propriété de l'origine ou de la source du logiciel ou de tout autre matériel contenu dans un fichier qui est téléchargé.</li>
                <li>Restreindre ou empêcher tout autre utilisateur d'utiliser et de profiter des Services de communication.</li>
                <li>Violer tout code de conduite ou autres directives pouvant s'appliquer à un service de communication particulier.</li>
                <li>Récolter ou collecter d'une autre manière des informations sur d'autres personnes, y compris des adresses e-mail, sans leur consentement.</li>
                <li>Violer les lois ou réglementations applicables.</li>
            </ul></p>

            <p>ELCO n'a aucune obligation de surveiller les services de communication. Toutefois, ELCO se réserve le droit d'examiner les documents publiés sur un service de communication et de supprimer
                tout matériel à sa seule discrétion. ELCO se réserve le droit de résilier votre accès à tout ou partie des Services de Communication à tout moment et sans préavis pour
                raison que ce soit.</p>

            <p>ELCO se réserve le droit, à tout moment, de divulguer toute information nécessaire pour satisfaire à toute loi, réglementation, procédure judiciaire ou demande gouvernementale applicable,
                ou de modifier, de refuser de publier ou de supprimer toute information ou matériel, en tout ou en partie, à la seule discrétion d'Elco.</p>

            <p>Soyez toujours prudent lorsque vous fournissez des informations d'identification personnelle sur vous-même ou vos enfants dans tout service de communication. April ne contrôle pas
                ou approuver le contenu, les messages ou les informations trouvés dans tout service de communication et, par conséquent, April décline spécifiquement toute responsabilité en ce qui concerne
                les Services de communication et toute action résultant de votre participation à tout Service de communication. Les gestionnaires et les hôtes ne sont pas des porte-parole autorisés d'April,
                et leurs opinions ne reflètent pas nécessairement celles d'ELCO.</p>

            <p>Les éléments téléchargés sur un service de communication peuvent être soumis à des limitations d'utilisation, de reproduction et/ou de diffusion. Vous êtes responsable
                pour adhérer à ces limitations si vous téléchargez les documents.</p>

            <p><b>MATÉRIAUX FOURNIS À ELCO OU PUBLIÉS SUR TOUT SITE WEB D'APRIL</b></p>
            <p>ELCO ne revendique pas la propriété des documents que vous fournissez à ELCO (y compris les commentaires et suggestions) ou que vous publiez, téléchargez, saisissez ou soumettez à un site ou à ses sites associés.
                services (collectivement « Soumissions »). Cependant, en publiant, téléchargeant, saisissant, fournissant ou soumettant votre Soumission, vous accordez à eLCO, son affilié
                les entreprises et les sous-licenciés nécessaires l'autorisation d'utiliser votre soumission dans le cadre de l'exploitation de leurs activités Internet, y compris,
                sans limitation, les droits de : copier, distribuer, transmettre, afficher publiquement, exécuter publiquement, reproduire, éditer, traduire et reformater votre Soumission ; et
                de publier votre nom en lien avec votre Soumission.</p>

            <p>Aucune compensation ne sera versée pour l'utilisation de votre Soumission, comme prévu dans les présentes. ELCO n'a aucune obligation de publier ou d'utiliser toute Soumission
                vous pouvez fournir et supprimer toute Soumission à tout moment à la seule discrétion d'Elco.</p>

            <p>En publiant, téléchargeant, saisissant, fournissant ou soumettant votre soumission, vous garantissez et déclarez que vous possédez ou contrôlez autrement tous les droits sur votre
                Soumission telle que décrite dans cette section, y compris, sans s'y limiter, tous les droits nécessaires pour fournir, publier, télécharger, saisir ou soumettre les Soumissions.</p>

            <p><b>AVIS DE NON-RESPONSABILITÉ</b></p>

            <p><b>LES INFORMATIONS, LOGICIELS, PRODUITS ET SERVICES INCLUS DANS OU DISPONIBLES SUR LE SITE PEUVENT COMPORTER DES INEXACTITUDES OU DES ERREURS TYPOGRAPHIQUES. DES CHANGEMENTS SONT PÉRIODIQUEMENT
                AJOUTÉ AUX INFORMATIONS CI-DESSOUS. ELCO ET/OU SES FOURNISSEURS PEUVENT APPORTER DES AMÉLIORATIONS ET/OU DES MODIFICATIONS AU SITE À TOUT MOMENT. LES CONSEILS REÇUS VIA LE SITE DOIVENT
                NE PAS ÊTRE COMPTÉ POUR DES DÉCISIONS PERSONNELLES, MÉDICALES, JURIDIQUES OU FINANCIÈRES ET VOUS DEVEZ CONSULTER UN PROFESSIONNEL APPROPRIÉ POUR DES CONSEILS SPÉCIFIQUES SUR MESURE
                À VOTRE SITUATION.</b></p>

            <p><b>ELCO ET/OU SES FOURNISSEURS NE FONT AUCUNE DÉCLARATION QUANT À L'ADÉQUATION, LA FIABILITÉ, LA DISPONIBILITÉ, L'OPPORTUNITÉ ET L'EXACTITUDE DES INFORMATIONS, DU LOGICIEL,
                PRODUITS, SERVICES ET GRAPHIQUES ASSOCIÉS CONTENUS SUR LE STIE À TOUTE FIN. DANS LA MESURE MAXIMALE AUTORISÉE PAR LA LOI APPLICABLE, TOUTES CES INFORMATIONS, LOGICIELS,
                LES PRODUITS, SERVICES ET GRAPHIQUES ASSOCIÉS SONT FOURNIS "TELS QUELS" SANS GARANTIE OU CONDITION D'AUCUNE SORTE. ELCO ET/OU SES FOURNISSEURS DÉCLINENT PAR LA PRÉSENTE TOUT
                GARANTIES ET CONDITIONS CONCERNANT CES INFORMATIONS, LOGICIELS, PRODUITS, SERVICES ET GRAPHIQUES ASSOCIÉS, Y COMPRIS TOUTES LES GARANTIES OU CONDITIONS IMPLICITES
                DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER, DE TITRE ET DE NON - CONTREFAÇON.</b></p>

            <p><b> DANS LA MESURE MAXIMALE AUTORISÉE PAR LA LOI APPLICABLE, EN AUCUN CAS ELCO ET/OU SES FOURNISSEURS NE SERONT RESPONSABLES DE TOUT DOMMAGE DIRECT, INDIRECT, PUNITIF, ACCESSOIRE
                DOMMAGES SPÉCIAUX, CONSÉCUTIFS OU TOUT DOMMAGE QUEL QU'IL SOIT, Y COMPRIS, SANS S'Y LIMITER, LES DOMMAGES POUR PERTE D'UTILISATION, DE DONNÉES OU DE PROFITS, DÉCOULANT DE OU DANS TOUTE
                MANIÈRE LIÉE À L'UTILISATION OU À LA PERFORMANCE DU SITE, AVEC LE RETARD OU L'IMPOSSIBILITÉ D'UTILISER LE SITE OU LES SERVICES ASSOCIÉS, LA FOURNITURE OU L'ÉCHEC
                FOURNIR DES SERVICES, OU POUR TOUTE INFORMATION, LOGICIEL, PRODUITS, SERVICES ET GRAPHIQUES ASSOCIÉS OBTENUS VIA LE SITE, OU AUTREMENT DÉCOULANT DE LA
                UTILISATION DU SITE, QU'ELLE SOIT BASÉE SUR UN CONTRAT, UN DÉLIT, UNE NÉGLIGENCE, UNE RESPONSABILITÉ STRICTE OU AUTRE, MÊME SI ELCO OU L'UN DE SES FOURNISSEURS A ÉTÉ AVISÉ
                LA POSSIBILITÉ DE DOMMAGES. PARCE QUE CERTAINES PROVINCES / ÉTATS / JURIDICTIONS NE PERMETTENT PAS L'EXCLUSION OU LA LIMITATION DE RESPONSABILITÉ POUR LES DOMMAGES CONSÉCUTIFS OU
                DOMMAGES ACCESSOIRES, LA LIMITATION CI-DESSUS PEUT NE PAS S'APPLIQUER À VOUS. SI VOUS N'ÊTES PAS SATISFAIT D'UNE PARTIE DU SITE OU DE L'UNE DE CES CONDITIONS D'UTILISATION,
                VOTRE SEUL ET UNIQUE RECOURS EST DE CESSER D'UTILISER LE SITE.</b></p>

            <p><b>LIENS VERS DES SITES TIERS</b></p>
            <p>Le Site peut contenir des liens vers d'autres sites Web ("Sites liés"). Les Sites liés ne sont pas sous le contrôle d'ELCO et d'ELCO
                n'est pas responsable du contenu de tout site lié, y compris, sans s'y limiter, tout lien contenu dans un site lié,
                ou toute modification ou mise à jour d'un site lié. ELCO n'est pas responsable de la diffusion sur le Web ou de toute autre forme de transmission reçue
                à partir de n'importe quel site lié. ELCO vous fournit ces liens uniquement pour votre commodité, et l'inclusion de tout lien ne signifie pas
                impliquent l'approbation par ELCO du site lié ou de toute association avec ses opérateurs.</p>

            <p><b>RÉSILIATION / RESTRICTION D'ACCÈS</b></p>
            <p>ELCO se réserve le droit, à sa seule discrétion, de résilier votre accès au Site et aux services connexes ou à toute partie de ceux-ci à tout moment, sans préavis.
                Dans la mesure maximale permise par la loi, cet accord est régi par les lois de la province de Québec et vous consentez par la présente à la juridiction et au lieu exclusifs
                des tribunaux de Longueuil, Québec, dans tous les litiges découlant de ou liés à l'utilisation du Site. L'utilisation du site n'est pas autorisée dans toute juridiction qui ne donne pas
                effet à toutes les dispositions de ces termes et conditions, y compris, sans s'y limiter, ce paragraphe. Vous convenez qu'aucune coentreprise, partenariat, emploi ou
                relation d'agence existe entre vous et ELCO à la suite de cet accord ou de l'utilisation du Site. L'exécution par ELCO de cet accord est soumise aux lois en vigueur
                et la procédure judiciaire, et rien dans le présent accord ne déroge au droit d'ELCO de se conformer aux demandes gouvernementales, judiciaires et d'application de la loi ou
                les exigences relatives à votre utilisation du Site ou les informations fournies ou recueillies par ELCO concernant cette utilisation. Si une partie de cet accord est déterminée
                être invalide ou inapplicable conformément à la loi applicable, y compris, mais sans s'y limiter, les exclusions de garantie et les limitations de responsabilité énoncées ci-dessus,
                alors la disposition invalide ou inapplicable sera réputée remplacée par une disposition valide et exécutoire qui correspond le mieux à l'intention de l'original
                disposition et le reste de l'accord reste en vigueur. Sauf indication contraire dans les présentes, cet accord constitue l'intégralité de l'accord
                entre l'utilisateur et ELCO en ce qui concerne le Site et il annule et remplace toutes les communications et propositions antérieures ou contemporaines, qu'elles soient électroniques, orales
                ou écrit, entre l'utilisateur et ELCO concernant le Site. Une version imprimée de cet accord et de tout avis donné sous forme électronique devra
                être recevable dans les procédures judiciaires ou administratives fondées sur ou liées au présent accord dans la même mesure et sous les mêmes conditions
                que d'autres documents commerciaux et enregistrements générés et conservés à l'origine sous forme imprimée. C'est la volonté expresse des parties que cet accord
                et tous les documents y afférents soient rédigés en anglais</p>

            <p><b>Politique de confidentialité</b></p>
            <p>ELCO adhère à des principes très stricts en matière de protection de la vie privée.</p>

            <p><b>Voici un aperçu de notre politique.</b></p>

            <p>Informations que nous collectons</p>
            <p>ELCO collecte deux types d'informations relatives aux visiteurs du Site. Le premier type est constitué de données personnelles, telles que votre nom, vos adresses, votre numéro de téléphone, votre adresse e-mail, etc.,
                qui est communiqué volontairement. La plupart de ces informations sont collectées lorsque vous achetez un produit ou un service auprès d'ELCO ou lorsque vous nous contactez par e-mail
                ou en soumettant un formulaire sur notre Site. Nous pouvons conserver votre nom, votre adresse e-mail et / ou toute autre information personnelle que vous soumettez volontairement à ELCO afin de
                vous identifier pour de futures communications et personnaliser le service que nous offrons.</p>

            <p>Le deuxième type d'informations que nous collectons sont des informations générales, telles que le nombre de visiteurs sur nos sites, les pages visitées, etc.</p>

            <p>En général, nous n'avons pas besoin de vos informations personnelles avant votre visite sur notre Site. Cependant, vous ne pouvez pas avoir accès à certaines pages du site sans divulguer votre
                identité.</p>

            <p>Pourquoi collectons-nous ces informations ?</p>
            <p>ELCO collecte des informations personnelles afin d'identifier les visiteurs intéressés par l'achat de ses produits et services. Les informations sont également collectées pour nous permettre
                pour personnaliser votre accès à notre Site. Grâce à lui, nous sommes en mesure de personnaliser le contenu de notre Site pour améliorer votre expérience et assurer votre satisfaction.</p>

            <p>ELCO n'a pas l'intention d'utiliser les informations que vous avez soumises pour vous contacter sans autorisation préalable. Vous pouvez modifier vos préférences à tout moment en
                en nous contactant via le formulaire de contact disponible sur ce Site.</p>

            <p><b>Cookies</b></p>
            <p>ELCO peut placer des cookies sur votre disque dur afin d'obtenir des données non personnelles. Les cookies sont des fichiers que votre navigateur place sur votre disque dur lorsque vous visitez
                un site. Les navigateurs peuvent être configurés pour accepter automatiquement les cookies, mais vous pouvez également les configurer pour demander votre approbation avant de placer un cookie.</p>

            <p>Ces cookies nous permettent de personnaliser vos visites et de vous reconnaître à chaque fois que vous revenez sur notre Site.</p>

            <p><Link href='https://policies.google.com/privacy?hl=fr' target='_blank' rel="noopener noreferrer">Pour avoir plus d'informations sur la politique de confidentialité de Google Analytics.</Link></p>
            <p><Link href='https://tools.google.com/dlpage/gaoptout' target='_blank' rel="noopener noreferrer">Pour vous désinscrire de Google Analytics.</Link></p>

            <p><b>Transmission de données à des tiers</b></p>
            <p>ELCO s'engage à ne pas divulguer ni vendre les données qu'elle a collectées à des tiers sans votre autorisation préalable, sauf si la loi l'exige.</p>

            <p><b>DATA_SECURTITY</b></p>
            <p>ELCO stockera toutes les données qu'elle collecte dans un endroit sûr et sécurisé. De plus, nous prendrons toutes les précautions nécessaires pour protéger vos données contre la perte, la fraude
                ou une utilisation indésirable.</p>

            <p>Le site ELCO contient des liens vers d'autres sites Web. April n'est pas responsable des pratiques de ces sites Web en matière de protection de la vie privée.</p>
            <p>ELCO stockera toutes les données collectées dans un endroit sûr et sécurisé. De plus, nous prendrons toutes les précautions nécessaires pour protéger vos données contre la perte, la fraude ou
                utilisation indésirable.</p>

            <p><b>AVIS DE COPYRIGHT ET DE MARQUE COMMERCIALE</b></p>
            <p>ELCO Tous droits réservés.</p>

            <p><b>MARQUES COMMERCIALES</b></p>
            <p>Les noms et logos des sociétés et produits réels mentionnés dans le présent document peuvent être des marques commerciales de leurs propriétaires respectifs.</p>

            <p>Les exemples d'entreprises, d'organisations, de produits, de personnes et d'événements décrits ici sont fictifs. Aucune association avec une entreprise, une organisation, un produit, une personne,
                ou l'événement est intentionnel ou doit être déduit.</p>

            <p>Tous les droits non expressément accordés dans les présentes sont réservés.</p>

            <p><b>CONTACT</b></p>
            <p>Pour plus d'informations sur les questions juridiques contenues dans ces conditions d'utilisation, ou pour toute question ou problème concernant ce service, veuillez nous écrire en utilisant le contact
                formulaire disponible sur ce Site.</p>
        </Modal>)
})

export default TermsConditions

// css
const Link = styled.a`
 color: var(--color-heading);
`