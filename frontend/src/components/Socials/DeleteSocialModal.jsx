import React, { useState } from "react";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteSocialModal } from "../../store/features/socialSlice";
import useSocials from "../../hooks/useSocials";

function DeleteSocialModal() {
  const dispatch = useDispatch();
  const social = useSelector((state) => state.social);
  const { deleteSocialLoader, deleteUserSocial } = useSocials();

  function handleSubmit(e) {
    e.preventDefault();
    if (social?.selectedSocial) {
      deleteUserSocial(social?.selectedSocial?._id);
    }
  }

  function handleCloseModal(e) {
    e.preventDefault();
    dispatch(setDeleteSocialModal(false));
  }

  return (
    <div className="block z-[10] border-2 border-subsecondary bg-black rounded-md p-4 w-full mx-4 md:mx-0 max-w-[600px] shadow-lg mt-20">
      <div className="flex items-center justify-center">
        <p className="flex-1 text-2xl font-poppins">Delete Social</p>
        <Button
          clickHandler={() => dispatch(setDeleteSocialModal(false))}
          className="primary-button  px-2 py-2 text-xl md:text-sm flex items-center justify-center rounded-sm"
        >
          <i className="pi pi-plus rotate-45"></i>
        </Button>
      </div>
      <div className="mt-4">
        <p>Do you really want to delete this Social ?</p>
        <p>
          <a
            href={`${social?.selectedSocial?.link}`}
            target="_blank"
            className="text-subprimary"
          >
            {social?.selectedSocial?.link}
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex justify-between mt-4">
        <Button
          clickHandler={handleCloseModal}
          className="primary-button mt-2 px-4 md:px-2 py-1.5 md:py-[2px] text-xl md:text-lg flex items-center justify-center rounded-sm"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="primary-button mt-2 px-4 md:px-2 py-1.5 md:py-[2px] text-xl md:text-lg flex items-center justify-center rounded-sm"
        >
          {deleteSocialLoader ? "Loading..." : "Delete"}
        </Button>
      </form>
    </div>
  );
}

export default DeleteSocialModal;
