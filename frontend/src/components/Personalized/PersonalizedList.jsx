import React, { useEffect } from "react";
import usePersonalized from "../../hooks/usePersonalized";
import { useSelector } from "react-redux";
import PersonalizedItem from "./PersonalizedItem";

function PersonalizedList() {
  const personalized = useSelector((state) => state.personalized);
  const { fetchUserPersonalizationList } = usePersonalized();

  useEffect(() => {
    if (!personalized.personalizedItemsList) {
      fetchUserPersonalizationList();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 ">
      {personalized?.personalizedItemsList?.map((item) => {
        return <PersonalizedItem key={item._id} itemData={item} />;
      })}
    </div>
  );
}

export default PersonalizedList;
