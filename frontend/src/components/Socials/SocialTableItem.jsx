import React from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  setEditSocialModal,
  setSelectedSocial,
  setDeleteSocialModal,
} from "../../store/features/socialSlice";

function SocialTableItem({ itemData }) {
  const dispatch = useDispatch();

  function handleSocialEdit() {
    dispatch(setSelectedSocial(itemData));
    dispatch(setEditSocialModal(true));
  }

  function handleSocialDelete() {
    dispatch(setSelectedSocial(itemData));
    dispatch(setDeleteSocialModal(true));
  }

  return (
    <div className="flex p-4 gap-4 font-poppins">
      <p className="min-w-[100px] text-2xl flex items-center justify-center">
        <i className={`pi pi-${itemData.platform.icon}`}></i>
      </p>
      <p className="min-w-[100px] md:min-w-[200px] flex items-center justify-start">
        {itemData.platform.name}
      </p>
      <p className="flex-1 flex items-center justify-start min-w-[600px]">
        <a
          href={itemData.link}
          target="_blank"
          className="inline-block bg-subsecondary p-2 flex items-center justify-center rounded-sm mr-2 cursor-pointer"
        >
          <i className="pi pi-external-link"></i>
        </a>
        <span>{itemData.link}</span>
      </p>
      <p className="min-w-[200px] text-center flex items-center justify-start">
        <Button
          clickHandler={handleSocialEdit}
          className="primary-button  px-2 py-2 text-md md:text-sm flex items-center justify-center mr-2 rounded-sm"
        >
          <i className="pi pi-pencil"></i>
        </Button>
        <Button
          clickHandler={handleSocialDelete}
          className="primary-button  px-2 py-2 text-md md:text-sm flex items-center justify-center mx-2 rounded-sm"
        >
          <i className="pi pi-trash"></i>
        </Button>
      </p>
    </div>
  );
}

export default SocialTableItem;
