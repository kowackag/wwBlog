import React from 'react';
import { NavLink} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const Events = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');

    if (document) {
        const navigation = document.map(({data,uid}) =><NavLink exact to={`/wydarzenia/${uid}`}><h3>{data.title[0].text}</h3></NavLink>);
        return(
            <>
                <h2>Wydarzenia</h2>
                {navigation}
            </>
        )
    }
    return null;
}

export default Events; 