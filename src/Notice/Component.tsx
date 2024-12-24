import Link from "next/link";
import React from "react";

interface ModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  modalIndex: number; // New prop to track the modal number
}

export const NoticeModal: React.FC<ModalProps> = ({ isModalOpen, handleClose, modalIndex }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Modal #{modalIndex + 1} - Welcome to Our Platform!
          </h2> {/* Display modal number */}
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover new features, explore amazing tools, and get started on your journey with us.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
