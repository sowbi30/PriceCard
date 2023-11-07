 function Feature{
   return(
   <ul className="fa-ul">
              {details.features.map((item) => {
                return (
                  <li className={item.availability ? '' : 'text-muted'}>
                    <span className="fa-li">
                      {item.availability ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon icon={faXmark} />
                      )}
                    </span>
                    {item.access}
                  </li>
                  )
   };
                                    
export default Feature;
