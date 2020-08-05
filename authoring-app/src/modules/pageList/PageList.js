import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Headline, Body } from 'component-library';
import S from './PageList.styles';
import { getAllPages } from './dux/pageListActions';

function PageList() {
  const { error, list } = useSelector(state => state.pageList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPages());
  }, []);
  console.log(error, list);
  let renderPages;
  if (list) {
    renderPages = list.map(page => {
      const { title} = page;
      return <Body>{title}</Body>;
    })
    console.log(renderPages);
  }
  return (
    <div>
      <Headline level={2}>All Pages</Headline>
      {list ? renderPages : ''}
    </div>
  );
}

export default PageList;