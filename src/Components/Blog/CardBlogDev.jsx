const CardBlogDev = ({ deletePost, handlePostClick }) => {
  return (
    <div>
      <div className='card-blog'>
        <div className='cardHeaderblog'>
          <div className='titleblog'>
            <p>Lorem ipsum.</p>
          </div>
          <div className='deleteblog'>
            <>
              <button
                onClick={() => {
                  deletePost();
                }}
                className='deleteblogButton'
              >
                &#128465; Delete
              </button>
              <button
                onClick={() => {
                  // Lógica para editar el post
                }}
                className='editblogButton'
              >
                &#9998; Edit
              </button>
            </>
          </div>
        </div>
        <div className='cardTextblogContainer'>
          <p>Lorem ipsum dolor sit amet. </p>
        </div>
        <h3>@Facuuuuuu</h3>
        <button className='viewButton' onClick={() => handlePostClick(1)}>
          Leer Más
        </button>
      </div>
    </div>
  );
};
export default CardBlogDev;
