import React from 'react'

const Pagination = ({page,totalPage,setPage}) => {

  console.log(totalPage);
  const handlePage = ()=>{
      const page=[];
      for(let i=1;i<=totalPage;i++){
          page.push(i);
      }
console.log(page);

      return page;
  }

 const pageNumber = handlePage();


 const firstPage = ()=>{
      setPage(1);
 }
 const previousPage = ()=>{
  setPage(prev=>prev-1);
  if(page<=1){
      setPage(1);
  }
  
 }
 const nextPage = ()=>{
  setPage(prev=>prev+1);
 }
 const lastPage = ()=>{
  setPage(totalPage);
 }
 const handlePageNumber = (page)=>{
  setPage(page);
 }

 
    
  return (
    <nav className='text-center'>
        <ul className="pagination justify-content-center">
               
        <button>Delete</button>
        <button disabled={page==1} onClick={firstPage}>{"<<"}</button>
        <button disabled={page==1} onClick={previousPage}>{"<"}</button>
        {
            pageNumber.map(page=>(
                <button key={page.id} onClick={()=>handlePageNumber(page)}>{page}</button>
            ))
        }
        <button disabled={page==totalPage} onClick={nextPage}>{">"}</button>
        <button disabled={page==totalPage} onClick={lastPage}>{">>"}</button>
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