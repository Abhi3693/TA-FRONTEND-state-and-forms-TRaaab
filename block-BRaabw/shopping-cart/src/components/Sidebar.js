import React from 'react';

function Sidebar(props) {
  let sizes = props.products.reduce((prev, curr) => {
    prev = prev.concat(curr.availableSizes);
    return prev;
  }, []);
  let uniqueSizes = [...new Set(sizes)];

  return (
    <aside className='flex-20 sidebar'>
      <h2 className='filter-heading'>Sizes:</h2>
      <div className='size-holder padd-2'>
        <ul className='flex gap-1 wrap'>
          {uniqueSizes.map((size) => {
            return (
              <li key={size} onClick={() => props.handleFilterBySize(size)}>
                <span
                  className={
                    props.selectedSizes.includes(size)
                      ? 'active btn size'
                      : 'btn size'
                  }
                >
                  {size}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
// <div className="side-bar flex-30">
//             <h2 className="size">Filter By Sizes:</h2>
//             <div className="size-holder padd-2">
//               <ul className="flex gap-2 wrap">
//                 {uniqueSizes.map((size, i) => {
//                   return <li onClick={handleSizeFilter} key={i} className={state.filterBySize.includes(size) ? "active-size-filter single-size flex justify-center align-center" : "single-size flex justify-center align-center" }>{size.toUpperCase()}</li>
//                 })}
//               </ul>
//             </div>
//             <h2 className="size padd-2">Filter By Price</h2>
//             <div className="range-holder padd-1 flex space-btw">
//               <span>Min:${allPrices[0]}</span>
//               <span className="current-price">Current: ${state.filterByPrice}</span>
//               <span>Max:${allPrices[allPrices.length-1]}</span>
//             </div>
//             <input onChange={handlePriceFilter} name="range" className="price-range" type="range" min="9" max="134.9" value={state.filterByPrice} />
//           </div>
