import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import React from "react";

interface ModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  modalTitle: string;
  notices: any;
}

export const NoticeModal: React.FC<ModalProps> = ({ isModalOpen, handleClose, modalTitle, notices }) => {
  if (!isModalOpen) return null;
  const { introContent, media } = notices;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[800px] h-[600px] relative overflow-auto">
        <button
          onClick={handleClose}
          className="z-50 absolute top-3 right-3 text-5xl text-black hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {modalTitle} {/* Display the dynamic title */}
          </h2>
          {introContent && <RichText className="mb-6" content={introContent} enableGutter={false} />}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This is the detailed content for the notice titled &quot;{modalTitle}&quot;.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {media.map((item: any, index: number) => (
              <div key={index} className="w-64 h-64 overflow-hidden mx-auto">
                {typeof item.mediaItem === 'object' && (
                  <Media
                    fill
                    priority={false}
                    imgClassName="object-cover"
                    loading="lazy"
                    resource={item.mediaItem}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;