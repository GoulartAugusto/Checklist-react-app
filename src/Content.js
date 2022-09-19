import React from 'react'
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    // React need Key for each List item, and that is why a item needs to have a key attribute
    // This is how React identify wich Item has changed, wich Item was added, wich Item was removed
    // React responds into changes in the State and it rerender the .jsx 
    <>
        {items.length ? (
          <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
            <p style={{ marginTop: '2rem' }}>Your List is empty.</p>
        )}
    </>
  )
}

export default Content