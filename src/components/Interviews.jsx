import './Interviews.css';

const interviewsData = [
  {
    id: 1,
    title: 'О питании и здоровье',
    platform: 'TEDx',
    embedUrl: 'https://www.youtube.com/embed/uWXa7_imn-w',
    description: 'Выступление о нутрициологии и здоровом образе жизни'
  },
  {
    id: 2,
    title: 'Интервью с Романом Сухининым',
    platform: 'Роман Сухинин',
    embedUrl: 'https://www.youtube.com/embed/pMWrpln4FN0',
    description: 'Беседа о нутрициологии и здоровом питании'
  },
  {
    id: 3,
    title: 'Medical Media',
    platform: 'Medical Media',
    embedUrl: 'https://www.youtube.com/embed/Et9X68RLylQ',
    description: 'Интервью о медицинских аспектах питания'
  },
  {
    id: 4,
    title: 'Atameken Business',
    platform: 'Atameken Business',
    embedUrl: 'https://www.youtube.com/embed/bEPvHld5_cQ',
    description: 'Интервью о бизнесе в сфере здорового питания'
  }
];

const mediaFeaturesData = [
  {
    id: 1,
    name: 'WE Project',
    logo: '/media/weproject.png',
    url: 'https://weproject.media/articles/detail/sosedi-kak-semeynyy-biznes-ragout-delaet-zabotu-o-pitanii-proshche-i-vkusnee/'
  },
  {
    id: 2,
    name: 'Satbayev University',
    logo: '/media/satbayev.svg',
    url: 'https://satbayev.university/ru/news/satbayev-university-prodvigaet-kulturu-zdorovogo-pitaniya-dlya-detey'
  },
  {
    id: 3,
    name: 'Комсомольская Правда',
    logo: '/media/kp.svg',
    url: 'https://www.kp.kz/daily/27668/5019521/'
  },
  {
    id: 4,
    name: 'Вечерний Алматы',
    logo: '/media/vecherkz.png',
    url: 'https://vecher.kz/ru/article/almatinskie-deputaty-otmetili-neobhodimost-vospitaniia-u-detei-zdorovyh-privychek-pravilnogo-pitaniia.html'
  },
  {
    id: 5,
    name: 'InBusiness',
    logo: '/media/inbusiness.svg',
    url: 'https://inbusiness.kz/ru/tv_programs/rashev-show/almira-orlova-restorator-ekspert-v-oblasti-zdorovogo-pitaniya-2781'
  },
  {
    id: 6,
    name: 'Kursiv',
    logo: '/media/kursiv.svg',
    url: 'https://kz.kursiv.media/2024-11-29/lfst-cheo-kids-food/'
  }
];

function Interviews() {
  return (
    <section className="interviews">
      <div className="interviews-container">
        <h2>Интервью и выступления</h2>
        <p className="interviews-intro">
          Делюсь знаниями о нутрициологии и здоровом питании в интервью и публичных выступлениях
        </p>
        <div className="interviews-grid">
          {interviewsData.map(interview => (
            <div key={interview.id} className="interview-card">
              <div className="interview-video-wrapper">
                <iframe
                  src={interview.embedUrl}
                  title={interview.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="interview-info">
                <span className="interview-platform">{interview.platform}</span>
                <h3>{interview.title}</h3>
                <p>{interview.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="media-features">
          <h3>Публикации в СМИ</h3>
          <div className="media-carousel">
            <div className="media-track">
              {[...mediaFeaturesData, ...mediaFeaturesData].map((media, index) => (
                <a
                  key={`${media.id}-${index}`}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-logo-item"
                  title={media.name}
                >
                  <img src={media.logo} alt={media.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interviews;
