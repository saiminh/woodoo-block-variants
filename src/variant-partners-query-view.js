const initParterQueries = () => {
  const pQueries = document.querySelectorAll('.partners-query');
  if (pQueries.length > 0) {
    pQueries.forEach( (pQuery) => {
      initPartnerQuery(pQuery);
    })
  }
}

const initPartnerQuery = (pQuery) => {
  const scroller = pQuery.querySelector('.wp-block-post-template');
  const onePost = pQuery.querySelector('.wp-block-post');
  if (!onePost) return;
  let postDimensions = onePost.getBoundingClientRect();
  const navLeft = pQuery.querySelector('.partner-nav-left');
  const navRight = pQuery.querySelector('.partner-nav-right');

  navLeft.addEventListener('click', () => {
    let currentScroll = scroller.scrollLeft;
    scroller.scrollTo({ top: 0, left: currentScroll - postDimensions.width, behavior: 'smooth' });
  })
  navRight.addEventListener('click', () => {
    let currentScroll = scroller.scrollLeft;
    scroller.scrollTo({ top: 0, left: currentScroll + postDimensions.width, behavior: 'smooth' });
  })
  window.addEventListener('resize', () => {
    postDimensions = onePost.getBoundingClientRect();
  })
}

document.addEventListener('DOMContentLoaded', initParterQueries() );