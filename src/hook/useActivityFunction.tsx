import { axiosInstance } from "@/config/axiosConfig";
import { useQueryClient } from "@tanstack/react-query";

export const useActivityFunction = () => {
  const queryClient = useQueryClient();

  const activityFunction = async (actions: string) => {
    await axiosInstance.post("/admin/activities", {
      action: actions,
    });

    // invalidate cache
    return queryClient.invalidateQueries({ queryKey: ["activities"] });
  };

  return activityFunction;
};
