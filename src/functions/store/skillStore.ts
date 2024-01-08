import { create } from "zustand";

export type skillType = "front" | "back" | "others";

interface SkillStore {
  selectedSkill: skillType;
  selectSkill: (skill: skillType) => void;
}

const useSkillStore = create<SkillStore>((set) => ({
  selectedSkill: "front",
  selectSkill: (skill) => set(() => ({ selectedSkill: skill })),
}));

export default useSkillStore;
