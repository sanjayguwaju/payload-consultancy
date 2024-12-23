"use client";

import React, { useState, useEffect } from "react";
import NoticeModal from "./Component";

export const NoticeModalClient: React.FC = () => {
  const [modals, setModals] = useState<boolean[]>([]);

  useEffect(() => {
    // Open multiple modals (e.g., 3 modals)
    const numberOfModals = 3;
    setModals(new Array(numberOfModals).fill(true)); // Fill array with `true` to open modals
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
      {modals.map((isModalOpen, index) => (
        <NoticeModal
          key={index} // If modals are dynamically added or removed, use a unique id for `key`
          isModalOpen={isModalOpen}
          handleClose={() => handleClose(index)}
          modalIndex={index}
        />
      ))}
    </>
  );
};
