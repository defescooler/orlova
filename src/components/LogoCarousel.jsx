import './Logos.css';

function LogoCarousel({ items, wrapperClassName = '', trackClassName = '', itemClassName = '' }) {
  const trackItems = [...items, ...items];

  return (
    <div className={['logos-carousel-wrapper', wrapperClassName].filter(Boolean).join(' ')}>
      <div className="logos-carousel">
        <div className={['logos-track', trackClassName].filter(Boolean).join(' ')}>
          {trackItems.map((item, index) => {
            const keyBase = item?.id ?? item?.name ?? item?.text ?? item?.title ?? 'item';
            const classes = ['logo-item', itemClassName, item?.className].filter(Boolean).join(' ');

            return (
              <div key={`${keyBase}-${index}`} className={classes}>
                {item?.image ? (
                  <img src={item.image} alt={item.name ?? ''} />
                ) : item?.title || item?.subtitle ? (
                  <div className="logo-text-stack">
                    {item?.title ? <span className={item.titleClassName ?? 'logo-text-title'}>{item.title}</span> : null}
                    {item?.subtitle ? (
                      <span className={item.subtitleClassName ?? 'logo-text-subtitle'}>{item.subtitle}</span>
                    ) : null}
                  </div>
                ) : (
                  <span className="logo-text">{item?.text ?? ''}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;

