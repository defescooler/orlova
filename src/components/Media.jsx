import './Media.css';

const instagramPosts = [
  {
    id: 1,
    url: 'https://www.instagram.com/p/DPsOJxwiFcO/',
    embedUrl: 'https://www.instagram.com/p/DPsOJxwiFcO/embed'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/p/DFOHdDuyg38/',
    embedUrl: 'https://www.instagram.com/p/DFOHdDuyg38/embed'
  },
  {
    id: 3,
    url: 'https://www.instagram.com/p/DNTGPpzsUK_/',
    embedUrl: 'https://www.instagram.com/p/DNTGPpzsUK_/embed'
  },
  {
    id: 4,
    url: 'https://www.instagram.com/p/DEGmWiXMs5e/',
    embedUrl: 'https://www.instagram.com/p/DEGmWiXMs5e/embed'
  },
  {
    id: 5,
    url: 'https://www.instagram.com/p/DS9PoHnjHLg/',
    embedUrl: 'https://www.instagram.com/p/DS9PoHnjHLg/embed'
  },
  {
    id: 6,
    url: 'https://www.instagram.com/p/C7A-wKLC3DU/',
    embedUrl: 'https://www.instagram.com/p/C7A-wKLC3DU/embed'
  }
];

function Media() {
  return (
    <section className="media">
      <div className="media-background"></div>
      <div className="media-wrapper">
        <div className="media-header">
          <h2>Следите за мной в Instagram</h2>
          <a
            href="https://www.instagram.com/almira_life/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            @almira_life
          </a>
        </div>

        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <div key={post.id} className="instagram-post">
              <iframe
                src={post.embedUrl}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title={`Instagram post ${post.id}`}
              />
            </div>
          ))}
        </div>

        <a
          href="https://www.instagram.com/almira_life/"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          Смотреть больше в Instagram
        </a>
      </div>
    </section>
  );
}

export default Media;
