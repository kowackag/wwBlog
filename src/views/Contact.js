import React from 'react';
import {useSinglePrismicDocument} from '@prismicio/react';

import StyledContact from '../styled/Contact.styled';

const Contact = () => {
    const [document] = useSinglePrismicDocument('contact');
    const getData = (doc) => {
        const title = doc.data.title[0].text;
        const name = doc.data.name[0].text;
        const phone = doc.data.phone[0].text;
        const mail = doc.data.mail[0].text;
        const linkedin = doc.data.linkedin.url;
        return [title, name, phone, mail, linkedin]
    }

    if(document) {
        const [title, name, phone, mail, linkedin] = getData(document)
        return(
            <StyledContact>
                <h2>{title}</h2>
                <ul>
                    <h3>{name}</h3>
                    <li>
                        <p>Telefon:</p>
                        <p>{phone}</p>
                    </li>
                    <li>
                        <p>E-mail:</p>
                        <p>{mail}</p>
                    </li>
                    <li>
                        <p>LinkedIn:</p>
                        <p><a href={linkedin}>{linkedin}</a></p>
                    </li>
                </ul>
            </StyledContact>
        ) 
    }
    return null;
}

export default Contact;