'use client';

import { useState, useEffect, useRef } from 'react';

const VideoModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen]);

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (modalOpen) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [modalOpen]);

  return (
    <div className="flex justify-center">
      <div>
        <button
          className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
          onClick={() => setModalOpen(true)}
          aria-controls="modal"
          aria-label="Watch the video"
        >
          <img
            className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
            src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734076098/vcnlnmgiijermbyaty6u.jpg"
            width={768}
            height={432}
            alt="Modal video thumbnail"
          />
          {/* Play icon */}
          <svg
            className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
          >
            <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
            <path
              className="fill-indigo-500 drop-shadow-2xl"
              d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
            />
          </svg>
        </button>

        {modalOpen && (
          <>
            <div
              className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
              aria-hidden="true"
            />

            <div
              id="modal"
              className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
              role="dialog"
              aria-modal="true"
            >
              <div className="max-w-5xl mx-auto h-full flex items-center">
                <div
                  ref={modalRef}
                  className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden"
                >
                  <video
                    ref={videoRef}
                    width={1920}
                    height={1080}
                    loop
                    controls
                  >
                    <source src="./video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoModal;