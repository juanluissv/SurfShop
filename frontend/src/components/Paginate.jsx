import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keywordd = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keywordd
                  ? `/shop/page/${x + 1}/${keywordd}`
                  : `/shop/page/${x + 1}/${keywordd}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page} >
              {x + 1} 
            </Pagination.Item >
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
