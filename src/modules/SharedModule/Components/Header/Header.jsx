function Header({title, description , imgUrl , Bold}) {
  
  return (
    <>
      
      <div className="container-fluid p-3 bg-header">
               <div className="row align-items-center text-white">
                <div className=" offset-1 col-md-7">
                <p className="title"><span className='span'>{Bold}</span>{title} </p>
                    <p> {description} </p>
                </div>
                <div className="col-md-2">
                    <img src={imgUrl} alt="" />
                </div>
               </div>
               </div>
      
    </>
  );
}

export default Header;
