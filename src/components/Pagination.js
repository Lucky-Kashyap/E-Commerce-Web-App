import React from 'react'

const Pagination = ({productsPerPage,totalProducts,paginate}) => {
    const pageNumbers =[]

    for(let i=1; i<=Math.ceil(totalProducts/productsPerPage);i++){
          pageNumbers.push(i)
    }
  return (
    <nav className='text-center'>
        <ul className="pagination justify-content-center">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)}
                         href="#" 
                        className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
  {/* <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active">
      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul> */}
</nav>
  )
}

export default Pagination