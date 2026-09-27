type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
      {skill.label}
    </li>
  );
}