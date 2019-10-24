import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = (props) => {
    return (
        <div {...{ className: 'wrapper' }}>
            <ul {...{ className: 'accordion-list' }}>
                {props.items.map((item, key) => {
                    return (
                        <li {...{ className: 'accordion-list__item', key }}>
                            <AccordionItem title={item[props.titleProp]} {...item}>{props.itemTemplate(item)}</AccordionItem>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Accordion;