export const Button = (
  { onClick, src, alt, buttonClassName, imgClassName, aClassName, href, type, title }: {
    onClick?: () => void, 
    src: string, 
    alt?: string, 
    buttonClassName?: string,
    imgClassName?: string,
    aClassName?: string,
    href?: string,
    type?: 'button' | 'submit' | 'reset',
    title?: string,
  }) => {
  return (
    <>
      {
        href ? (
          <a 
            href={href} 
            className={aClassName}
          >
            <img 
              src={src}
              alt={alt}
              className={imgClassName}
              title={title}
            />
          </a>
        ) : (
          <button 
            onClick={onClick} 
            type={type} 
            className={buttonClassName}
          >
            <img 
              src={src}
              alt={alt}
              className={imgClassName}
              title={title}
            />
          </button>
        )
      }
    </>
  );
};