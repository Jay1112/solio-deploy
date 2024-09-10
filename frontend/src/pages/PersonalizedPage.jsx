import React, { useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Button from "../components/ui/Button";
import PersonalizedList from "../components/Personalized/PersonalizedList";
import { setShowCreatePersonalizedModal } from "../store/features/personalizedSlice";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../components/ui/Overlay";
import CreatePersonalizedModal from "../components/Personalized/CreatePersonalizedModal";
import usePersonalized from "../hooks/usePersonalized";

function PersonalizedPage() {
  const dispatch = useDispatch();
  const personalized = useSelector((state) => state.personalized);
  const { fetchPersonalizationTypesList } = usePersonalized();

  useEffect(() => {
    if (!personalized.personalizedTypesList) {
      fetchPersonalizationTypesList();
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="animated animatedFadeInUp fadeInUp overflow-x-auto overflow-y-auto">
        <div className="border-[#B5B2B240] hidden md:flex items-center justify-start p-4 md:p-12">
          <p className="text-xl md:text-5xl font-poppins w-full">
            Your Personal Space
          </p>
        </div>
        <div className="mx-4 md:mx-12 mt-4 md:mt-0 flex items-center justify-center">
          <p className="font-semibold text-xl flex-1">Personalizations</p>
          <Button
            clickHandler={() => dispatch(setShowCreatePersonalizedModal(true))}
            className="primary-button px-2 flex items-center justify-center py-1.5 rounded-sm"
          >
            <span className="text-sm">
              <i className="pi pi-plus"></i>
            </span>
            <span className="px-2 font-poppins hidden md:inline-block">
              Create
            </span>
          </Button>
        </div>
        <div className="p-4 md:p-12 md:py-4">
          <PersonalizedList />
        </div>
      </div>
      {personalized.showCreatePersonalizedModal && (
        <Overlay className={"w-full flex items-center justify-center"}>
          <CreatePersonalizedModal />
        </Overlay>
      )}
      {/* {social.showEditSocialModal && (
        <Overlay className={"w-full flex items-center justify-center"}>
          <EditSocialModal />
        </Overlay>
      )}
      {social.showDeleteSocialModal && (
        <Overlay className={"w-full flex items-center justify-center"}>
          <DeleteSocialModal />
        </Overlay>
      )} */}
    </DashboardLayout>
  );
}

export default PersonalizedPage;
