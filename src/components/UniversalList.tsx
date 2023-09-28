import React from 'react';
interface UniversalListProps<T> {
    items: T[] //data for list
    renderItem :(item : T) => React.ReactNode //custom component as list item
}
export default function UniversalList<T> (props: UniversalListProps<T>) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {
                props.items?.map(props.renderItem)
            }
        </div>
    );
};
