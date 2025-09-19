


const NoticiaCard = ({ imagen, alt, descripcion, subdescripcion, titulo }) => {
  return (
    <div className="container my-4 h">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={imagen} className="card-img-top" alt={alt} />
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">{descripcion}</p>
              {subdescripcion && (
                <p className="card-text">
                  <small className="text-muted">{subdescripcion}</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiaCard;
