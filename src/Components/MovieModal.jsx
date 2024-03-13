import React, { useEffect, useRef } from "react";

function MovieModal({ isOpen, onClose, movie }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const modalStyles = {
    display: isOpen ? "flex" : "none",
    position: "fixed",
    zIndex: 9999,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black background for the modal
    padding: "20px",
    fontFamily: "Arial, sans-serif", // Set font family
    color: "#fff", // Set text color to white
    justifyContent: 'center',
    alignItems: 'center'
  };

  const contentStyles = {
    width: "90%", // Set width of the modal content
    maxWidth: "500px", // Limit maximum width of the modal content
    textAlign: "center", // Center-align content
  };

  const closeButtonStyles = {
    color: "#fff", // Set text color to white
    cursor: "pointer", // Change cursor to pointer on hover
    fontSize: "24px", // Set font size
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  const imageStyles = {
    width: "100%", // Set image width to 100%
    height: "auto", // Let the height adjust automatically to maintain aspect ratio
    borderRadius: "10px", // Add border radius for rounded corners
    marginBottom: "20px", // Add margin at the bottom of the image
    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)", // Add box shadow for a stylish look
  };

  const titleStyles = {
    fontSize: "32px", // Increase font size for title
    marginBottom: "10px", // Add margin at the bottom
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add text shadow for a stylish look
  };

  const overviewStyles = {
    fontSize: "12px", // Decrease font size for overview
    marginBottom: "20px", // Add margin at the bottom
    lineHeight: "1.5", // Increase line height for better readability
  };

  const releaseDateStyles = {
    fontSize: "16px", // Decrease font size for release date
    marginBottom: "10px", // Add margin at the bottom
  };

  return (
    <div style={modalStyles} ref={modalRef}>
      {isOpen && (
        <div style={contentStyles}>
          {movie && (
            <>
              <span className="close" style={closeButtonStyles} onClick={onClose}>&times;</span>
              <h2 style={titleStyles}>{movie.title}</h2>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} style={imageStyles} />
              <p style={overviewStyles}>{movie.overview}</p>
              <p style={releaseDateStyles}>Release Date: {movie.release_date}</p>
              <p style={{ fontStyle: "italic" }}>Language: {movie.original_language}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieModal;
