import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreatePersonalizedModal } from "../../store/features/personalizedSlice";
import toast from "react-hot-toast";
import PersonalizedSelect from "./PersonalizedSelect";

function CreatePersonalizedModal() {
  const dispatch = useDispatch();
  const personalized = useSelector((state) => state.personalized);
  //   const { createNewUserSocial, createPlatformLoader } = useSocials();
  const [personalizedType, setPeronsalizedType] = useState({
    label: "Select",
    value: "microsoft",
    id: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (platform.label === "Select" && platform.value === "microsoft") {
      toast.error("Please Select Your Social");
      return;
    }
    // const link = e.target[0].value ;
    // if(!link){
    //   toast.error("Please Provide Your Social Link");
    //   return;
    // }
    // createNewUserSocial(link,platform.id);
  }

  return (
    <div className="block z-[10] border-2 border-subsecondary bg-black rounded-md p-4 w-full mx-4 md:mx-0 max-w-[600px] shadow-lg mt-20">
      <div className="flex items-center justify-center">
        <p className="flex-1 text-2xl font-poppins">Create Personalized</p>
        <Button
          clickHandler={() => dispatch(setShowCreatePersonalizedModal(false))}
          className="primary-button  px-2 py-2 text-xl md:text-sm flex items-center justify-center rounded-sm"
        >
          <i className="pi pi-plus rotate-45"></i>
        </Button>
      </div>
      <div className="mt-4">
        <PersonalizedSelect
          personalizedType={personalizedType}
          handleSelectPersonalized={(value) => setPeronsalizedType(value)}
        />
      </div>
    </div>
  );
}

export default CreatePersonalizedModal;
