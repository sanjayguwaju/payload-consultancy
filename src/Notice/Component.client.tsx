"use client";

import React, { useState, useEffect } from "react";
import { getNotices } from "@/actions/notice-actions";
import NoticeModal from "./Component";

interface NoticeModalClientProps {
  numberOfModals?: number; // Allow dynamic number of modals
}

export const NoticeModalClient: React.FC<NoticeModalClientProps> = ({ numberOfModals = 3 }) => {
  const [modals, setModals] = useState<boolean[]>([]);
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotices();
        setNotices(data); 
        setModals(new Array(data.length).fill(true));
      } catch (err) {
      }
    };

    fetchNotices();
  }, []);

  const handleClose = (index: number) => {
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = false;
      return newModals;
    });
  };

  return (
    <>
      {modals.map(
        (isModalOpen, index) =>
          isModalOpen && (
            <NoticeModal
              key={index}
              isModalOpen={isModalOpen}
              handleClose={() => handleClose(index)}
              modalTitle={notices[index]?.title || `Notice #${index + 1}`}
              notices={notices[index]}
            />
          )
      )}
    </>
  );
};

export default NoticeModalClient;
